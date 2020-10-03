# App com WebPack 4

O Webpack é um empacotador de código para projetos web, principalmente para JavaScript, mas pode transformar recursos de front-end, como HTML, CSS e até imagens. O Webpack pode executar transformações nos arquivos durante o processo de empacotamento, são os loaders, para Sass, Typescript, Babel, etc. Os plugins, por outro lado, podem integrar-se profundamente ao webpack, pois eles podem registrar-se dentro do sistema de compilação do webpack e acessar (e modificar) o compilador.

![LogoWebpack](https://cdn-images-1.medium.com/max/1200/1*oJj7VCITmRw4VLRm_ud8Sw.png)

## Implantação do Webpack no Sigfácil
O webpack foi implantado em produção no Sigfácil em `9 de julho de 2019`, após dois meses de levantamento, configuração, testes e correções. Os resultados da refatoração podem ser encontrados em: http://redmine.voxtecnologia.com.br/issues/7407. O objetivo foi ter um ganho de performance. Entre os resultados obtidos estão a redução de requisições, diminuição do tempo de carregamento, aumento na pontuação no PageSpeed Insights e suporte a javascript moderno (ES6+.

# Readme para os projetos

## Instalação
- `composer install`: para instalação das dependências do php (back-end).
- `npm run build`: Para rodar pela primeira vez ou simular o modo de produção execute este comando.

## Execução do Webpack
O webpack é um empacotador dos módulos front-end. O Javascript pode ser escrito em ES6+, pois temos o Babel para transpilar os scripts para ES5.
- `npm run dev`: É o comando para execução o webpack em modo desenvolvimento com watch.

## Arquivos front-end
Os recursos front-end encontram-se no diretório `/assets` e em `/web/bootstrap-base`, sendo este último não executado no modo watch, pois é importado posteriormente nos css das UF's, por causa das variáveis. Sendo assim ao fazer alguma alteração nessa pasta, precisa parar o terminal (`Ctrl+C`) e reexecutar o comando npm run dev. As imagens, docs e pdfs estão com diretório final de `dist/assets/images` ao invés de `dist/images`.

Os bundles javascripts (arquivos minificados e concatenados) são preparados através da lib `Import Generator` e depois tratados pelo Webpack. Cada bundle representa uma pasta pai no diretório `/assets/js/`, sendo assim para adicionar uma nova pasta, basta ir em [/web/import-generator/gerar.js](frontend/webpack/import-generator/) e adicionar uma nova chamada do método `gerarImportacao()` (Há um Readme nesta lib). Ele gera arquivos com o final `*.imports.js` que não fazem diferença em serem commitados. Os arquivos minificados em `web/dist/` não são mais submetidos nos MRs.  

O comando do webpack deverá ser executado se tiver alguma alteração no front ou for a primeira vez que rodar o projeto. Tendo já instalado e não tendo alterações no front-end não precisa rodar o npm run dev novamente.

# Tutorial para implantar o Webpack em um projeto da Vox

## Webpack
* Coloca-se os três arquivos de configuração do Webpack na raiz do projeto. 
* Cria-se o diretório `/assets` na raiz do projeto e dentro dela: css, images, js, pdf, podendo ter subpastas. Os arquivos gerados desse tipos estarão no diretório: `/dist/assets/images/**`, ou `/dist/assets/pdf/**`, etc.

## Bibliotecas e Arquivos Javascript
* Deve fazer um levantamento das bibliotecas que estão sendo usadas e buscá-las em [npmjs.com](https://www.npmjs.com/). As não encontradas ou com diferenças, deve-se importar o arquivo das biblioteca em `/assets/js/lib` e colocar seu alias no webpack no arquivo `webpack.common.js` colocando o paramêtro como o a seguir: 

```
resolve: {
    alias: {
        'dynatree': path.resolve('assets/js/lib/jquery-dynatree.js'),
    }
},
```

* Não havendo package.json no projeto basta executar o comando `npm init` e preencher o solicitado. Depois colar o package.json deste projeto, adaptando as dependencies e tags descritivas, como repository e description.
* Deve ser adicionado ao `.gitignore` todas as pastas e arquivos que não devem ser commitados, como: 

```
/node_modules
web/dist/
assets/js/*.imports.js
```

* É indicado usar o site [gitignore.io](https://gitignore.io/) para adicionar no .gitignore arquivos relacionados a uma IDE, SO ou linguagem. 
* Se o projeto usar `Bower` deve ser substituído por NPM, pois o Bower está obsoleto. Para isso basta colocar as dependências no `package.json` ou usar o `npm install [nome-da-lib]`.
* Geralmente a importação de libs se dará desta forma, ex: `import 'bootstrap-sass';`. Se tiver um alias ficará assim, por ex.: `import swal from 'sweetalert2';`. 
* Todas os scripts que estiverem sendo chamados no html de forma incorporada, ou seja, sem arquivo externo, deve ser direcionado a criar um novo arquivo e colocá-lo. As regras CSS devem ser evitadas de colocar no estilo inline ou incorporado.
* Para as funções javascript que são utilizadas por outros scripts, não basta só importar deve-se refatorar atribuindo uma atribuição a cada função, ao invés, do `this.`

* EXEMPLO DE COMO ERA ANTES:

```
Vox.Webservice = function (options) {
    options = $.extend({
        ...
    }, options); 

    this.useS09 = function () {
        ...
        return this;
    };

    return this;
```

* EXEMPLO DE COMO É AGORA:

```
const Webservice = function (options) {
    var options = $.extend({
        ...
    }, options); 

    var useS09 = function () {
        ...
        return this;
    };

    return {
        useS09: useS09
    };

});

export { Webservice };
```

* Quando for importar um script como o anterior fará: `import { Subject } from './vox.webservice';`. Não precisa da extensão, se o arquivo for javascript. Só deve ser adicionado ao return as funções que deseja exportar. 
* Se não desejar utilizar o return, deverá utilizar o nome de cada função necessária ao importar, como: `import { doS09S11, s11Baixa } from "../vox/vox.receita";`.

## Twitter Bootstrap
* Bootstrap com Sass 3.7: Essa é a versão e o pre-processador css usado no Sigfácil, instalado com a lib node: bootstrap-sass. A oficial com a versão mais recente é a lib bootstrap.

* Por exemplo, cada junta comercial que a Vox trabalha deve ter apenas um arquivo de destino para o estilo css, sendo com importações comuns e variavéis específicas. 

* Para isso precisa-se colocar à parte os arquivos scss, pois apresentará erro se importar as variavéis ao mesmo tempo. Por isso, tem sido colocado no diretório `/web/bootstrap-base` os arquivos gerais do bootstrap, junto com um arquivo `_commom.scss` importando o bootstrap e outras libs que não tenham problema de compatibilidade, como sweetAlert, por exemplo:

````
$bootstrap-sass-asset-helper: true;
@import "~bootstrap-sass/assets/stylesheets/_bootstrap";

@import './mixins';
@import './scaffolding';
@import './utilities';
@import './buttons';
...
@import './sweet-alert.scss';
...
````

* Nesse mesmo diretório deve ser colocado pastas para cada junta ou diretório válido com seus estilos específicos. 

* Já no `/assets/css/**` deve colocar apenas a importação destes arquivos usando um alias configurado no Webpack, como o dynatree citado acima. Tendo uma imagem de fundo específica deve ser colocada aqui também, por exemplo:

```
#portal-pb{
    background: url(/dist/assets/images/pb/data-bg.jpg) repeat;
}

@import '~bootstrap/pb/variables-pb';
@import '~bootstrap/pb/header-pb';
@import "../bg-commons";
@import '~bootstrap/common';
```

* As imagens de fundo compartilhadas podem ser colocadas em: `assets/css/bg-commons.scss`

```
.image-result {
    background-repeat: no-repeat;
    background-image: url("/dist/assets/images/image-result.png");
}
```

* Essa configuração do estilo css, resultará na seguinte chamada:

```
<link media="all" rel="stylesheet" href="{{ asset('dist/css/pb/main.css') }}">
```

* As Libs extras que tenham css e não esteja no npm deve ser colocada em `/assets/css/lib/`.

## Font-awesome 4.7
* Outras libs CSS que precisam estar separadas do Bootstrap devem ser colocadas em `/assets/css`. Para seu uso precisa-se antes do import colocar a seguinte atribuição:

```
$fa-font-path: "~font-awesome/fonts/";
@import "~font-awesome/scss/font-awesome";
```

* As fontes do font-awesome com extensões: otf, eot, svg, ttf, woff e woff2 devem ser colocados em `/assets/fonts`.
* No HTML sua chamada se dará no head. Sendo o asset() uma chamada do Symfony, não o usando pode colocar sem ele e iniciando com /:

```
<link rel="stylesheet" type="text/css" href="{{ asset('dist/css/font-awesome.css') }}">
```
* Se houver glyphicons deve ser trocado por icone relativo do font-awesome.

## Import Generator
- [Gerador de imports de arquivos, com objetivo de unir arquivos de acordo com a necessidade](frontend/webpack/import-generator/)

## Alterar receita de deploy
* Retirar chamadas do Gulp no composer. E adicionar `npm run build` à receita do jenkins ou colocá-lo no script do composer:

````
"scripts": {
    "post-autoload-dump": [
        "npm run build"
    ]
}    
````