const sgMail = require('@sendgrid/mail')

const sendgridAPIKey = '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'

sgMail.setApiKey(sendgridAPIKey)

sgMail.send({
  to: 'aloneinabyss@gmail.com',
  from: 'thiago-assi@outlook.com',
  subject: 'This is my first email!',
  text: 'I hope this one actually get to you'
}).then(() => {
  console.log('Email sent')
})
.catch((error) => {
  console.error(error)
})