# Build de Libs Front-end

## Primeiro Passo
* Baixar a Lib

* Procurar a lib no GitLab, fazer o Fork e o clone do projeto.

## Inserindo a Lib no Projeto
 

* Inicialmente abra a lib e o projeto em editores separados. Após isso copie a lib que está dentro da pasta projetos como mostra a imagem abaixo.

* Adicione esta lib a pasta ```projects``` do projeto que você está trabalhando.
<br />

![Lib](https://gitlab.voxtecnologia.com.br/natan.cardoso/docs-dev/raw/master/images/copy-lib.png)

## Alterando arquivos dentro do seu projeto
 
* O primeiro arquivo á ser alterado é o ```tsconfig.json```. Copie as informações da lib no ```tsconfig.json``` e cole no projeto que você está trabalhando como mostra a imagem abaixo.
<br />

* Substitua o path ```dist/``` pelo ```dist-lib/``` como mostra na imagem abaixo.

<br />

![Tsconfig](https://gitlab.voxtecnologia.com.br/natan.cardoso/docs-dev/raw/master/images/tsconfig.png)

* Realize as alterações vista na imagem abaixo para o arquivo ```package.json```, inserindo os comandos necessários para a lib ser executada no projeto.

<br />

![Package](https://gitlab.voxtecnologia.com.br/natan.cardoso/docs-dev/raw/master/images/package.png)

* No arquivo Angular.json você deve inserir as informações da lib original, lembrando em alterar o path de ```projects/``` para ```projects/lib/``` como mostra na imagem abaixo.

<br />

![Angular](https://gitlab.voxtecnologia.com.br/natan.cardoso/docs-dev/raw/master/images/angular.png)

* Dentro dos arquivos da lib que você importou para seu projeto altere os seguintes arquivos selecionados com extensão .JSON,

* Altere os paths com o caminho inicial ```../../``` para ```../../../``` como mostra a imagem abaixo. 

<br />

![ArquivosJsonLib](https://gitlab.voxtecnologia.com.br/natan.cardoso/docs-dev/raw/master/images/arquivosJsonLib.png)

* Copie o Relative Path do arquivo ```public_api```.

<br />

![public_api](https://gitlab.voxtecnologia.com.br/natan.cardoso/docs-dev/raw/master/images/public_api.png)


* Cole o ```Relative Path``` nos modulos que estão chamando o lib de cards genericos substituindo-o pelo caminho relativo e remova sua extenção como na imagem abaixo.

<br />
![modulos](https://gitlab.voxtecnologia.com.br/natan.cardoso/docs-dev/raw/master/images/modulos.png)

* Na Lib cards genericos existe uma particularidade dentro do arquivo ```cards.component.scss```, o caminho do importe tem que ser alterado, verifique a alteração na imagem abaixo.

<br />

![SCSS](https://gitlab.voxtecnologia.com.br/natan.cardoso/docs-dev/raw/master/images/cardsScss.png)

----------------------------------------------------------------------------------------------------------

## Executando o Projeto

* Após adicionada a Lib dentro do projeto é recomendado apagar a pasta ```node-modules``` e o arquivo ```package-lock.json```,  logo depois dependendo do projeto que você esteja trabalhando, deve rodar o comando ```npm install``` ou ```docker-compose up --build``` se o projeto tiver rodando com o Docker. Ele irá reconfigurar as dependências do projeto já com as configurações da lib adicionada no mesmo.

## Instalando script para builds de front
Rode os comandos abaixo para instalar o script para gerar as builds de front
```
sudo chmod +x scripts/build-front.sh
sudo cp scripts/build-front.sh /bin/build-front
```
O script agora está disponível globalmente atrvés do comando abaixo. Basta você ir ao diretório raiz do projeto e executar:
```
build-front
```

## Gerando a build da Lib manualmente

* Finalizado os testes com a lib dentro do seu projeto é hora de passar as alterações para a lib de origin, a mesma que você copiou a os arquivos no inicio desse tutorial.

* Copie apenas as alterações que foram realizadas dentro da lib referente a componentes, modulos, etc...

* As alterações que fizemos nos arquivos `.json` não precisa passar para a lib de origen, pois ela já está corretamente configurada.

* Após ter adicionado os arquivos com as alterações necessárias o primeiro passo é commitar as mesmas e fazer o MR na branch da lib, seguido de um Merge que no momento apenas o líder técnico pode realizar.

* Feito o Merge siga os comandos abaixo: <br />
 `OBS: Esse é para a lib-cards-genericos, verifique o  README.md para configurar cada projeto de libs.`

* 1 - npm run clear

* 2 - git subtree add -P dist/lib-cards-genericos upstream lib-card-genericos

* 3 - rm -rf dist/lib-cards-genericos/*

* 4 - touch dist/lib-cards-genericos/.gitkeep

* 5 - git add ./dist/lib-cards-genericos -f

* 6 - git commit -m "[UPDATE] #0 - limpando build anterior"

* 7 - git subtree push -P dist/lib-cards-genericos origin lib-card-genericos

* 8 - npm run build-lib-prod

* 9 - git add ./dist/lib-cards-genericos -f

* 10 - git commit -m "[UPDATE] #0 - nova build da lib"


* 11 - git subtree push -P dist/lib-cards-genericos origin lib-card-genericos

* 12 - realizar MR para lib de destino Ex: lib-card-genericos = branch que contem todo codigo build com a nova versão da lib

* 13 - criar tag com a nova versão da lib apartir do branch buildado = lib-card-genericos

* 14 - git reset --hard HEAD~3

## Criando a Tag para uso Externo

* 1 - Encontre a Aba da `TAG`.

<br />

![TAG](https://gitlab.voxtecnologia.com.br/natan.cardoso/docs-dev/raw/master/images/lib.png)

* 2 - `New Tag` e adicione a nova versão da Tag sempre alterando o último número da versão.

<br />

![NEW](https://gitlab.voxtecnologia.com.br/natan.cardoso/docs-dev/raw/master/images/newtag.png)

## Alterando a versão da Lib no Projeto

* Dentro do `package.json`, altere a versão da lib para atualiza-la.

![VERSAO](https://gitlab.voxtecnologia.com.br/natan.cardoso/docs-dev/raw/master/images/pakage-versao.png)



