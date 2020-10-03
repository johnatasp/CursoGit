# Issues: Node e NPM

## Error: Node Sass does not yet support your current environment: Linux 64-bit with Unsupported runtime
```
rm -rf node-modules
npm rebuild node-sass
```

## Erro Node Sass ao rodar npm install
DESCRIÇÃO DO ERRO:
```
> node scripts/install.js
Downloading binary from https://github.com/sass/node-sass/releases/download/v3.13.1/linux-x64-72_binding.node
Cannot download "https://github.com/sass/node-sass/releases/download/v3.13.1/linux-x64-72_binding.node": 
HTTP error 404 Not Found
```
SOLUÇÃO:
- Instalar lib node-sass de acordo com versão do Node. `npm i -D node-sass@^4.13.0`

NodeJS  | Minimum node-sass version | Node Module
--------|--------------------------|------------
Node 14 | 4.14+                    | 83
Node 13 | 4.13+                    | 79
Node 12 | 4.12+                    | 72
Node 11 | 4.10+                    | 67
Node 10 | 4.9+                     | 64
Node 8  | 4.5.3+                   | 57

## npm ERR! /usr/bin/git ls-remote
```
npm WARN tar ENOENT: no such file or directory, open '/vox/portal/node_modules/.staging/browserify-0f55c047/example/source_maps/build.sh'
```
Alguma das libs deu problema e foi apontado mais abaixo:
```
npm ERR! Error while executing:
npm ERR! /usr/bin/git ls-remote -h -t git@gitlab.voxtecnologia.com.br:vox/bibliotecas/front-end/lib-vox-mask.git
npm ERR! > GitLab: The project you were looking for could not be found.
npm ERR! fatal: Could not read from remote repository.
npm ERR! Please make sure you have the correct access rights
npm ERR! and the repository exists.
npm ERR! exited with error code: 128
```
Nesse caso foi uma lib da Vox que precisou de autorização no Jenkins.

## npm ERR! missing script
A receita está chamando um script que não foi encontrado. Corrija nos scripts do package.json.

## npm ERR! ng lint
```
> ng lint

ERROR: /disco2/workspace/deploy_analise_livro_front_prod/src/app/analisar-livros/components/motivo-exigencia-livro/motivo-exigencia-livro.component.ts[50, 50]: trailing whitespace
ERROR: /disco2/workspace/deploy_analise_livro_front_prod/src/app/analisar-livros/components/motivo-exigencia-livro/motivo-exigencia-livro.component.ts[99, 8]: Missing semicolon

Lint errors found in the listed files.
```

## error TS2307: Cannot find module 'lib-shared'
Colocar Lib-shared no script de build

## npm ERR! Failed at the inotify@1.4.6 install script.
```
"devDependencies": {
    "sass-loader": "^7.0.1",
    "ts-loader": "^5.3.0",
}
```
## ERROR in node_modules/rxjs/internal/types.d.ts(81,44): error TS1005: ';' expected.
```
"dependencies": {
    "rxjs": "6.0.0",
},
```

## Outras correções com o Node 12
```
"devDependencies": {
    "ajv": "^6.10.2",
    "karma": "^4.0.0",
    "ng-packagr": "^3.0.0-rc.2",
    "tslib": "^1.7.1",
    "tslint": "~5.9.1",
}
```

## Após o downgrade do NPM v5.10.0
```
"dependencies": {
    "electron-to-chromium": "^1.3.322",
},
"devDependencies": {
    "tsickle": ">=0.30.0",
    "typescript": "^2.7.2"
}
```

## npm ERR! code ERR_STREAM_WRITE_AFTER_END
```
npm cache verify
```
A solução desta issue causou em alguns casos as issues abaixo: cb() e syscall stat.

# ISSUES NÃO RESOLVIDAS

## npm ERR! cb() never called!
```
Unhandled rejection Error: premature close
    at PassThrough.onclose (/usr/lib/node_modules/npm/node_modules/mississippi/node_modules/end-of-stream/index.js:47:67)
    at PassThrough.emit (events.js:215:7)
    at emitCloseNT (internal/streams/destroy.js:69:8)
    at processTicksAndRejections (internal/process/task_queues.js:79:21)
```

## npm ERR! code ENOENT
```
npm ERR! path /root/.npm/_cacache/content-v2/sha512/33/57/b4cf7e916323a895150359f330a0bbe99cfb3febc67ae81f0118d8d078b1b15d1a45d780975cac060926aae2477521691dcfcfa09d370d5bd273e0d2a189
npm ERR! code ENOENT
npm ERR! errno -2
npm ERR! syscall stat
npm ERR! enoent ENOENT: no such file or directory, stat '/root/.npm/_cacache/content-v2/sha512/33/57/b4cf7e916323a895150359f330a0bbe99cfb3febc67ae81f0118d8d078b1b15d1a45d780975cac060926aae2477521691dcfcfa09d370d5bd273e0d2a189'
npm ERR! enoent This is related to npm not being able to find a file.
npm ERR! enoent 
```
