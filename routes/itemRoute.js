import express from "express";

const router = express.Router();

import {getAllItems, postOneItem, deleteOneItem} from "../controller/itemController.js";

router
  .route('/')
    .get(getAllItems)
    .post(postOneItem)
    .delete(deleteOneItem);

export default router;