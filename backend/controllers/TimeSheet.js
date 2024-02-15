import TimeSheet from "../model/TimeSheet.js"

export const addSheet=async(req,res)=>{

  const {depart,desc,day,startTime,endTime} =req.body;
  const {userId} =req.params;
   
  if(depart==""||desc==""||day==""||startTime==""||endTime==""){
    res.send({message:"Please Fills All Details"});
  }else{
    await TimeSheet.create({depart,desc,day,startTime,endTime,userId});
    res.send({message:"Report Added"})
  }


}

export const updateSheet=async(req,res)=>{

    const {depart,desc,day,startTime,endTime} =req.body;
    const {id} =req.params;
    if(depart==""||desc==""||day==""||startTime==""||endTime==""){
      res.send({message:"Please Fills All Details"});
    }else{
      await TimeSheet.findByIdAndUpdate({_id:id},{depart,desc,day,startTime,endTime});
      res.send({message:"Update Successfully"})
    }
  
  }

  export const getSheet=async(req,res)=>{
      const {userId} =req.params;
      const data=await TimeSheet.find({userId});
      res.send(data)
    
  
  }

  export const getAllSheet=async(req,res)=>{

      const data=await TimeSheet.find();
      res.send(data)
    
  
  }

  export const rating=async(req,res)=>{

     const {id} =req.params;
     const {rating}=req.body;

     await TimeSheet.findByIdAndUpdate({_id:id},{rating});
     res.send({message:"Rating Update"})

  }


