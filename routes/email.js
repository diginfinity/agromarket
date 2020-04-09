const express = require("express");
const router = express.Router();
const debug = require("debug")("agromarket");
const Joi = require("joi");
const validator = require("express-joi-validation").createValidator({});
const nodemailer = require("nodemailer");

const itemSchema = Joi.object({
  fullName: Joi.string().required(),
  phone: Joi.string().required(),
  companyName: Joi.string(),
  email: Joi.string().email().required(),
  about: Joi.string(),
  message: Joi.string(),
});

router.post("/", validator.body(itemSchema), async (req, res) => {
  const { fullName, phone, companyName, email, about, message } = req.body;

  // create reusable transporter object using the default SMTP transport
  // https://ethereal.email/messages
  let transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: "brook.paucek@ethereal.email", // fake
      pass: "XAwZrBR7crcn1xm21m", // fake
    },
  });

  // verify connection configuration
  transporter.verify(function (error, success) {
    if (error) {
      debug(error);
    } else {
      debug("Server is ready to take our messages");
    }
  });

  try {
    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: `${fullName} <${email}>`, // sender address
      to: "bar@example.com, baz@example.com", // list of receivers
      subject: `${about}`, // Subject line
      text: `${message}`, // plain text body
      html: `
        <p>Ime i prezime: <strong>${fullName}</strong></p>
        <p>Telefon: <strong>${phone}</strong></p>
        <p>Ime firme: <strong>${companyName}</strong></p>
        <p>Email: <strong>${email}</strong></p>
        <p>U vezi: <strong>${about}</strong></p>
        <p>Poruka: <br>${message}</strong></p>
        `, // html body
    });

    res.status(200).json({
      fullName,
      phone,
      companyName,
      email,
      about,
      message,
    });
  } catch (error) {
    res.json(error);
  }

  debug("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  debug("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
});

module.exports = router;
