import nodemailer from 'nodemailer'

var smtpConfig = {
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: "thalaiva7399@gmail.com",
        pass: "odrrmitdabqbtsns"
    }
};

var transporter = nodemailer.createTransport(smtpConfig);
            
var mailOptions = {
from: "thalaiva7399@gmail.com",
to: "mukuntanku23@gmail.com",
subject: 'Account Creation',
text: `Your account has been created successfully!.`
};
  
transporter.sendMail(mailOptions, function(error, info){
if (error) {
    console.log(error);
} else {
    console.log('Email sent: ' + info.response);
}
});