# Import Generator
Gerador de imports de arquivos
Versão 1.1 - Autor: Natan Cardoso (Vox) - Junho/2019

## Motivação para o script
Utilizado para gerar bundles de arquivos Javascript, concatenando arquivos que estejam em um mesmo diretório. Se o diretório colocado tiver subpastas, o gerador também captura. Nesse projeto foi usado este criador de bundles JS, pois a configuração projetada para o Webpack captura todos os arquivos em `/assets` e lança no `/web/dist` com o mesmo path. Foi necessário essa estratégia, pois a filosofia do original do webpack é importar arquivo por arquivo, contudo usando desta forma pode ser chamado no html um conjunto de arquivos de mesma responsabilidade concatenados num arquivo. O webpack também tem a opção de criar bundles, contudo o que inviabilizou foi a configuração dos entry's.

## O que acontece por debaixo dos panos?
Ao executar a função no arquivo `gerar.js` é criado os bundles que devem ser criados de acordo com as pastas base em `/assets/js`. Os bundles são criados com os mesmos nomes das pastas com a terminação `.imports.js`. Ao passar pelo Webpack passasse pelo Babel, o qual é transpilado os scripts em ES6, e retira-se a terminação imports do nome do arquivo. A implementação possui validação de diretórios inexistentes e sem arquivos.

## Como utilizar
- Copie os scripts e crie uma pasta 'import-generator' dentro do diretório público, no exemplo abaixo essa pasta é a 'web'.
- Atualize os scripts do package.json:
```json
"scripts": {
    "start": "npm run imports && npm run watch",
    "imports": "node web/import-generator/gerar.js",
    "watch": "webpack --config webpack.dev.js --watch",
    "build": "npm run imports && npm run prod && npm run rm",
    "prod": "webpack --config webpack.prod.js",
    "rm": "rm -rf web/dist/css/*.js , web/dist/css/**/*.js , web/dist/images , web/dist/node_modules"
},
```
- Altere em gerar.js o nome do novo arquivo e o caminho dos arquivos originais.
- O 'imports' tem que manter, mas na hora de usar o arquivo chame sem ele, por exemplo: 'vox.imports.js' será 'vox.js'.
