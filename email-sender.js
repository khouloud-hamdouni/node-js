const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
   host: 'smtp.gmail.com',  
   port: 3000,               
   secure: true,           
   auth: {
      user: 'khouloudhamdouni20@gmail.com',
      pass: 'your-password'
   }
});

const mailOptions = {
   from: 'khouloudhamddouni20@gmail.com',
   to: 'receipent-email-address',
   subject: 'Sending Email using Node.js',
   text: 'hello'
};

transporter.sendMail(mailOptions, (err, info) => {
   if (err) {
      console.log(err);
   } else {
      console.log('Email sent: ' + info.response);
   }
});