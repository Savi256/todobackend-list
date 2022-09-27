const nodemailer = require("nodemailer");

// const transport=nodemailer.createTransport({
//     service:'gmail',
//     auth:{
//         user:'baains256@gmail.com',
//         password:'95030081dc'
//     }
// })

// const mailoption={
//     from:'baains256@gmial.com',
//     to:'isaacchidera256@gmail.com',
//     subject:'testing and testing',
//     text:'haha in your face'

// }

// transport.sendMail(mailoption,(err,data)=>{
//     if(err){
//         console.log('error')
//     }
//     else{
//         console.log('email sent!!!')
//     }
// })

exports.verifyemail = async (email, OTP) => {
  const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "532d2066111809",
      pass: "00a365ca478820",
    },
  });
  await transport.sendMail({
    from: "baainzzy256@gmail.com",
    to: email,
    subject: "verify email",
    html: `<div>
        
        <p><h1> ${OTP} </h1></p>
        
        </div>`,
  });
};
exports.emailemailverified = async (email) => {
  const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "532d2066111809",
      pass: "00a365ca478820",
    },
  });
  await transport.sendMail({
    from: "baainzzy256@gmail.com",
    to: email,
    subject: "SUCCESSFULLY VERIFIED",
    html: `<div>
        
        <p><h1>VERIFICATION SUCCESSFUL</h1></p>
        
        </div>`,
  });
};
