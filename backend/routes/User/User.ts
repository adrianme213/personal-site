import { Request, Response, Router } from 'express';
import { userController } from '../../controllers/index';

export const router = Router({
  strict: true
});

router.post('/', (req: Request, res: Response) => {
  userController.create(req, res);
});

router.get('/', (req: Request, res: Response) => {
  userController.read(req, res);
});

router.patch('/', (req: Request, res: Response) => {
  userController.update(req, res);
});

router.delete('/', (req: Request, res: Response) => {
  userController.delete(req, res);
});
