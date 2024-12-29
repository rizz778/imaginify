// clerkId,email,username,photo,firstName,lastName,
//PlanId,creditBalance
import {model,models,Schema,Document} from "mongoose";

export interface Userr extends Document{
    clerkId:string;
    email:string;
    username:string;
    photo:string;
    firstName?:string,
    lastName?:string,
    PlanId?:Number,
    creditBalnace?:Number
}
const UserSchema=new Schema({
    clerkId:{type:String,required:true,unique:true},
    email:{type:String,required:true,unique:true},
    username:{type:String,required:true,unique:true},
    photo:{type:URL,required:true},
    firstName:{type:String},
    lastName:{type:String},
    PlanId:{type:Number,default:1},
    creditBalance:{type:Number,default:10},
})

const User=models.User || model('User',UserSchema)

export default User;