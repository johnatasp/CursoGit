# Fluxo das tarefas

## Buscar ou receber task
* [Mantis](http://mantis.voxtecnologia.com.br/my_view_page.php?refresh=true) para correção de bugs. 
As tasks são direcionadas por um gerente ou líder técnico, mas você pode iniciar numa task desde que esteja no status Aceito e seja da sua equipe.
* [Redmine](http://redmine.voxtecnologia.com.br/my/page) para sprints e melhorias

## Requisitos para iniciar uma task
* Endereço da Página, usuário (tendo acesso interno) e Fluxo para chegar no ponto 
* Protocolo ou outro dado
* Ambiente do banco, projeto(s) e branch

## Primeiro passo do Git em Task comun
```
git checkout master OU git checkout upstream/nome-pacote
git pull upstream master OU git pull upstream nome-pacote
git checkout -b 14031-tarefa-tal 
```
Indica-se criar a branch com o numero do caso e termo relacionado

## Primeiro passo do Git em Sprint
```
git fetch upstream                 *
git checkout sp-nome-sprint
git pull upstream sp-nome-sprint
git push origin sp-nome-sprint
git checkout -b sp-nome-sprint     *
git checkout -b 14051-tarefa-tal
```
* Ao fazer outra task da mesma sprint, não precisa refazer os comandos terminados em asterisco.
## Commits
* É indicado fazer um integrate (git pull) antes de subir, pois pode ter subido algo.
```
git status
git add .
git commit -m "[FIX] #14851 - Ajuste de tal funcionalidade em ponto tal" // Pode ser ADD, INTEGRATE, FIX, FEATURE ...
git push origin 14851-nome-branch
```

## Criar Merge Request
* Abrir link do MR ou abrir git da Vox e Create Merge Request com a branch submetida
* Changes Branchs - Busque o pacote, que é uma branch com um numero. A não ser que o lider tenha solicitado ir direto para produção. Se tiver em sprint deve ser submetido para a branch da sprint.
* O título do MR pode ser o mesmo do commit
* Clica-se em um template
* Descreve o que foi feito
* Coloca-se o id do Mantis / Redmine
* Apaga-se os assuntos não necessários e marca com X nas caixinhas
* Coloca a anotação de acordo com sua equipe ou destino do caso, ex.: @vox/licenciamento
* Verificar discurssões da MR e depois de resolvido clicar em resolvido na discurssão.

## Tags do MR
* Dependência de MR - Existe a dependência de outro MR, e eles devem ser listados na descrição ou comentário de ambos.
* Banco - Atividades relacionadas à criação e modificações na base de dados.
* Direto para Produção - MR's que não passarão pelos testes do QA, e irão direto para o ambiente de Produção.
* Subir Sozinho - Devido ao impacto que pode vir a causar, os testes deste MR devem ocorrer de forma isolada.
* Adequação - Pequenos ajustes, menos prioritários, como alinhamentos, erros de acentuação, etc.
* Caso +48h - Casos de Produção, relatados pelos clientes no Mantis, que estejam abertos a mais de 48 horas.
* Impeditivo - Correção de um ponto em que o usuário não consegue avançar com o fluxo de seu processo.
* Urgente - Correção de um erro crítico, ou que teve solicitação de priorização.
* Melhoria - Implementação de novas features ou refatoração programada.
* Integrate - Integrate Master para outro Branch.
* Performance - Modificação que visa melhorar a performance do sistema.

## Template do MR
```md
| Tópico | Descrição |
| :-- |:-- |
| **Sprint** | Nome da Sprint, caso faça parte |
| **O que foi feito?** | - Descreva o que foi alterado a nível técnico em cada ação (Espera-se um commit para cada ponto). <br>- Você pode explicar o motivo da estratégia usada. <br>- Pode apresentar os benefícios do código. <br>- Deixe claro se fez algo a mais do que o solicitado. |
| **Regra** | Descreva um pouco a regra para o código alterado.  |
| **Caso pai** | Se houver uma task agrupadora |
| **Mantis** | http://mantis.voxtecnologia.com.br/view.php?id=000 |
| **Redmine** | http://redmine.voxtecnologia.com.br/issues/000 |
| **Hubstaff** | https://tasks.hubstaff.com/app/projects/87081/tasks/000 |
| **Dependência** | - xx <br>- xx |
| **Onde tem impacto?** | Nome das funcionalidades que são alteradas por este código |
| **Observação**| - Descreva a prioridade do caso ou algum aviso para o QA. <br>- Se a demanda não estiver concluída indique a porcentagem de como está no momento com esse código.  |
| **Evidência** | Print da tela construída ou modificada, caso a alteração tenha sido grande |
| **Code Review** | Marque o @time que precisa analisar este código |
```