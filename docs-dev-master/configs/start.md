# PASSOS INICIAIS

## Adicionar nas configurações do proxy da rede
* Proxy HTTPS:    10.1.1.1 :: 3127
* Acessar no Google Chrome: [chrome://settings/?search=proxy](chrome://settings/?search=proxy). 
* Clique no item `Configurações do proxy`. 
* Cole o texto abaixo no campo `ignorar máquinas`:
```
localhost, 127.0.0.0/8, ::1, deve.api.voxtecnologia.com.br, *.diariomunicipal.com.br, *.sigfacil.com.br, *.empresafacil.ap.gov.br, *.facilita.al.gov.br, *.redesim.pb.gov.br, *.empresafacil.pr.gov.br, *.redesim.rn.gov.br, *.empresasuperfacil.am.gov.br, *.empresafacil.ma.gov.br, *.empresafacil.go.gov.br, *.empresafacil.ro.gov.br, *.empresafacil.to.gov.br, 10.0.0.0/8, *.manaus.am.gov.br, *agiliza.se.gov.br, *portaldoempreendedorgoiano.go.gov.br, *piauidigital.pi.gov.br, *maceio.al.gov.br, *simplifica.to.gov.br, *-autonomo.voxtecnologia.com.br, deve-siarco.voxtecnologia.com.br, *.simplifica.es.gov.br, *.simplifica.to.gov.br, *.manaus.am.gov.br, *.maceio.al.gov.br, gitlab.voxtecnologia.com.br, *-autenticacao.voxtecnologia.com.br, deve.voxtecnologia.com.br, deve-api.voxtecnologia.com.br
```

## IDE: PHP Storm
* Download: https://www.jetbrains.com/toolbox/app/
* Adicione no /etc/hosts
```
1.2.3.4 account.jetbrains.com
1.2.3.4 http://www.jetbrains.com
1.2.3.4 www-weighted.jetbrains.com
0.0.0.0 account.jetbrains.com
```
* Licence Key - Tente uma das chaves:
```
10NFY7OIEG-eyJsaWNlbnNlSWQiOiIxME5GWTdPSUVHIiwibGljZW5zZWVOYW1lIjoiSVAgQXlkYWV2IFN1bGFtYmVrIEFkYW1vdmljaCIsImFzc2lnbmVlTmFtZSI6Ik11cmFkIG1hcnRpcm9zeWFuIiwiYXNzaWduZWVFbWFpbCI6Im1hcnRpcm9zeWFubXVyYWRAcHJvdG9ubWFpbC5jb20iLCJsaWNlbnNlUmVzdHJpY3Rpb24iOiIiLCJjaGVja0NvbmN1cnJlbnRVc2UiOnRydWUsInByb2R1Y3RzIjpbeyJjb2RlIjoiUFMiLCJmYWxsYmFja0RhdGUiOiIyMDE5LTA3LTA5IiwicGFpZFVwVG8iOiIyMDIwLTA3LTA4In1dLCJoYXNoIjoiMTM2NjE4MjcvNzQwNzQ1MnAiLCJncmFjZVBlcmlvZERheXMiOjcsImF1dG9Qcm9sb25nYXRlZCI6dHJ1ZSwiaXNBdXRvUHJvbG9uZ2F0ZWQiOnRydWV9-js3wgLE90VxgofXjbt4fCJc1PGD/rZBgxceKIfpao2+n1rdWmGQhC1k/SzeF80dF28V0oe2TG0TVO4nC1MCGP0rpndIlSZtcD9QVbofsh/i9pXT0gps2DM8z4/tq09shm4P9IRgTyBNm2Ia+Z5iduf1COInwwgDKa8xLrjDF6iUbLOe6W6S+TdRo+26SNyDvjzzpHMwuQVfYxMUGkAIOcNZk5+qIkLF3KVjRfy+n8yFN6k6ntLkhaUYPqAshMwooNmN2m1lnzlqUNsprgMOUo5WcjIsOI2+EEvKQx4xal+ghgLmSvlzzLi1GChshs5OncZdBVNtlkZtzvI2w4XvvvA==-MIIElTCCAn2gAwIBAgIBCTANBgkqhkiG9w0BAQsFADAYMRYwFAYDVQQDDA1KZXRQcm9maWxlIENBMB4XDTE4MTEwMTEyMjk0NloXDTIwMTEwMjEyMjk0NlowaDELMAkGA1UEBhMCQ1oxDjAMBgNVBAgMBU51c2xlMQ8wDQYDVQQHDAZQcmFndWUxGTAXBgNVBAoMEEpldEJyYWlucyBzLnIuby4xHTAbBgNVBAMMFHByb2QzeS1mcm9tLTIwMTgxMTAxMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAxcQkq+zdxlR2mmRYBPzGbUNdMN6OaXiXzxIWtMEkrJMO/5oUfQJbLLuMSMK0QHFmaI37WShyxZcfRCidwXjot4zmNBKnlyHodDij/78TmVqFl8nOeD5+07B8VEaIu7c3E1N+e1doC6wht4I4+IEmtsPAdoaj5WCQVQbrI8KeT8M9VcBIWX7fD0fhexfg3ZRt0xqwMcXGNp3DdJHiO0rCdU+Itv7EmtnSVq9jBG1usMSFvMowR25mju2JcPFp1+I4ZI+FqgR8gyG8oiNDyNEoAbsR3lOpI7grUYSvkB/xVy/VoklPCK2h0f0GJxFjnye8NT1PAywoyl7RmiAVRE/EKwIDAQABo4GZMIGWMAkGA1UdEwQCMAAwHQYDVR0OBBYEFGEpG9oZGcfLMGNBkY7SgHiMGgTcMEgGA1UdIwRBMD+AFKOetkhnQhI2Qb1t4Lm0oFKLl/GzoRykGjAYMRYwFAYDVQQDDA1KZXRQcm9maWxlIENBggkA0myxg7KDeeEwEwYDVR0lBAwwCgYIKwYBBQUHAwEwCwYDVR0PBAQDAgWgMA0GCSqGSIb3DQEBCwUAA4ICAQAF8uc+YJOHHwOFcPzmbjcxNDuGoOUIP+2h1R75Lecswb7ru2LWWSUMtXVKQzChLNPn/72W0k+oI056tgiwuG7M49LXp4zQVlQnFmWU1wwGvVhq5R63Rpjx1zjGUhcXgayu7+9zMUW596Lbomsg8qVve6euqsrFicYkIIuUu4zYPndJwfe0YkS5nY72SHnNdbPhEnN8wcB2Kz+OIG0lih3yz5EqFhld03bGp222ZQCIghCTVL6QBNadGsiN/lWLl4JdR3lJkZzlpFdiHijoVRdWeSWqM4y0t23c92HXKrgppoSV18XMxrWVdoSM3nuMHwxGhFyde05OdDtLpCv+jlWf5REAHHA201pAU6bJSZINyHDUTB+Beo28rRXSwSh3OUIvYwKNVeoBY+KwOJ7WnuTCUq1meE6GkKc4D/cXmgpOyW/1SmBz3XjVIi/zprZ0zf3qH5mkphtg6ksjKgKjmx1cXfZAAX6wcDBNaCL+Ortep1Dh8xDUbqbBVNBL4jbiL3i3xsfNiyJgaZ5sX7i8tmStEpLbPwvHcByuf59qJhV/bZOl8KqJBETCDJcY6O2aqhTUy+9x93ThKs1GKrRPePrWPluud7ttlgtRveit/pcBrnQcXOl1rHq7ByB8CFAxNotRUYL9IF5n3wJOgkPojMy6jetQA5Ogc8Sm7RG6vg1yow==
```

```
CATF44LT7C-eyJsaWNlbnNlSWQiOiJDQVRGNDRMVDdDIiwibGljZW5zZWVOYW1lIjoiVmxhZGlzbGF2IEtvdmFsZW5rbyIsImFzc2lnbmVlTmFtZSI6IiIsImFzc2lnbmVlRW1haWwiOiIiLCJsaWNlbnNlUmVzdHJpY3Rpb24iOiJGb3IgZWR1Y2F0aW9uYWwgdXNlIG9ubHkiLCJjaGVja0NvbmN1cnJlbnRVc2UiOmZhbHNlLCJwcm9kdWN0cyI6W3siY29kZSI6IklJIiwicGFpZFVwVG8iOiIyMDIwLTAxLTA4In0seyJjb2RlIjoiQUMiLCJwYWlkVXBUbyI6IjIwMjAtMDEtMDgifSx7ImNvZGUiOiJEUE4iLCJwYWlkVXBUbyI6IjIwMjAtMDEtMDgifSx7ImNvZGUiOiJQUyIsInBhaWRVcFRvIjoiMjAyMC0wMS0wOCJ9LHsiY29kZSI6IkdPIiwicGFpZFVwVG8iOiIyMDIwLTAxLTA4In0seyJjb2RlIjoiRE0iLCJwYWlkVXBUbyI6IjIwMjAtMDEtMDgifSx7ImNvZGUiOiJDTCIsInBhaWRVcFRvIjoiMjAyMC0wMS0wOCJ9LHsiY29kZSI6IlJTMCIsInBhaWRVcFRvIjoiMjAyMC0wMS0wOCJ9LHsiY29kZSI6IlJDIiwicGFpZFVwVG8iOiIyMDIwLTAxLTA4In0seyJjb2RlIjoiUkQiLCJwYWlkVXBUbyI6IjIwMjAtMDEtMDgifSx7ImNvZGUiOiJQQyIsInBhaWRVcFRvIjoiMjAyMC0wMS0wOCJ9LHsiY29kZSI6IlJNIiwicGFpZFVwVG8iOiIyMDIwLTAxLTA4In0seyJjb2RlIjoiV1MiLCJwYWlkVXBUbyI6IjIwMjAtMDEtMDgifSx7ImNvZGUiOiJEQiIsInBhaWRVcFRvIjoiMjAyMC0wMS0wOCJ9LHsiY29kZSI6IkRDIiwicGFpZFVwVG8iOiIyMDIwLTAxLTA4In0seyJjb2RlIjoiUlNVIiwicGFpZFVwVG8iOiIyMDIwLTAxLTA4In1dLCJoYXNoIjoiMTE1MzA4ODUvMCIsImdyYWNlUGVyaW9kRGF5cyI6MCwiYXV0b1Byb2xvbmdhdGVkIjpmYWxzZSwiaXNBdXRvUHJvbG9uZ2F0ZWQiOmZhbHNlfQ==-BZLL+H88k449OQC56NsqU0fwb6wMAX1Di+CK5HS46DuOD1E68HPiTqREdn8DzrLVAoMkJReaH30RaIDLwUI8GEFifDcCYE5RbpE5ApNJ8mcUJr8oA1nrjY9IzZCgrSBFr4GAOLqSfXH+1UJ3K8UPqGh8nThomnKW9Jvv9pA7HIH/KrNm2RLV/aNMHWO8Q44A8ToXm7g5FS2lW903URPQ0KFgxT11w/KL81UkHm6yUXC7/LTAygIBArI8j+XUk3rlz4rpi2wrJclYXukrKQqH/V6CTbnVV3d6XAdtCqjryQ2Ga7bP/XTLjwAGwPEB3Q1W7LHNQ7CsyvZG/oTSOgD2YQ==-MIIElTCCAn2gAwIBAgIBCTANBgkqhkiG9w0BAQsFADAYMRYwFAYDVQQDDA1KZXRQcm9maWxlIENBMB4XDTE4MTEwMTEyMjk0NloXDTIwMTEwMjEyMjk0NlowaDELMAkGA1UEBhMCQ1oxDjAMBgNVBAgMBU51c2xlMQ8wDQYDVQQHDAZQcmFndWUxGTAXBgNVBAoMEEpldEJyYWlucyBzLnIuby4xHTAbBgNVBAMMFHByb2QzeS1mcm9tLTIwMTgxMTAxMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAxcQkq+zdxlR2mmRYBPzGbUNdMN6OaXiXzxIWtMEkrJMO/5oUfQJbLLuMSMK0QHFmaI37WShyxZcfRCidwXjot4zmNBKnlyHodDij/78TmVqFl8nOeD5+07B8VEaIu7c3E1N+e1doC6wht4I4+IEmtsPAdoaj5WCQVQbrI8KeT8M9VcBIWX7fD0fhexfg3ZRt0xqwMcXGNp3DdJHiO0rCdU+Itv7EmtnSVq9jBG1usMSFvMowR25mju2JcPFp1+I4ZI+FqgR8gyG8oiNDyNEoAbsR3lOpI7grUYSvkB/xVy/VoklPCK2h0f0GJxFjnye8NT1PAywoyl7RmiAVRE/EKwIDAQABo4GZMIGWMAkGA1UdEwQCMAAwHQYDVR0OBBYEFGEpG9oZGcfLMGNBkY7SgHiMGgTcMEgGA1UdIwRBMD+AFKOetkhnQhI2Qb1t4Lm0oFKLl/GzoRykGjAYMRYwFAYDVQQDDA1KZXRQcm9maWxlIENBggkA0myxg7KDeeEwEwYDVR0lBAwwCgYIKwYBBQUHAwEwCwYDVR0PBAQDAgWgMA0GCSqGSIb3DQEBCwUAA4ICAQAF8uc+YJOHHwOFcPzmbjcxNDuGoOUIP+2h1R75Lecswb7ru2LWWSUMtXVKQzChLNPn/72W0k+oI056tgiwuG7M49LXp4zQVlQnFmWU1wwGvVhq5R63Rpjx1zjGUhcXgayu7+9zMUW596Lbomsg8qVve6euqsrFicYkIIuUu4zYPndJwfe0YkS5nY72SHnNdbPhEnN8wcB2Kz+OIG0lih3yz5EqFhld03bGp222ZQCIghCTVL6QBNadGsiN/lWLl4JdR3lJkZzlpFdiHijoVRdWeSWqM4y0t23c92HXKrgppoSV18XMxrWVdoSM3nuMHwxGhFyde05OdDtLpCv+jlWf5REAHHA201pAU6bJSZINyHDUTB+Beo28rRXSwSh3OUIvYwKNVeoBY+KwOJ7WnuTCUq1meE6GkKc4D/cXmgpOyW/1SmBz3XjVIi/zprZ0zf3qH5mkphtg6ksjKgKjmx1cXfZAAX6wcDBNaCL+Ortep1Dh8xDUbqbBVNBL4jbiL3i3xsfNiyJgaZ5sX7i8tmStEpLbPwvHcByuf59qJhV/bZOl8KqJBETCDJcY6O2aqhTUy+9x93ThKs1GKrRPePrWPluud7ttlgtRveit/pcBrnQcXOl1rHq7ByB8CFAxNotRUYL9IF5n3wJOgkPojMy6jetQA5Ogc8Sm7RG6vg1yow==
```

## Composer - Gerenciador de dependências do PHP
```bash
php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');"
sudo php composer-setup.php --install-dir=/usr/local/bin --filename=composer
```
## Node e NPM - Gerenciador de dependências do Node
* [Acesse o script nesse link](https://gitlab.voxtecnologia.com.br/snippets/90)

## SSH Key no GitLab
```bash
ssh-keygen -t rsa -C "your.email@voxtecnologia.com.br" -b 4096
```
* Dar enter 3 vezes e executar comando abaixo:
```bash
cat ~/.ssh/id_rsa.pub
```
* Copiar o conteudo para [SSH Keys no GitLab](https://gitlab.voxtecnologia.com.br/profile/keys)
* Depois de adicionar a SSH Key deve-se:
```bash
sudo -i
sudo cp /home/usuarioDoSeuPC/.ssh/* /root/.ssh/
```
* Depois adicione sua chave SSH ao ssh-agent:
```bash
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_rsa
```

## Configuração de projetos
* Acessar projetos em: [https://gitlab.voxtecnologia.com.br/vox](https://gitlab.voxtecnologia.com.br/vox)
* Realiza-se um fork do projeto e faz o clone no diretório /vox.
```bash
git remote -v
git remote add upstream [url-do-project-original-da-vox]
git fetch upstream
git pull upstream master
git push origin master
git config core.filemode false
```
### Instalação das dependências do php
* No portal colocar `./composer.sh 3`, já nos demais em php: `composer install`
* Rodar `sudo permissoes.sh` após rodar o composer para reiniciar o apache. 
* Se der erro repetir processo acima.
* Se o projeto tiver Docker, [acesse aqui a instalação](/configs/docker.md)

### Instalação das dependências do front-end
Verifique o Readme do projeto que encontrará comandos como:
```bash
npm install
bower install
gulp build
npm run build
```

## Projetos essenciais
Instale o Portal, Sigfácil, Processo e Security. E para o projeto Certificados precisa fazer os passos a seguir:
```
cd /storage
mkdir certificados-old
cp -rf /storage/certificados/* /storage/certificados-old/
rm -rf certificados
git clone git@gitlab.voxtecnologia.com.br:vox/infraestrutura/certificados.git
```
E para atualizar: `git pull origin master` dentro de /storage/certificados


## vHosts
[Acesse o arquivo do vHosts](/configs/vhosts.txt) e faça as substituições abaixo. [O arquivo mais atualizado você encontra nesse link](http://10.1.1.2/hosts) ou com a Infra.
- Nele você encontrará os `apontamentos dos bancos` para acesso dos sistemas. (As linhas sem o comentário `#` é o que está sendo apontado no momento).
- E também colocar seu ip. Substitua onde tem `coloqueSeuIp` pelo seu ip local da internet caso esteja na Vox ou da interface tun0 caso esteja remoto. Consulte o ip com o comando `ifconfig`. 
- E onde tem `nomeDoSeuPc` coloque o referido nome que aperece no terminal depois de nomeUsuario@nomePC.

Depois aplique suas alterações colocando no vHosts, para isso execute no terminal: `sudo gedit /etc/hosts`. Cole o conteúdo, salve e feche.

## Apontamento dos banco na IDE
Se estiver com uma IDE da JetBrains como o `PHPStorm` clique na aba Database, botão +, selecione `Postgresql` e cole a url com seu usuário e senha:

| Ambiente  | URL do Banco de dados                              |
|-----------|----------------------------------------------------|
| Deve2     | jdbc:postgresql://10.1.1.28:9999/desenvolvimento   |
| Deve1,3-5 | jdbc:postgresql://10.1.1.59:9999/desenvolvimento   |
| Deve6-10  | jdbc:postgresql://10.1.1.106:9999/desenvolvimento  |
| Demo      | jdbc:postgresql://200.155.79.254:5433/demonstracao |
| Homo      | jdbc:postgresql://200.155.79.254:5434/homologacao  |
| Produção  | jdbc:postgresql://200.155.79.254:5435/publico      |

Selecione o botão `Make Global` para estar ativo em todos os projetos. 

## Acessos
* **Senha padrão do sistema interno:**

V@x!t3c - Antiga: Senha@V0x

* **Consulta Prévia:**

Acesso deve do Gov.BR: `208.219.224-59` - senha: `!Q2w3e4r`

Projeto [Sigfácil](https://gitlab.voxtecnologia.com.br/vox/sigfacil/) - Portal externo

* **Mocky FCN:**

MOCK000001 // 00.000.000.000.001
