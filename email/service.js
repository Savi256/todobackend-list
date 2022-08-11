const nodemailer=require('nodemailer')

const transport=nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:'baains256@gmail.com',
        password:'95030081dc'
    }
})

const mailoption={
    from:'baains256@gmial.com',
    to:'isaacchidera256@gmail.com',
    subject:'testing and testing',
    text:'haha in your face'

}

transport.sendMail(mailoption,(err,data)=>{
    if(err){
        console.log('error')
    }
    else{
        console.log('email sent!!!')
    }
})
