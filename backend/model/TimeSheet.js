import mongoose from "mongoose";

const timeSheet= new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
    },
depart:{
    type:String,
    required:true
},
desc:{
    type:String,
    required:true
},
day:{
    type:String,
    required:true
},
startTime:{
    type:String,
    required:true
},
endTime:{
    type:String,
    required:true
},rating:{
    type:Number,
    default:0
}


});

const TimeSheet=mongoose.model("TimeSheet",timeSheet);
export default TimeSheet;