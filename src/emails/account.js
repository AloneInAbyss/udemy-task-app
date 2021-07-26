const sgMail = require('@sendgrid/mail')

const sendgridAPIKey = process.env.SENDGRID_KEY

sgMail.setApiKey(sendgridAPIKey)

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: 'thiago-assi@outlook.com',
    subject: 'Thanks for joining in!',
    text: `Welcome to the app, ${name}. Let me know how you get along with the app.`,
    html: `<h1>Welcome!</h1><p>Welcome to the app, ${name}. Let me know how you get along with the app.`
  }).then(() => {
  })
  .catch((error) => {
    console.error(error)
  })
}

const sendFarewellEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: 'thiago-assi@outlook.com',
    subject: 'Farewell, from Task App',
    text: `We are really sad about your departure, ${name}. Let me know if we can do something to improve. Goodbye!`,
    html: `<h1>Farewell, from Task App</h1><p>We are really sad about your departure, ${name}. Let me know if we can do something to improve. Goodbye!`
  }).then(() => {
  })
  .catch((error) => {
    console.error(error)
  })
}

module.exports = {
  sendWelcomeEmail,
  sendFarewellEmail
}