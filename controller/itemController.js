import Item from '../models/itemModel.js';

export const getAllItems = async (req, res) => {
  try {
    const allItems = await Item.find().select('-__v')
    res.status(200).send(allItems);
  } catch (error) {
    console.log(error);
  }
};

export const postOneItem = async (req, res) => {
  try {
    const newItem = await Item.create(req.body);
    res.status(200).json(newItem);
  } catch (error) {
    console.log(error);
  }
};

export const deleteOneItem = async (req, res) => {
  try {
    const deletedItem = await Item.deleteOne(req.params.id)
    res.status(200).json(deletedItem);
  } catch (error) {
    console.log(error);
  }
}

