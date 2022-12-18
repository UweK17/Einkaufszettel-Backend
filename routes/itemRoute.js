import express from "express";

const router = express.Router();

import {getAllItems, postOneItem} from "../controller/itemController.js";

router
  .route('/')
    .get(getAllItems)
    .post(postOneItem);

export default router;