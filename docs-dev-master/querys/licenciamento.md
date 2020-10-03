# Licenciamento
## Fluxo dos andamentos e funcionalides do Autonomo por protocolo
```sql
SELECT documento.*,
       sol.co_protocolo,
       status.ds_status,
       andamento.dt_inicio,
       andamento.dt_fim,
       andamento.nu_seq_usuario,
       usuario.ds_login,
       andamento.*
FROM sigfacil_autonomo.s_documento_historico documento
         JOIN sigfacil_autonomo.s_solicitacao_documento solDoc
              ON documento.nu_seq_documento_historico = solDoc.nu_seq_documento_historico
         JOIN sigfacil_autonomo.s_solicitacao sol ON solDoc.nu_seq_solicitacao = sol.nu_seq_solicitacao
         JOIN sigfacil_autonomo.s_modelo_documento modelo
              ON documento.nu_seq_modelo_documento = modelo.nu_seq_modelo_documento
         JOIN sigfacil_sanitario.s_andamento andamento
              ON documento.nu_seq_documento_historico = andamento.nu_seq_documento_historico
         JOIN sigfacil_sanitario.s_status_andamento status
              ON andamento.nu_seq_status_andamento = status.nu_seq_status_andamento
         JOIN autenticacao.s_usuario usuario ON andamento.nu_seq_usuario = usuario.nu_seq_usuario
WHERE sol.co_protocolo ILIKE 'MCZ1900004970'
    -- AND status.ds_status ILIKE '%AGEND%'
order by andamento.nu_seq_andamento DESC;
```
## Alterar status de funcionalidade
Coloca-se o andamentos da funcionalide anterior, rodando a query acima.
```sql
DELETE FROM sigfacil_sanitario.s_andamento WHERE nu_seq_andamento IN (8014, 8013);
```
Coloca-se o andamento da funcionalidade a voltar o status
```sql
UPDATE sigfacil_sanitario.s_andamento SET dt_fim = null WHERE nu_seq_andamento = 7569;
```
## Listar permissões por usuário
```sql
SELECT DISTINCT usr.nu_seq_usuario, p.ds_nome, usr.ds_login, muo.ds_nome, mmo.ds_nome, array_agg(permission.nu_seq_sistema_funcionalidade) as funcionalidades
FROM autenticacao.s_usuario AS usr
         INNER JOIN autenticacao.s_usuario_orgao AS uo ON uo.nu_seq_usuario = usr.nu_seq_usuario
         INNER JOIN comum.s_pessoa AS p ON p.nu_seq_pessoa = usr.nu_seq_pessoa_fisica
         INNER JOIN autenticacao.s_usuario_menu AS menu ON menu.nu_seq_usuario = usr.nu_seq_usuario
         INNER JOIN autenticacao.s_perfil_permissao AS permission
                    ON permission.nu_seq_perfil_permissao = menu.nu_seq_perfil_permissao
         INNER JOIN autenticacao.s_perfil_usuario AS perfil ON perfil.nu_seq_usuario = usr.nu_seq_usuario
         INNER JOIN comum.s_orgao ouo ON uo.nu_seq_orgao = ouo.nu_seq_orgao
         INNER JOIN comum.s_orgao omo ON menu.nu_seq_orgao = omo.nu_seq_orgao
         INNER JOIN comum.s_municipio muo ON ouo.nu_seq_municipio = muo.nu_seq_municipio
         INNER JOIN comum.s_municipio mmo ON omo.nu_seq_municipio = mmo.nu_seq_municipio
WHERE (usr.is_ativo = true)
  AND (perfil.is_ativo = true)
--   AND (muo.nu_seq_uf = 100111 OR mmo.nu_seq_uf = 100111)
  AND (muo.nu_seq_municipio = 100127046 OR mmo.nu_seq_municipio = 100127046)
--   AND uo.nu_seq_orgao = 3527
 AND permission.nu_seq_sistema_funcionalidade IN (1040060018)
-- AND p.ds_nome ILIKE '%gen%'
GROUP BY permission.nu_seq_sistema_funcionalidade, usr.nu_seq_usuario, p.ds_nome, usr.nu_seq_usuario, usr.ds_login, muo.ds_nome, mmo.ds_nome
ORDER BY p.ds_nome ASC;
```
## Outros selects para licenciamento
```sql
SELECT * FROM autenticacao.s_usuario_menu LIMIT 1;
SELECT * FROM autenticacao.s_perfil_permissao LIMIT 1;

SELECT * FROM sigfacil.s_orgao_sigfacil WHERE is_consulta_previa_autonomo;
SELECT * FROM comum.s_orgao WHERE nu_seq_orgao = 3527;

SELECT * FROM comum.s_sistema_funcionalidade
-- WHERE ds_url ILIKE '%rad%';
 where ds_nome ilike '%Licença Sanitária%';

OR ds_url ILIKE '%emiti%';

SELECT mun.nu_seq_municipio, mun.ds_nome, uf.nu_seq_uf, uf.ds_nome FROM comum.s_uf uf
INNER JOIN comum.s_municipio mun ON uf.nu_seq_uf = mun.nu_seq_uf
WHERE 1=1
AND mun.ds_nome ILIKE '%mace%'
-- AND mun.nu_seq_municipio = 100127046;

SELECT * FROM comum.s_orgao WHERE ds_nome ILIKE '%Receita e Tributos%';
```

## Buscar questionário por protocolo
```sql
select * from sigfacil.s_pergunta 
where co_identificador_pergunta like 'MCZ0%'
and ds_pergunta ilike 'Informe%';

SELECT sp.ds_pergunta,d.*
FROM sigfacil.s_pergunta_resposta_alvara AS d
         JOIN sigfacil.s_alvara al ON al.nu_seq_alvara = d.nu_seq_alvara
         JOIN sigfacil.s_solicitacao sol ON sol.nu_seq_solicitacao = al.nu_seq_solicitacao
         join sigfacil.s_pergunta as sp on sp.nu_seq_pergunta = d.nu_seq_pergunta
WHERE sol.co_protocolo = 'ALP1902985777';
```
