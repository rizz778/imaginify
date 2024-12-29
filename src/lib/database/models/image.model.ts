import {model, models, Schema,Document} from "mongoose";
export interface IImage extends Document{
    title:string;
    transformationType:string;
    publicId:string;
    secureUrl:string;
    width?:number;
    height?:number;
    config?:object;
    transformationUrl?:string;
    aspectRatio?:string;
    color?:string;
    prompt?:string;
    author:string;
}
const ImageSchema= new Schema({
    title:{type:String, required:true},
    trnasformationType:{type: String, required:true},
    publicId:{type:String, required:true},
    secureUrl:{type:URL,required:true},
    width:{type:Number},
    height:{type:Number},
    config:{type:Object},
    transformationUrl:{type:URL},
    aspectRatio:{type:String},
    color:{type:String},
    prompt:{type:String},
    author:{type:Schema.Types.ObjectId,ref:'User'},
    createdAt:{type:Date, defualt:Date.now},
});

const Image=models.Image || model('Image',ImageSchema)

export default Image;
