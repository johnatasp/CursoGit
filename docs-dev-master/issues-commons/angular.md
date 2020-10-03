# Issues: Angular

## Correção do build da lib Breadcrumbs
Correção do build da lib Breadcrumbs, alterando para false no annotateForClosureCompiler. Esta opção diz ao compilador para usar o Tsickle para anotar o JavaScript emitido com os comentários do JSDoc necessários para o Closure Compiler. Esta opção é padronizada para false.

* projects/lib/lib-breadcrumbs/tsconfig.lib.json
```
"angularCompilerOptions": {
    "annotateForClosureCompiler": false,
}    
```
## Correção de build no angular.json
```
"optimization": false,
```