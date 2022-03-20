import request from 'supertest';
import { app } from '../app';

import createConnection from '../database';

describe('Survey', () => {
  beforeAll(async () => {
    const connection = await createConnection();
    await connection.runMigrations();
  });

  it('Should be able to create a new survey', async () => {
    const response = await request(app).post('/surveys').send({
      title: 'Title Test',
      description: 'Description Test',
    });

    expect(response.status).toBe(201);
  });

  it('Should be able to create a new survey', async () => {
    const response = await request(app).post('/surveys').send({
      title: 'Title Test',
      description: 'Description Test',
    });

    expect(response.status).toBe(201);
  });

  it('Should be able to get all surveys', async () => {
    const response = await request(app).get('/surveys').send({
      title: 'Title Test',
      description: 'Description Test',
    });

    expect(response.body.length).toBe(2);
  });
});
