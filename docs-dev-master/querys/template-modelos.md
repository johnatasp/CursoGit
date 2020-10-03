# Template de Modelo de documento

## Buscar dados para atualizar template de modelo de documento
```sql
SELECT nu_seq_uf FROM comum.s_uf WHERE ds_nome ILIKE 'Paraíba';

SELECT nu_seq_tipo_modelo_documento FROM sigfacil.s_tipo_modelo_documento 
WHERE ds_tipo_modelo_documento ilike 'Inscrição Municipal';
```

## Consultar template de modelo de documento
```sql
SELECT * FROM sigfacil.s_modelo_documento_template
WHERE nu_seq_tipo_modelo_documento = 4
  and nu_seq_uf = 100132;
```

## Atualizar template de modelo de documento
```sql
UPDATE sigfacil.s_modelo_documento_template 
set ds_texto = 'COLOQUE AQUI O HTML'
WHERE nu_seq_uf = 100132 
and nu_seq_tipo_modelo_documento = 4;
```