/*
    Imported module(s)
*/
import express from 'express';
const router = express.Router();
import rateLimiter from '../middlewares/rate-limiter';

/*
    Imported endpoint(s)
*/
import endpointUserCreate from './administration/user-create';

/*
    Imported requestValidator(s)
*/
import endpointUserCreateValidator from '../validators/administration/user-create';

/*
    Endpoints
*/
router.post(
    '/user/create',
    rateLimiter(1, 1),
    endpointUserCreateValidator,
    endpointUserCreate
);

/*
    Exported router
*/
export = router;