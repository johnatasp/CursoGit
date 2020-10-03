# Informações Testes unitários com Jasmine/Karma

| Metódos    | Descrição                                                            |
|------------|----------------------------------------------------------------------|
| describe   | Cria uma suíte de testes.                                            |
| TestBed    | Configura e inicializa o ambiente.                                   |
| it         | Cria um teste.                                                       |
| expect     | Cria uma expectiva, geralmente combinado com metódos de comparações. |
| inject     | Usado para injetar dependências.                                     |
| beforeEach | Usado para executar funções antes de cada teste.                     |
| afterEach  | Usado para executar funções depois de cada teste.                    |

Mais métodos: https://jasmine.github.io/pages/docs_home.html


## Testando componente
```
    import { async, ComponentFixture, TestBed } from '@angular/core/testing';

    import { IncrementComponent } from './increment.component';

    describe('Suíte de testes para o componente de incremento', () => {
    let component: IncrementComponent;
    let fixture: ComponentFixture<IncrementComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
        declarations: [ IncrementComponent ]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(IncrementComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('Deveria incrementar o counter', () => {
        expect(component.counter).toBe(0);
        const button = fixture.debugElement.query(By.css('button')).nativeElement;
        button.click();
        expect(component.counter).toBe(1);
        });
    });
```
O beforeEach foi usado para que em cada teste inicialize uma instância do IncrementComponent.
No teste foi verificado se o valor do counter é iniciado com 0, depois foi pego a referência do elemento nativo do HTML, e foi acionado um evento de click nele e depois verificado se o valor do counter foi incrementado.

## Testando services
```
    import { TestBed, inject } from '@angular/core/testing';

    import { FilmsService } from './films.service';
    import { HttpClientModule } from '@angular/common/http';

    describe('FilmsService', () => {
    beforeEach(() => TestBed.configureTestingModule({
        imports: [HttpClientModule],
        providers: [FilmsService]
    }));

    it('Deveria retornar um objeto de resposta da api', inject([FilmsService], (service: FilmsService) => {
        service.getFilms().subscribe(res => expect(res).toBeDefined());
    }));
    });
```
O beforeEach foi usado para importar o módulo de requisições HTTP, e fornecer o service de Filmes.
No teste foi passado como segundo parmetro o injetor para o service de Filmes, e foi verificado se a resposta de sucesso da requisição é diferente de 'undefined'.

## Testando active route 
```
    describe('Suíte de testes do componente de menu', () => {
    let component: MenuComponent;
    let fixture: ComponentFixture<MenuComponent>;
    let router: Router;

    beforeEach(() => {
    TestBed.configureTestingModule({
        imports: [
            AppModule,
            RouterTestingModule.withRoutes([]),
        ],
    }).compileComponents();

    fixture = TestBed.createComponent(MenuComponent);
    router = TestBed.get(Router)
    });

    it('Deveria adicionar classe active no elemento após redirecionar para a rota', fakeAsync(() => {
        //dectetChanges para monitorar mudanças no template
        fixture.detectChanges();
        //navegação de rotas são promisses
        router.navigate(['stats']).then(
        () => {
            //buscando elemento a com id igual a 'stat'
            let a = fixture.debugElement.query(By.css('a#stat')).nativeElement;
            expect(a.className).toContain('active');
            }
        );
    }));
    });
```



