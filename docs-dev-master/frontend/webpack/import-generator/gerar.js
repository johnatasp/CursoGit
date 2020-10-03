/*!
 * 2019 (c) Vox Tecnologia.
 * @author Natan Cardoso <natan@voxtecnologia.com.br>
 * @version 1.1.0
 */
const Importacao = require('./importacao');
const i = new Importacao();

i.hasFolderDist("web/dist");
i.gerarImportacao("assets/js/site.imports.js", "assets/js/site");
i.gerarImportacao("assets/css/lib.imports.css", "assets/css/lib");
i.gerarImportacao("assets/css/theme-pb.imports.css", "assets/css/pb");