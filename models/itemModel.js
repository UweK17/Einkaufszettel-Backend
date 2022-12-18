import mongoose, {Schema, model} from 'mongoose';

const itemSchema = new Schema ({
  item: {
    type: String,
    required: true
  }
});

const itemModel = model('EKZ', itemSchema);
export default itemModel;