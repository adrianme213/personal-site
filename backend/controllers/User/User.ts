import { Request, Response } from 'express';
import { CrudController } from '../CrudController';

export class UserController extends CrudController {
  public create(req: Request, res: Response): void {
    console.log(`${req.method} ${req.baseUrl}`);
    res.json({
      message: `${req.method} ${req.baseUrl} request received`,
      statusCode: 201
    });
  }

  public read(req: Request, res: Response): void {
    console.log(`${req.method} ${req.baseUrl}`);
    res.json({
      message: `${req.method} ${req.baseUrl} request received`,
      statusCode: 200
    });
  }

  public update(req: Request, res: Response): void {
    console.log(`${req.method} ${req.baseUrl}`);
    res.json({
      message: `${req.method} ${req.baseUrl} request received`,
      statusCode: 201
    });
  }

  public delete(req: Request, res: Response): void {
    console.log(`${req.method} ${req.baseUrl}`);
    res.json({
      message: `${req.method} ${req.baseUrl} request received`,
      statusCode: 202
    });
  }
};
