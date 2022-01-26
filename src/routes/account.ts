/*
    Imported module(s)
*/
import express from 'express';
const router = express.Router();
import rateLimiter from '../middlewares/rate-limiter';

/*
    Imported endpoint(s)
*/
import endpointItems from './account/items';
import endpointItemCreate from './account/item-create';
import endpointItemDelete from './account/item-delete';
import endpointItemUpdate from './account/item-update';

/*
    Imported requestValidator(s)
*/
import endpointItemsValidator from '../validators/account/items';
import endpointItemCreateValidator from '../validators/account/item-create';
import endpointItemDeleteValidator from '../validators/account/item-delete';
import endpointItemUpdateValidator from '../validators/account/item-update';

/*
    Endpoints
*/
router.get(
    '/items',
    rateLimiter(1, 1),
    endpointItemsValidator,
    endpointItems
);
router.post(
    '/item/create',
    rateLimiter(1, 1),
    endpointItemCreateValidator,
    endpointItemCreate
);
router.put(
    '/item/update',
    rateLimiter(1, 1),
    endpointItemUpdateValidator,
    endpointItemUpdate
);
router.delete(
    '/item/delete',
    rateLimiter(1, 1),
    endpointItemDeleteValidator,
    endpointItemDelete
);

/*
    Exported router
*/
export = router;