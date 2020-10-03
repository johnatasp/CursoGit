# Boas práticas no Front-end aplicado aos projetos monolíticos da Vox

> Treinamento em construção - Status: 10%

## jQuery
### Projetos na versão 2
- (1.6, 1.8, 2.2, etc.) Portal
    - `Issue:` Atualizar jQuery para versão 3 no projeto Portal
        - Impedimento: fckeditor e dynatree (treeview)

### Projetos na versão 3
- (3.2) Slim Portal
- (3.2) Coleta Requerimento
- (3.3) Slim Portal Maceió
- (3.4) Sigfácil
- (3.4) Certidão Online
- (3.4) Processo Eletrônico

#### Migração do jQuery v2 para v3

| jQuery 2.x           | jQuery 3.x  |
|----------------------|-------------|
|.success()|.done()|
|.error()|.fail()|
|.complete()|.always()|
|.pipe()|.then()|
|$().click(function(e)) { };|$().on("click", function(e)) { };|
|$().live("click", function(e)) { };|$().on("click", function(e)) { };|
|$().bind("click", function(e)) { };|$().on("click", function(e)) { };|
|$().delegate("a", "click", function(e)) { };|$().on("click", function(e)) { };|
|.click()|.trigger("click")|
|.size()|.length|
|.attr("checked", "checked")|.prop("checked",true)|
|.removeAttr("checked")|.prop("checked",false)|
|$(document).on("ready",function(){ });|$(function(){ });|
|$.parseJSON()|$.parse()|
|"use strict"||

## ES6+
> Webpack com Babel
- [Novas features do EcmaScript 6+ no outro tutorial](/trein-intro-js-testes-e2e.md)
- Sigfácil
- Certidão Online

## Bootstrap
### Projetos na versão 3
> `Issue:` Atualizar versão durante implementação do Design System do Gov.BR
- (3.3) Coleta Requerimento
- (3.3) Portal
- (3.3) Processo Eletrônico
- (3.3) Eventos Exclusivos
- (3.4) Certidão Online
- (3.4) Sigfácil

### Projetos na versão 4
- (4.0) Slim Portal
    - `Issue:` Implementar Webpack
- Todos projetos em Angular

#### Boas práticas

**HTML**
- Não esqueça do `<!doctype html>` na primeira linha do html
    - Fazendo isso o navegador irá emular o comportamento da era dos anos 90 (HTML 3) através do modo quirks.


## Sass
- 
- Todos projetos em Angular

#### Boas práticas
- CSS e SASS

## Outras libs e frameworks
> Consulte a versão no package.json ou no bower.json do projeto
- SweetAlert: Avisos em modal (pop-up)
- FontAwesome: Ícones
- Bootstrap Datepicker: Painel com calendário
- Moment: Formatação de Datas
- Parsley: Validação de formulários
- jQuery Mask Plugin: Máscara e filtro de campo de formulário
    - `Issue:` Lib Mask Vox com melhorias e customizações
- Gulp: Task runner
- Webpack: bundle
- ESLint: 
- NPM: Gerenciador de dependências Node
- Angular: [Clique aqui para saber sobre a organização do Angular na Vox](/trein-angular-na-vox.md)