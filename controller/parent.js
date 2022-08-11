const school=require('../model/school')

exports.customerdetails=async(req,res)=>{
    try{
    const customer=new school({
        firstname:req.body.firstname,
        lastname:req.body.lastname
    })

    await customer.save()
    res.send({message:'login sucess'})

}
catch (error) {
    res.json(error.message);
  }
}