# Issues: Webpack

## Encore.enableSingleRuntimeChunk()
DEPRECATION After calling Encore.enableSingleRuntimeChunk(), a new "runtime.js" will be output and should be included on your page before any other script tags for Encore files.
ERROR Failed to compile with 1 errors16:58:20
error in ./app/Resources/assets/ts/terceiroPasso.ts

Solução: Adição de chamada de método no webpack.config.js
```
.cleanupOutputBeforeBuild()
// Adicionar:
.enableSingleRuntimeChunk()
```