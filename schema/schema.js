import mongoose from "mongoose";
const { Schema } = mongoose;

const loginInfo = new Schema({
    UserName: {
        type: String,
        required: true
    },
    UserEmail: {
        type: String,
        required: true
    },
    UserAge: {
        type: String,
        required: true
    },
})


const loginDetail = mongoose.model('login', loginInfo);
export default loginDetail