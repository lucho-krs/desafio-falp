import request from 'supertest';
import express from 'express';
import router  from '../../src/routes/address.route';
import * as addressController from '../../src/controller/address.controller';

jest.mock('../../src/controller/address.controller');

const app = express();
app.use(express.json());
app.use('/', router);

describe('Address Router', () => {
    beforeEach(() => {
      jest.clearAllMocks();
    });
  
    it('should call getAddress controller on GET /:userId', async () => {
      const mockGetAddress = jest.spyOn(addressController, 'getAddress').mockImplementation(async (req, res) => {
        res.status(200).json({ message: 'getAddress called' });
      });
  
      const response = await request(app).get('/123');
  
      expect(mockGetAddress).toHaveBeenCalled();
      expect(response.status).toBe(200);
      expect(response.body.message).toBe('getAddress called');
    });
  
    it('should call postAddress controller on POST /', async () => {
      const mockPostAddress = jest.spyOn(addressController, 'postAddress').mockImplementation(async (req, res) => {
        res.status(201).json({ message: 'postAddress called' });
      });
  
      const response = await request(app).post('/').send({});
  
      expect(mockPostAddress).toHaveBeenCalled();
      expect(response.status).toBe(201);
      expect(response.body.message).toBe('postAddress called');
    });
  });