# Modelos de documentos e Certidão
Utilize uma query de cada seção abaixo para alcançar seu resultado.

## Consulta inicial
```sql
-- MODELO DE DOCUMENTO
select * from sigfacil.s_modelo_documento
where nu_seq_modelo_documento = 16626 and cod_orgao = 18567 and is_ativo;

-- BUSCAR PROTOCOLOS DE ALVARAS A PARTIR DE MODELO DE DOCUMENTO
SELECT co_protocolo, nu_seq_solicitacao, dt_solicitacao FROM sigfacil.s_solicitacao
where nu_seq_solicitacao IN (select nu_seq_solicitacao from sigfacil.s_alvara
                             where nu_seq_modelo_documento = 18903 and cod_orgao = 16930
                             and co_autenticacao IS NOT NULL AND is_ativo)
LIMIT 5;

-- ALVARÁ OU CERTIDÃO
SELECT * FROM sigfacil.s_alvara WHERE nu_seq_solicitacao = (
    SELECT nu_seq_solicitacao FROM sigfacil.s_solicitacao
    where co_protocolo = 'ALP2002990891' and cod_orgao = 2773
);

SELECT * FROM sigfacil.s_modelo_documento WHERE nu_seq_modelo_documento = (
    SELECT nu_seq_modelo_documento FROM sigfacil.s_alvara
    WHERE nu_seq_alvara = 2808333 and co_autenticacao = '20TP7DPGO'
);
```

## Encontrar orgãos
```sql
-- Pegar o nu_seq_modelo_documento (nu_seq_orgao para autonomo)
SELECT nu_seq_municipio, co_numero_orgao FROM comum.s_orgao
WHERE nu_seq_orgao = (SELECT cod_orgao FROM sigfacil.s_modelo_documento
                      WHERE nu_seq_modelo_documento = 16722 AND is_ativo);                   
```

## Consulta final                      
```sql
SELECT *
FROM sigfacil.s_modelo_documento
WHERE nu_seq_tipo_modelo_documento = 16
  AND is_ativo
  AND cod_orgao IN
      (SELECT nu_seq_orgao FROM comum.s_orgao 
      WHERE co_numero_orgao IN ('44-3','44-1', '44-2') 
      AND nu_seq_municipio IN (100132020, 100132017, 100132068));

select * from sigfacil_autonomo.s_modelo_documento
WHERE nu_seq_tipo_modelo_documento = 2 and nu_seq_orgao =
    (select nu_seq_orgao from comum.s_orgao
    where co_numero_orgao = '004' AND nu_seq_municipio = 100127046)
and is_ativo;

SELECT * FROM sigfacil_autonomo.s_modelo_documento
    WHERE nu_seq_modelo_documento =
      (SELECT s_documento_historico.nu_seq_modelo_documento
      FROM sigfacil_autonomo.s_documento_historico WHERE nu_seq_documento_historico = 4598);
```

## Montar update
```sql
UPDATE sigfacil.s_modelo_documento
set ds_texto = '

' WHERE nu_seq_tipo_modelo_documento = 2 and cod_orgao IN
 (SELECT nu_seq_orgao FROM comum.s_orgao
  WHERE co_numero_orgao IN ('002') AND nu_seq_municipio IN ('100141363')) and is_ativo;

UPDATE sigfacil_autonomo.s_modelo_documento SET ds_texto = '

'  WHERE nu_seq_tipo_modelo_documento = 18 AND s_modelo_documento.is_ativo
     AND nu_seq_orgao = (
         SELECT nu_seq_orgao
         FROM comum.s_orgao
         WHERE co_numero_orgao = 'PBA'
         AND nu_seq_municipio = 100127046
     );
```
