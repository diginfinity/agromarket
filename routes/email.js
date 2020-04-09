const express = require("express");
const router = express.Router();
const debug = require("debug")("agromarket:emailRoute");
const Joi = require("joi");
const validator = require("express-joi-validation").createValidator();
const { createTransport, getTestMessageUrl } = require("nodemailer");

const emailSchemaOptions = {
  fullName: Joi.string().required(),
  phone: Joi.string().required(),
  companyName: Joi.string(),
  email: Joi.string().email().required(),
  about: Joi.string(),
  message: Joi.string(),
};

const emailSchema = Joi.object(emailSchemaOptions);

const sendMail = async (req, res) => {
  const { fullName, phone, companyName, email, about, message } = req.body;

  const createTransportOptions = {
    host: "smtp.ethereal.email",
    port: 587,
    secure: false,
    auth: {
      user: "brook.paucek@ethereal.email",
      pass: "XAwZrBR7crcn1xm21m",
    },
  };
  // create reusable transporter object using the default SMTP transport
  // https://ethereal.email/messages

  let transporter = createTransport(createTransportOptions);

  const verifyTransporter = (error, success) => {
    if (error) {
      debug(error);
    } else {
      debug("Server is ready to take our messages", success);
    }
  };

  // verify connection configuration
  transporter.verify(verifyTransporter);

  let info;

  try {
    const sendMailOptions = {
      from: `${fullName} <${email}>`,
      to: "bar@example.com, baz@example.com",
      subject: `${about}`,
      text: `${message}`,
      html: `
        <p>Ime i prezime: <strong>${fullName}</strong></p>
        <p>Telefon: <strong>${phone}</strong></p>
        <p>Ime firme: <strong>${companyName}</strong></p>
        <p>Email: <strong>${email}</strong></p>
        <p>U vezi: <strong>${about}</strong></p>
        <p>Poruka: <br>${message}</strong></p>
        `,
    };

    // send mail with defined transport object
    info = await transporter.sendMail(sendMailOptions);

    const successResponse = {
      fullName,
      phone,
      companyName,
      email,
      about,
      message,
    };

    res.status(200).json(successResponse);
  } catch (error) {
    res.json(error);
  }
  debug("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
  // Preview only available when sending through an Ethereal account
  debug("Preview URL: %s", getTestMessageUrl(info));
};

router.post("/", validator.body(emailSchema), sendMail);

module.exports = router;
