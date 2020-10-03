# Instalação do Docker

* Verificar Proxy para o APT

```
sudo nano /etc/apt/apt.conf
```

* Deverá está no formato a seguir, substituir USUARIO, SENHA e salvar

```
Acquire::http::Proxy "http://USUARIO:SENHA@10.1.1.1:3127"\;
Acquire::https::Proxy "https://USUARIO:SENHA@10.1.1.1:3127"\;
```

* Instalando Docker no Ubuntu

```
curl --proxy http://USUARIO:SENHA@10.1.1.1:3127 -fsSL https://get.docker.com/ | sh
sudo groupadd docker
sudo usermod -aG docker $USER
```

* Adicionando Limite para Log de containers

```
sudo nano /etc/docker/daemon.json
```

* Add no arquivo aberto `daemon.json`

```
{ 
    "log-driver": "json-file",
    "log-opts": {
        "max-size": "10m",
        "max-file": "3"
    }
}

```

* Adicionando o PROXY Daemon System

```
sudo chmod -R 777 /etc/systemd/system
sudo mkdir /etc/systemd/system/docker.service.d
sudo nano /etc/systemd/system/docker.service.d/http-proxy.conf
```

* Adicionar trecho no arquivo aberto e salvar

```
Environment="HTTPS_PROXY=http://USUARIO:SENHA@10.1.1.1:3127/" "HTTP_PROXY=http://USUARIO:SENHA@10.1.1.1:3127/" "NO_PROXY=localhost, 127.0.0.0/8, ::1, deve.*, java.voxtecnologia.com.br, 10.0.0.0/8, deve-api.*"
```

* Executar

```
sudo chmod +x /usr/local/bin/docker-compose
sudo systemctl daemon-reload
sudo systemctl restart docker
```

* Executar o comando a seguir, pesquisar por redis e substituir o ip pelo da sua máquina em todas as linhas que encontrar. O ip pode ser encontrado através do comando `ifconfig` (começa com 10).

```
sudo subl /etc/hosts
```

* Executar o comando a seguir, pesquisar por `bind 127.0.0.1` e substituir por `bind 0.0.0.0`

```
sudo gedit /etc/redis/redis.conf 
```

* Reiniciar o Redis

```
sudo service redis-server restart
```

* Reiniciar a Máquina

```
reboot -n
```

* Instalar Docker Compose no Ubuntu

```
 sudo curl --proxy http://usuario:senha@10.1.1.1:3127 -L "https://github.com/docker/compose/releases/download/1.23.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
 sudo ln -s /usr/local/bin/docker-compose /usr/bin/docker-compose
```

* Teste o Docker Compose

```
docker-compose --version
```

# Execução nos projetos

* Iniciando o Back

```
export APP_ENV=deve
```

* Instalando dependências no Back e Front

```
docker-compose up --build
```
