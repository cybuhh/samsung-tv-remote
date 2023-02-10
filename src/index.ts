import express, { Request, Response } from 'express';

const app = express();

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World');
});

// eslint-disable-next-line no-console
app.listen(3000, () => console.log('🚀 Server ready at: http://localhost:3000'));
