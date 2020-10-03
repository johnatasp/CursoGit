# Issues: Bower

## Bower install: Tempo esgotado para lib
Refazer build...
```
[14:53:13] 'bower' errored after 2.13 min
[14:53:13] [31mError[39m in plugin "[36mgulp-bower[39m"
Message:
    Failed to execute "git ls-remote --tags --heads https://github.com/guillaumepotier/Parsley.js.git", exit code of #128
fatal: unable to access 'https://github.com/guillaumepotier/Parsley.js.git/': Failed to connect to github.com port 443: Tempo esgotado para conexão

Details:
    code: ECMDERR
    details: fatal: unable to access 'https://github.com/guillaumepotier/Parsley.js.git/': Failed to connect to github.com port 443: Tempo esgotado para conexão

    exitCode: 128
    data: [object Object]
    domainEmitter: [object Object]
    domainThrown: false

[14:53:13] 'build' errored after 2.23 min
```
Assim como no gulp e node, o bower tem tipo um 'staging' q guarda o q ele está baixando e só exibe na pasta quando der Finished
```
[14:50:58] Starting 'livro-digital'...
[14:51:00] Finished 'livro-digital' after 1.8 s
```

## npm ERR! ng build -prod | lib popper.js
```
An error occured during the build:
Error: ENOENT: no such file or directory, open '/vox/slim-interno-app/src/assets/popper.js/dist/umd/popper.js'
ENOENT: no such file or directory, open '/vox/slim-interno-app/src/assets/popper.js/dist/umd/popper.js'
Error: ENOENT: no such file or directory, open '/vox/slim-interno-app/src/assets/popper.js/dist/umd/popper.js'
npm ERR! code ELIFECYCLE
```
A Lib popper.js é usada pelo Bootstrap como dependência secundária, sendo que se não for colocada sua versão será usada a mais recente, o qual tem uma estrutura diferente de diretórios, etc. Solução: Adição da lib no bower.json:
```
{
    "dependencies": {
        "bootstrap": "v4.0.0-beta",
        "popper.js": "v1.15.0"
    }
}
```