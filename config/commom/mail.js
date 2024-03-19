var nodemailder = require('nodemailer');
const transporter = nodemailder.createTransport({
    service: "gamil",
    auth: {
        user: "nghiantph41626@fpt.edu.vn",
        pass: "123456",
    }
}) 

module.exports = transporter;