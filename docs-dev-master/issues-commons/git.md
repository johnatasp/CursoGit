# Issues: Git

## Atualização para novo GitLab
* Copia o [SSH Key](http://git.voxtecnologia.com.br/profile/keys) do Gitlab antigo e cola no novo [GitLab](https://gitlab.voxtecnologia.com.br/profile/keys). 
* Abre o projeto desejado e faz o Fork.
```
git remote set-url origin git@gitlab.voxtecnologia.com.br:vox/VOCE/FORK-PROJETO.git
```

* Abre o projeto original, copia a url do clone e cola alterando abaixo:
```
git remote set-url upstream git@gitlab.voxtecnologia.com.br:vox/GRUPO/PROJETO.git
```
## Commitou errado ou sem branch e deseja voltar ao estado do commit anterior
```
git reset --hard HEAD~1
```
## Voltar a estado do commit atual
```
git reset --hard
```