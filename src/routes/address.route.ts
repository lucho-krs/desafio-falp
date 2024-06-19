import { Router } from 'express';
import { getAddress, postAddress } from '../controller/address.controller';

const router = Router();

router.get('/:userId', getAddress );
router.post('/', postAddress );

export default router;