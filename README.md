# Observatório das Emendas Parlamentares

### Acesse a aplicação em Vercel nesse link: https://observatorio-emendas.vercel.app/ 

Esse projeto Open Source visa explicar o problema recente associado às emendas parlamentares no Brasil e oferecer uma forma da população visualizar de forma rápida os valores destinados para emendas em cada Estado da Federação. 

Os cards com uma explicação rápida sobre a problemática ficam passando a cada 8 segundos. 

Os dados das emendas de 2020 até Agosto de 2024 podem ser visualizados no iFrame do Google Looker Studio. 

### Relevância do Projeto. 
O projeto é de extrema relevância pois o Brasil vive um conflito entre os três poderes por causa das "Emendas PIX", que sequestrou grande parte do orçamento do Governo Federal.  

Mais informações: 
https://oglobo.globo.com/politica/noticia/2024/08/15/entenda-o-que-sao-as-emendas-pix-e-por-que-elas-foram-suspensas-pelo-stf.ghtml
https://www12.senado.leg.br/noticias/videos/2024/08/entenda-as-regras-a-serem-adotadas-para-o-uso-de-emendas-pix 

### Processo de criação do Projeto. 
O design e UX do projeto foi baseado no que construímos como exemplo durante a o bootcamp da Alura-Gemini. Eu só alterei as cores e acrescentei informações.

Contudo, uma modificação/inovação que eu trouxe foi mudar a lógica do arquivo app.js para, ao invés de ser ao clicar, ser mudar a cada 8 segundos. Eu consegui programar essa lógica com a ajuda do Gemini e após muitas tentativas. (Deu um trabalhão!) 

No arquivo "dados.js" eu inseri as informações que explicam a problemática a cerca das emendas parlamentares hoje em dia. 

Também com a ajuda do Gemini eu descobri como inserir uma janela do Looker Data Studio. E foi nesse programa, que também é do Google, que eu analisei e criei visualizações para os dados das emendas parlamentares. 

#### Tecnologias utilizadas: 
HTML: Estrutura básica da página. 
CSS: Estilização visual da página. 
JavaScript: Lógica para a mudança automática dos cards a cada 8 segundos.

#### Melhorias futuras: 
- Inserir mais visualizações com dados mais recentes.
- Incluir quem são os relatores e os beneficiários das emendas (essa informação ainda não é pública, será em breve).
- Melhorar a UX e UI.

### Colabore com esse projeto. 
Deixe dúvidas, sugestões ou dicas de melhorias como issues nesse repositório.
Contribuições ao projeto são bem vindas! 
