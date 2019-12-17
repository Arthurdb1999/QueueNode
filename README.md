# QueueNode
Projeto de gerenciamento de background jobs (filas), utilizando Redis. Construção de um sistema de envio de emails.

## EndPoints

> POST para cadastrar um usuário **/users**

Para mais detalhes, consultar o arquivo `Insomnia_QueueNode.json` com o software *Insomnia*.

> **/admin/queues** para abertura do BullBoard (dashboard de histórico de processamento de filas)

## Tecnologias

- **Redis** para gerenciamento dos backgrounds jobs;

- **Docker-compose** para criar uma instância do Redis;

- **Bull** para criação de queues no Redis;

- **Node.js** para criação do servidor;

- Utilizado a biblioteca **dotenv** para criação de variáveis de ambiente;

- **Mailtrap.io** para caixa de email usado para teste em desenvolvimento;

- **yarndpkg** para gerenciamento de dependências;

## Configurações e Instalação

`docker-compose up -d` para gerar uma instância do Redis (pode não funcionar, procurar sobre os comandos do Docker);

`docker ps` para verificar se existe uma VM criada;

`yarn install` para instalação de todas as dependências do *package.json*;

`yarn dev:server` para iniciar o servidor Node.js;

`yarn dev:queue` para inciar o servidor de filas;

`yarn dev` para iniciar o servidor Node.js e o de filas;

> Projeto Baseado no vídeo do canal da RocketSeat no Youtube: 

> https://www.youtube.com/watch?v=ICIz5dE3Xfg

