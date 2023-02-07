const user = require('../Models/UserSchema')

//add a user
//method : @POST
const AddUser =  async(req,res)=>{
    try {
        //1
        const newUser = await user.create(req.body)
        res.json({newUser, msg:'User Added Successfully'})

        //2
        //const NewUser = new user(req.body)
        //const addedUser = await NewUser.save() 
        //res.json(addedUser)
    } catch (error) {
        console.log(error)
    }
}

//get all data users
//method: @GET
const GetAllDataUsers = async(req,res)=>{
    try {
        const users = await user.find({})
        res.json(users)
    } catch (error) {
        console.log(error);
    }
}


//delete data user
//method: @Delete
const deletedDataUser = async(req,res)=>{
    try {
        const deletedUser = await user.findByIdAndDelete(req.params.id)
        res.json({msg:'User has been deleted successfully !!',deletedUser})
    } catch (error) {
        console.log(error)
    }
}


//update data user
//method: PUT
const UpdateDataUser = async(req,res)=>{
    try {
        const updatedUser = await user.findByIdAndUpdate(req.params.idUser,req.body,{new:true})
        res.json(updatedUser)
    } catch (error) {
        console.log(error)
    }
}

module.exports = {UpdateDataUser,deletedDataUser,GetAllDataUsers,AddUser}