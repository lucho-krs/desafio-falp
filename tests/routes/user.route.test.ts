import request from 'supertest';
import express from 'express';
import router  from '../../src/routes/user.route';
import * as userController from '../../src/controller/user.controller';

jest.mock('../../src/controller/user.controller');

const app = express();
app.use(express.json());
app.use('/', router);

describe('User Router', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should call getUsers controller on GET /', async () => {
    const mockGetUsers = jest.spyOn(userController, 'getUsers').mockImplementation(async (req, res) => {
      res.status(200).json({ message: 'getUsers called' });
    });

    const response = await request(app).get('/');

    expect(mockGetUsers).toHaveBeenCalled();
    expect(response.status).toBe(200);
    expect(response.body.message).toBe('getUsers called');
  });

  it('should call postUsers controller on POST /', async () => {
    const mockPostUsers = jest.spyOn(userController, 'postUsers').mockImplementation(async (req, res) => {
      res.status(201).json({ message: 'postUsers called' });
    });

    const response = await request(app).post('/').send({});

    expect(mockPostUsers).toHaveBeenCalled();
    expect(response.status).toBe(201);
    expect(response.body.message).toBe('postUsers called');
  });
});