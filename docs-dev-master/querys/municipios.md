# CNAE
## Busca de cnae por municipio
```
select *
from comum.s_atividade_new
where nu_seq_municipio = 100125015;

ou

select * from sigfacil.s_atividade where nu_seq_municipio in (100141113);
```
## Busca de cnae secundário através do principal
```
select * from sigfacil.s_atividade where co_atividade_pai in ('0111-3/01');
```
## Buscar cnaes em geral
```
select * from sigfacil.s_atividade limit 10;
```

# Municípios
## Busca de municipio atraves do nome
```sql
select * from comum.s_municipio where ds_nome ilike '%Ji-Paraná%';
```
## Busca de Municipios por UF
```sql
select m.ds_nome, m.nu_seq_municipio from comum.s_municipio m
    join comum.s_uf uf on m.nu_seq_uf = uf.nu_seq_uf
    where uf.ds_sigla = 'AL'
    limit 20;
```
## Buscar solicitacao através do protocolo
```sql
select * from sigfacil_solicitacao.s_empresa
where nu_seq_solicitacao IN (select nu_seq_solicitacao from sigfacil.s_solicitacao where co_protocolo = 'GOP1908809880');
```
## Buscar empresa através de solicitacao
```sql
select * from sigfacil_solicitacao.s_empresa where nu_seq_solicitacao = 8659313;
```
## Buscar Endereco atraves da empresa
```sql
select * from sigfacil_solicitacao.s_empresa_endereco where nu_seq_empresa = 7781421;
```
# Nire e CNPJ
## pesquisa de nire e cnpj da filial
```sql
select * from sigfacil_solicitacao.s_empresa
where co_nire ilike '25%' and co_cnpj IS NOT NULL
limit 20;
```
### NIRES
* AL: 27 
* AM: 13
* AP: 16
* GO: 52
* MA: 21
* PB: 25
* PI: 22
* PR: 41
* RN: 24
* RO: 11
* SE: 28
* TO: 17

## Pesquisa solicitação através de dados
```sql
select * from sigfacil_solicitacao.s_empresa
where co_nire ilike '41206836655' AND
      co_cnpj ilike '12383199000163';
```

### Buscar tabelas e querys que usam esse campo
```sql
select * from coluna ('nome_coluna');
```
