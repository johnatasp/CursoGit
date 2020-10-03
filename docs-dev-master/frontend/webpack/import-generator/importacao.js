/*!
 * 2019 (c) Vox Tecnologia.
 * @author Natan Cardoso <natan@voxtecnologia.com.br>
 * @version 1.1.0
 */
const fs = require('fs-extra');
const recursive = require("recursive-readdir");

class Importacao {

    constructor(){
        this.lib = "ERRO NO IMPORT GENERATOR: ";
    }

    gerarImportacao(destino, diretorio) {
        const stream = fs.createWriteStream(destino);
        const isCSS = destino.substr(-3);
        let lang = [];

        lang[0] = isCSS === 'css' ? '@' : ''; // prefixo de importação
        lang[1] = isCSS === 'css' ? 'css' : 'js'; // diretorio

        if (fs.existsSync(diretorio)) {
            stream.once('open', () => {
                this.buscarArquivos(diretorio, lang).then((res) => {
                    if (res) {
                        stream.write(res);
                        stream.end();
                    } else {
                        this.excluirBundleComErro(destino, "Não há arquivos no diretório: ", diretorio);
                    }
                }).catch(function (erro) {
                    console.log(erro);
                });
            });
        } else {
            this.excluirBundleComErro(destino, "Diretório inexistente: ", diretorio);
        }
    }

    buscarArquivos(diretorio, lang) {
        return new Promise((resolve, reject) => {
            recursive(diretorio, (err, files) => {
                const importar = files.map(
                    val =>  lang[0] + "import '" + 
                            val.replace("assets/"+ lang[1] +"/", "./") + "';"
                );
                resolve(importar.join('\n'));
                reject(err);
            });
        });
    }

    excluirBundleComErro(destino, mensagem, diretorio) {
        fs.unlink(destino, (err) => {
            if (err) throw err;
            console.log("\x1b[31m", this.lib + mensagem + diretorio);
        });
    }

    hasFolderDist(dist) {
        if (!fs.existsSync(dist)) {
            fs.mkdir(dist, { recursive: true }, (err) => {
                if (err) throw err;
            });
        }
    }
}

module.exports = Importacao;
