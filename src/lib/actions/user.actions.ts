"use server"

import { revalidatePath } from "next/cache";
import User from "../database/models/user.model"
import { connectToDatabase } from "../database/mongoose"
import {handleError} from "../utils";

//CREATE
export async function createSecureServer(user:CreateUserParams){
  try {
    await connectToDatabase();
    const newUser= await User.create(user);

    return JSON.parse(JSON.stringify(newUser))

  } catch (error) {
    handleError(error);
  }
}

//READ
export async function getUserById(userId:string){
    try {
        await connectToDatabase();
        const user=await User.findOne({clerkId:userId});

        if(!user) throw new Error("IUser not found");

            return JSON.parse(JSON.stringify(user));
        
    } catch (error) {
        handleError(error);
    }
}
//UPDATE

export async function updateUser(clerkId:String,user:UpdateUserParams){
    try{
        await connectToDatabase();

        const updatedUser=await User.findOneAndUpdate({clerkId},user,{
            new:true,
        })
        if(!updateUser) throw new Error("User update failed");

        return JSON.parse(JSON.stringify(updatedUser));
    }
    catch(error){
        handleError(error);
    }
}

//DELETE
export async function deleteUser(clerkId:string){
    try{
        await connectToDatabase();

        const userToDelete=await User.findOne({clerkId});

        if(!userToDelete){
            throw new Error("User not found")
        }

        const deletedUser=await User.findByIdAndDelete(userToDelete._id);
        revalidatePath("/")

        return deletedUser?JSON.parse(JSON.stringify(deletedUser)):null;
    } catch(error){
        handleError(error);
    }
}

export async function updateCredits(userId:string,creditFee:number){
    try {
        await connectToDatabase();

        const updateUserCredits=await User.findOneAndUpdate(
            {_id:userId},
        {$inc:{creditBlance:creditFee}},
    {new:true})
    if(!updateUserCredits) throw new Error("User credits update failed");

    return JSON.parse(JSON.stringify(updateUserCredits));
    } catch (error) {
        handleError(error);
    }
}