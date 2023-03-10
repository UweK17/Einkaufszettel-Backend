import express from "express";

const router = express.Router();

import {getAllItems, postOneItem, deleteOneItem} from "../controller/itemController.js";

router
  .route('/items')
    .get(getAllItems)
    .post(postOneItem);

router  
  .route('/items/:id')
    .delete(deleteOneItem);

export default router;