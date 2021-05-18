const express = require('express')
const app = express()
const nodemailer = require('nodemailer')
const sendGridTransport = require('nodemailer-sendgrid-transport');
const {SENDGRID_API} = require('./config/keys')

const PORT = process.env.PORT || 5000;

app.use(express.json());

const transport = nodemailer.createTransport(
  sendGridTransport({
    auth: {
      api_key: SENDGRID_API,
    },
  })
);

app.post("/send", (req, res) => {
  const { name, email, message, subject } = req.body;
  transport
    .sendMail({
      to: "arsimsejdiudev@gmail.com",
      from: email,
      subject: subject,
      html: `<h3>${name}</h3>``<p>${message}</p>`,
    })
    .then((resp) => {
      res.json({ resp });
    })
    .catch((err) => {
      console.log(err);
    });
});

app.listen(PORT, () => {
    console.log("Server running on port ", PORT);
})
