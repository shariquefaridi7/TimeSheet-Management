import mongoose from "mongoose";

const empInfo= new mongoose.Schema({
empName:{
    type:String,
    required:true
},
empEmail:{
    type:String,
    required:true
},empPass:{
    type:String,
    required:true
}
});

const EmpInfo=mongoose.model("EmpInfo",empInfo);
export default EmpInfo;