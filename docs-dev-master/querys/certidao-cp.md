# Certidão de Consulta Prévia

## Deferir Consulta Prévia para emissão do Resultado da Consulta Prévia
- Realize uma abertura de matriz (101) na entidade desejada
- Ao finalizar, acompanhe o protocolo e verifique as entidades para a consulta prévia
- Acesse o interno com usuário qa.{junta} e vá na funcionalidade Visualizar Usuários
- Busque pela entidades, abra e busque um usuário ativo e administrador
- Acesse com os usuários selecionados e procure pela funcionalidade Consulta Previa
- Ao fim da página clique Deferir, preencha os dados e confirme
- Após ter feito em todas entidades, acompanhe o protocolo e visualize o Resultado da Consulta Prévia na primeira caixinha

## Templates para Certidão de Consulta Prévia
```sql
SELECT t.nu_seq_uf, uf.ds_nome as Estado, t.ds_texto, t.nu_seq_perfil, p.ds_nome as PerfilEntidade
FROM sigfacil.s_modelo_documento_template as t
INNER JOIN comum.s_uf as uf ON t.nu_seq_uf = uf.nu_seq_uf
INNER JOIN autenticacao.s_perfil as p ON t.nu_seq_perfil = p.nu_seq_perfil
WHERE t.nu_seq_tipo_modelo_documento = 8
ORDER BY PerfilEntidade, Estado;
```

## Modelos de documentos para Certidão de Consulta Prévia
```sql
SELECT t.nu_seq_modelo_documento, o.ds_nome as Orgao, t.cod_orgao, t.ds_modelo_documento,
       t.ds_texto, t.dt_cadastro, t.dt_ultima_alteracao, t.is_ativo
FROM sigfacil.s_modelo_documento as t
         INNER JOIN comum.s_orgao as o ON t.cod_orgao = o.nu_seq_orgao
WHERE t.nu_seq_tipo_modelo_documento = 8
AND t.is_ativo
ORDER BY Orgao;

-- EXEMPLO DE BUSCA DE MODELOS COM ORGÃOS ESPECÍFICOS
SELECT t.nu_seq_modelo_documento, o.ds_nome as Orgao, t.cod_orgao, t.ds_modelo_documento, t.ds_texto,
       t.dt_cadastro, t.dt_ultima_alteracao, o.co_numero_orgao, o.nu_seq_municipio
FROM sigfacil.s_modelo_documento as t
         INNER JOIN comum.s_orgao as o ON t.cod_orgao = o.nu_seq_orgao
WHERE t.nu_seq_tipo_modelo_documento = 8
  AND t.cod_orgao IN
--         ('4253', '7389', '9520') -- PB, PR, RO
      (SELECT nu_seq_orgao FROM comum.s_orgao
       WHERE co_numero_orgao IN ('000', '1') AND nu_seq_municipio IN ('100125095', '100141095', '100111037'))
  AND t.is_ativo
ORDER BY Orgao;
```

## Reset do Modelo de documento para Certidão de Consulta Prévia
- Buscar `nu_seq_municipio, co_numero_orgao` através do `nu_seq_modelo_documento`
```sql
-- Pegar o nu_seq_modelo_documento (nu_seq_orgao para autonomo)
SELECT nu_seq_municipio, co_numero_orgao FROM comum.s_orgao
WHERE nu_seq_orgao = (SELECT cod_orgao FROM sigfacil.s_modelo_documento
                      WHERE nu_seq_modelo_documento = 16722 AND is_ativo);                   
```

- Se for atualizar o template use a query para `s_modelo_documento_template` com `WHERE nu_seq_uf = XXXXX 
and nu_seq_tipo_modelo_documento = 8;`
```sql
-- Modelos de documentos de Certidão de Consulta Prévia na PB, PR, RO
UPDATE sigfacil.s_modelo_documento
SET ds_texto = '<p>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title></title>
<meta name="description" content="" />
<meta name="keywords" content="" />
<link rel="shortcut icon" href="favicon.ico" />

<link href="/themes/sigfacil/modelo_documento/style.css" rel="stylesheet" type="text/css" media="all" />
<link href="/themes/sigfacil/modelo_documento/print.css" rel="stylesheet" type="text/css" media="print" />
<!--[if IE]>
	<script src="/lib/app/html5.js" type="text/javascript"></script>
<![endif]-->
</head>
<body>
    <!-- container -->
    <div id="container2">
    	<header id="topo2">
            <h1 id="logo2">
                <img src="data:image/jpg;base64,{co_barra}">
                <span id="seccional-oab">{seccional_oab}</span>
            </h1>
    	    <div id="box-barcode">
                <figure>
                	<img src="data:image/jpg;base64,{logomarca}" id="codigo-barra">
                </figure>
    	        <span>{co_protocolo}</span>
    	    </div>
        </header>
        <!-- content -->
        <div id="content2">
        	<section>
            	<header>
                	<h1 id="tit-resultado">resultado da <span><strong>consulta</strong> prévia</span></h1>
                </header>
                <article>
                	<div class="box-resultado">
    	            	<h2>Solicitante:</h2>
			<p>{nome_solicitante}</p>
                	</div>
                    <div class="box-resultado">
    	            	<h2>{documento_nome}:</h2>
			<p>{co_cnpj}</p>
                	</div>
			<div class="box-resultado">
    	            	<h2>Atividade Primária:</h2>
			<p>{atividade_principal}</p>
                	</div>
                    <div class="box-resultado">
    	            	<h2>Atividades Secundárias:</h2>
			<p>{atividades_secundarias}</p>
                	</div>
                </article>
            </section>
            <section>
            	<div class="box-base">
		    {deferimento_orgao}
                </div>
                <div class="box-base">
		    {deferimento_municipio}
                </div>
            </section>
            <footer id="rodape2">
		<p>Emitido: {dt_emissao}<span></span></p>
            </footer>
        </div><!-- /content -->
  </div><!-- /container -->
</p>'
WHERE nu_seq_tipo_modelo_documento = 8
  AND cod_orgao IN
    (SELECT nu_seq_orgao FROM comum.s_orgao
    WHERE co_numero_orgao IN ('000', '1') AND nu_seq_municipio IN ('100125095', '100141095', '100111037'))
  AND is_ativo;
```	

## Cadastrar Certidao de Consulta previa
```sql
INSERT INTO sigfacil.s_modelo_documento_template 
(nu_seq_uf, ds_texto, nu_seq_tipo_modelo_documento, nu_seq_perfil)
VALUES
(100125, '<p>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title></title>
<meta name="description" content="" />
<meta name="keywords" content="" />
<link rel="shortcut icon" href="favicon.ico" />

<link href="/themes/sigfacil/modelo_documento/style.css" rel="stylesheet" type="text/css" media="all" />
<link href="/themes/sigfacil/modelo_documento/print.css" rel="stylesheet" type="text/css" media="print" />
<!--[if IE]>
	<script src="/lib/app/html5.js" type="text/javascript"></script>
<![endif]-->
</head>
<body>
    <!-- container -->
    <div id="container2">
    	<header id="topo2">
            <h1 id="logo2">
                <img src="data:image/jpg;base64,{co_barra}">
                <span id="seccional-oab">{seccional_oab}</span>
            </h1>
	    <div id="box-barcode">
            <figure>
            	<img src="data:image/jpg;base64,{logomarca}" id="codigo-barra">
            </figure>
	    <span>{co_protocolo}</span>
	    </div>

        </header>
        <!-- content -->
        <div id="content2">
        	<section>
            	<header>
                	<h1 id="tit-resultado">resultado da <span><strong>consulta</strong> prévia</span></h1>
                </header>
                <article>
                	<div class="box-resultado">
    	            	<h2>Solicitante:</h2>
			<p>{nome_solicitante}</p>
                	</div>
                    <div class="box-resultado">
    	            	<h2>{documento_nome}:</h2>
			<p>{co_cnpj}</p>
                	</div>
			<div class="box-resultado">
    	            	<h2>Atividade Primária:</h2>
			<p>{atividade_principal}</p>
                	</div>
                    <div class="box-resultado">
    	            	<h2>Atividades Secundárias:</h2>
			<p>{atividades_secundarias}</p>
                	</div>
                </article>
            </section>
            <section>
            	<div class="box-base">
		    {deferimento_orgao}
                </div>
                <div class="box-base">
		    {deferimento_municipio}
                </div>
            </section>
            <footer id="rodape2">
		<p>Emitido: {dt_emissao}<span></span></p>
            </footer>
        </div><!-- /content -->
  </div><!-- /container -->
</p>', 8, 104308);
```
