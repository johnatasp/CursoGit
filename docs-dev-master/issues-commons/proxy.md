# Issues: Proxy

## NET::ERR_TUNNEL_CONNECTION_FAILED
Adicione o host do site no ignorar máquinas do proxy

## Correção do proxy
```
unset http_proxy
unset https_proxy
```
## ERROR: routines:SSL23_GET_SERVER_HELLO:unknown protocol
```
Reiniciar máquina após configurações do proxy
```

## Configurar npm - ERROR: routines:SSL23_GET_SERVER_HELLO:unknown protocol
```
npm config set proxy http://USUÁRIO:SENHA@10.1.1.1:3127
npm config set https-proxy http://USUÁRIO:SENHA@10.1.1.1:3127
```