const User = require("../models/user-model");
const Contact = require('../models/contact-model');

const getAllUsers = async (req, res, next) => {
  try {
    const users = await User.find({}, {password:0});
    if (!users || users.length === 0) {
      return res.status(404).json({ message: "No user found" });
    }
    // console.log(users);
    return res.status(200).json({ users });
  } catch (error) {
    console.log(error);
  }
};

const getAllContacts = async(req,res,next)=>{
    try {
        const contacts = await Contact.find();
        if(!contacts || contacts.length === 0) {
            return res.status(404).json({ message: "No contacts found" });
        } 
        return res.status(200).json({ contacts, msg:"All contacts are here"});
    } catch (error) {
        console.log(error);
    } 
};

const deleteContactById = async(req,res,next)=>{
  try {
    const id = req.params.id;
    await Contact.deleteOne({_id:id});
    return res.status(200).json({ message: "Contact deleted successfully"});
  } catch (error) {
    console.log(error);
  }
} ;
// to edit the user
const getUserById = async(req,res)=>{
  const id = req.params.id; 
  const data = await User.findOne({_id:id, }, {password:0});
  return res.status(200).json({data});
}

const deleteUserById = async(req, res) =>{
  try {
    const id = req.params.id;
    await User.deleteOne({ _id: id});
    return res.status(200).json({ message: "User deleted successfully"});
  } catch (error) {
   console.log(error);
  }
}

const updateUserById = async(req, res)=>{
  try {
    const id = req.params.id;
    const updatedUserData = req.body;
    const updatedData = await User.updateOne({_id:id},{
      $set: updatedUserData
    });
    return res.status(200).json(updatedData);

  } catch (error) {
    console.log(error);
  }
}
module.exports = { getAllUsers, getAllContacts, deleteUserById, getUserById, deleteContactById, updateUserById };
