# Utilidades Extras

## APONTAR PARA DEMO / HOMO
* Buscar arquivos: `comum/config/config.ini` e `principal/config/config.ini`
* Nos trechos de `[deve:default]` onde tiver os paramêtros `host, port e dbname` trocar para:
```
resources.db.params.host = dbdemo
resources.db.params.port = 5433
resources.db.params.dbname = demonstracao
```
* As alterações acima podem ser salvas em stash dando `git stash save dbdemo`. 
* Na próxima vez que precisar, dará um `git stash list` para verificar o indice e depois `git stash apply stash@{0}`
* Abrir projeto [Security](https://gitlab.voxtecnologia.com.br/vox/security) e ir no arquivo: `app/config/parameters.yml` e alterar tudo de deve para:
```
database_deve_host: dbdemo
database_deve_port: 5433
database_deve_name: demonstracao
database_deve_user: usr_autenticacao
redis_host_deve: redis.voxtecnologia.com.br
database_deve_replica1_host: dbdemo
database_deve_replica1_port: 5433
```
* Rodar `sudo service apache2 restart`
* Pronto! Para homologação são os seguintes dados:
```
database_deve_host: dbreplicaprod
database_deve_port: 5434
database_deve_name: homologacao
```

## GIT STASH
* git stash list - verificar stash existenstes
* git stash - salvar o ponto
* git stash save "name" - salvar com o nome
* git stash apply stash@{0} - ir direto para uma stash
* git stash drop  stash@{0} - apagar stash

obs.. entrar pelo numero e muda-se como uma pilha

## Compartilhar código de pasta public
Execute o build, na pasta public (dist) mantenha onde está ou copie essa pasta para outro lugar e abra o terminal nessa pasta. Execute o comando abaixo e depois acesse no navegador conforme o link com o ip da máquina que está servindo. (Para consultar execute ifconfig).
```
php -S 0.0.0.0:8080
http://10.1.1.203:8080/
```

## TROCAR XDEBUG
sudo -i
/etc/vox/php-fpm/bin/install.sh local 7.3.6

`sudo gedit /etc/vox/php-fpm/env/local/etc/php/cli/php.ini`
ai troca o path do xdebug.so por esse aqui
/opt/php/lib/php/extensions/no-debug-non-zts-20170718/xdebug.so
```
[Xdebug]
zend_extension="/opt/php/lib/php/extensions/no-debug-non-zts-20170718/xdebug.so"
xdebug.remote_enable = 1
xdebug.remote_port = 9000
xdebug.idekey = xdebug
xdebug.max_nesting_level = 512
xdebug.file_link_format = phpstorm://open?%f:%l

zend_extension=xdebug.so
xdebug.default_enable=1
xdebug.remote_handler=dbgp
xdebug.remote_enable=1
xdebug.remote_autostart=1
xdebug.remote_port=9000
xdebug.remote_host=10.1.1.80
xdebug.remote_connect_back=1
xdebug.max_nesting_level=250
xdebug.idekey=xdebug
```
colar nesse caminho aqui
sudo gedit /opt/php/conf.d/xdebug.ini
substituir o ip pelo da sua maquina

## Adicionar branch no terminal
`sudo gedit ~/.bashrc` OU `sudo gedit ~/.bash_profile`

Colar no final do arquivo essa linha:
```bash
export PS1='\u@\h\[\033[01;34m\] \w\[\033[0;32m\]$(__git_ps1 " (%s)")\[\033[01;34m\]$\[\033[00m\] '
```
Fechar e abrir o terminal para aplicar alteração. [Saiba mais](https://glaucocustodio.github.io/2013/03/15/exibir-branch-atual-em-repositorios-git-no-terminal/)
