import 'dotenv/config';

import express from 'express';
import BullBoard from 'bull-board';
import Queue from './app/lib/Queue';

import routes from './routes';

const app = express();
BullBoard.setQueues(Queue.queues.map(queue => queue.bull));

app.use(express.json());
app.use(routes);
app.use('/admin/queues', BullBoard.UI);

//Acessar http://localhost:3333/admin/queues para dashboard das tentativas de processamento de filas

app.listen(3333, () => {
    console.log("Server running on localhost:3333");
});