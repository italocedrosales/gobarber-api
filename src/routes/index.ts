import { Router } from 'express';

const routes = Router();

routes.get('/users', (request, response) => {
  return response.json({ message: 'Hello world' });
});

export default routes;
