# Teste Prático - Back End Engineer - DROPULL.GG
## Primeiramente, olá!

Olá! Este é o repositório público do teste realizado para a vaga de Back-End SWE na Dropull.gg.
Além de um teste, espero que este repo sirva como objeto de estudo para outros devs que queiram compreender mais sobre IPFS e APIs RESTful em Node.JS, utilizando tecnologias como TypeScript, Prisma, Jest, Pinata e buscando implementar de forma **básica** as melhores práticas possíveis (SOLID, TDD e etc..).

## Glossário

 - [Instalação](#install)
 - [Uso](usage)
 - [Headers, Verbos e Status Codes](design)
 - [Endpoints e Exemplos](endpoints)

## <a name="install"></a>Instalação

O processo de instalação da aplicação é simples. Utilize seu gerenciador de pacotes favorito (npm/yarn, etc...) para instalação das dependências.
Após a instalação dos pacotes, utilize o script **migrate** para geração dos arquivos de migração com o Prisma.

Exemplo:

    yarn migrate

## <a name="usage"></a>Uso

Existem alguns scripts pré-definidos para ajudar no processo de manutenção, deploy e desenvolvimento da aplicação. Como exemplo, vamos ver o caso de uso com o Yarn:

### Dev Ambient
O script **dev** inicia um servidor específico para ser utilizado durante o desenvolvimento, utilizando o **Nodemon**.

    yarn dev

### Tests
Para rodar os testes unitários/e2e com o Jest, existem dois scripts pré-definidos:

    yarn test
    yarn test:watch

### Linter
Existem dois scripts responsáveis pela organização e checagem de código. O script lint é responsável por rodar o ESLint nas pastas/arquivos alvo, já o pretify é responsável por reorganizar o design de código de uma forma padrão. providenciando uma checagem completa para um código limpo de problemas.

    yarn lint
    yarn pretify
    
### Deploy
Existem também alguns scripts principais criados para facilitar o deploy e a instalação de novos ambientes:

    yarn migrate
    yarn migrate:deploy
    yarn build
    yarn start

## <a name="design"></a>Headers, Verbos e Status Codes
A API aceita primordialmente dois tipos de Content-Type: JSON e também Multipart/Form-Data para os endpoints onde é necessário o upload de imagens/arquivos.

Tenha certeza de definir corretamente os Headers antes de qualquer requisição. Ex.:

    Content-Type: application/json

Dentro do possível, a API também busca utilizar o uso correto dos verbos HTTP para cada endpoint:

 - `POST`é utilizado para criar recursos.
 - `GET`é utilizado para retornar recursos.
 
 ### Códigos de Status
 No layout da API, temos alguns códigos de Status:
 
 - Tentar realizar uma requisição com parâmetros incompletos resultará num código de erro `400`.
 - Quando houver um erro interno com algum dos serviços (banco de dados ou Pinata), a aplicação retornará um erro `500` com uma mensagem detalhada do problema.
 - Endpoints com o objetivo de criação de recursos sempre retornarão o código `201`quando executados com sucesso.
 - Endpoints com o objetivo de retorno de recursos sempre retornarão o código `200`quando executados com sucesso.

## <a name="endpoints"></a>Endpoints
Para testar os Endpoints você executar a aplicação na sua máquina utilizando tanto o comando `start`como `dev`, ou utilizar o endpoint de exemplo hospedado no Heroku: https://nft-dropull.herokuapp.com/

**OBS**: o endpoint de upload de assets (`POST`/asset) não funcionará no ambiente de testes do Heroku devido ao ambiente não lidar com storage. Para isto, existem alguns assets pré-definidos no banco de dados para uso nos outros endpoints.

Para um melhor controle de versionamento, todas as requisições devem ser feitas partindo do diretório `/api/v1/`. Ex.: `POST https://nft-dropull.herokuapp.com/api/v1/nft`

Caso queira realizar os testes utilizando aplicações HTTP como o Insomnia, existe um arquivo no diretório raiz chamado `insomnia.json`, basta importa-lo na aplicação para ter acesso a um mock de todas as requests e endpoints da API.

### POST /asset
`POST https://nft-dropull.herokuapp.com/api/v1/asset`

Este endpoint é responsável por lidar com a criação, registro e upload de novos assets no Pinata.

**Payload:**

 - `name`: uma string contendo o nome do novo asset.
 - `description:`uma string contendo a descrição para o novo asset.
 - `image`: o arquivo de imagem a ser criado.
 Em casos de sucesso, o endpoint retornará um objeto `asset`com as informações do Asset recém criado.

### GET /asset
`GET https://nft-dropull.herokuapp.com/api/v1/asset`

Este endpoint é responsável por retornar todos os assets presentes na aplicação.

Em casos de sucesso, o endpoint retornará uma array contendo objetos `asset`com os dados necessários.

### POST /nft
`POST https://nft-dropull.herokuapp.com/api/v1/nft`

Este endpoint é responsável por lidar com a criação de novos NFTs baseado em quantidade e assets.

**Payload:**

 - `quantity`: um number contendo a quantidade de NFTs únicos a serem criados baseado no asset.
 - `asset:`o ID do asset a ser vinculado ao NFT.

Em casos de sucesso, o endpoint retornará um objeto nft contendo as informações do NFT recém criado.

### GET /nft
`GET https://nft-dropull.herokuapp.com/api/v1/nft`

Este endpoint é responsável por retornar todos os nfts presentes na aplicação.

Em casos de sucesso, o endpoint retornará uma array contendo objetos `nft`com os dados necessários.
