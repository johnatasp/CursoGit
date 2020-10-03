#!/bin/bash

red=`tput setaf 1`
green=`tput setaf 2`
yellow=`tput setaf 3`
reset=`tput sgr0`

while true; do
    read -p "${yellow}Você encontra-se dentro do diretório raiz da aplicação que deseja criar a build? [s/n]: " sn
    case $sn in
        [Ss] ) echo \ && break;;
        [Nn] ) echo \ && "${red}Processo interrompido!"; exit;;
        * ) echo "Por favor, responda s(sim) ou n(não).";;
    esac
done

while true; do
    read -p "${yellow}Deseja realizar uma instalação limpa do NPM? [s/n]: " sn
    case $sn in
        [Ss] ) rm -rf ./node_modules && rm ./package-lock.json && npm i; break;;
        [Nn] ) echo \ && break;;
        * ) echo "Por favor, responda s(sim) ou n(não).";;
    esac
done

echo "${reset}"

read -p "Qual o nome da branch usada para a build? (Ex.: lib-grid... Branch do upstream): " branch
BRANCH=$branch

read -p "Qual o script npm para gerar a build? (Ex.: build --prod grid... Script do package.json): " script
SCRIPT=$script

read -p "Informe o nome da pasta gerada pelo script de build? (Ex.: grid... dest do ng-package.json): " folder
FOLDER=$folder

run_process()
{
    echo

    echo "Removendo branch remota"
    git push origin --delete $BRANCH

    # ------------------------------------------------------------------------------

    echo "Removendo dist local do projeto"
    rm -rf dist

    # ------------------------------------------------------------------------------

    echo "Puxando dist do repositório upstream"
    git subtree add -P dist/$FOLDER upstream $BRANCH

    # ------------------------------------------------------------------------------

    echo "Limpando dist vindo do repositório upstream"
    rm -rf dist/$FOLDER/*

    # ------------------------------------------------------------------------------

    echo "Adicionando gitkeep"
    touch dist/$FOLDER/.gitkeep

    # ------------------------------------------------------------------------------

    echo "Adicionando as mudanças da dist ao stage do git"
    git add ./dist/$FOLDER -f

    # ------------------------------------------------------------------------------

    echo "Comitando os novos arquivos da dist que estão no stage"
    git commit -m "[UPDATE] #0 - Limpando build anterior"

    # ------------------------------------------------------------------------------

    echo "Enviando os arquivos para o origin"
    git subtree push -P dist/$FOLDER origin $BRANCH

    # ------------------------------------------------------------------------------

    echo "Gerando a build com as novas atualizações"
    npm run $SCRIPT

    # ------------------------------------------------------------------------------

    echo "Adicionando a nova build ao stage do git"
    git add ./dist/$FOLDER -f

    # ------------------------------------------------------------------------------

    echo "Comitando os arquivos da nova build"
    git commit -m "[UPDATE] #0 - Nova build da library"

    # ------------------------------------------------------------------------------

    echo "Enviando a nova build para o origin"
    git subtree push -P dist/$FOLDER origin $BRANCH
    
    # ------------------------------------------------------------------------------

    echo "Você agora deve criar o MR e depois uma tag no repositório usando a branch: $BRANCH"
    echo "Fique atento ao nome da nova tag para seguir sua semântica."
    
    echo
    
    # ------------------------------------------------------------------------------

    echo "${green}PARABÉNS..."
    
    echo
    
    echo "${green}Biblioteca publicada! Ao finalizar o MR execute: git reset --hard HEAD~3"

    echo "${reset}"
}

echo

while true; do
    read -p "Podemos continuar? [s/n]: " sn
    case $sn in
        [Ss] ) run_process; break;;
        [Nn] ) echo "Bye, bye!!!"; exit;;
        * ) echo "Por favor, responda s(sim) ou n(não).";;
    esac
done
