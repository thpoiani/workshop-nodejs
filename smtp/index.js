const nodemailer    = require('nodemailer');
const smtpTransport = require('nodemailer-smtp-transport');

const transporter = nodemailer.createTransport(smtpTransport({
    host: 'localhost',
    port: 568,
    auth: {
        user: 'username',
        pass: 'password'
    }
}));

const options = {
    from    : 'sender@example.com',
    to      : 'receiver@example.com',
    subject : 'subject',
    text    : 'body'
};

transporter.sendMail(options, function(error, response) {
   if (error) {
        console.log(error);
   } else {
        console.log('Message sent');
   }
});
