import * as nodemailer from "nodemailer";

const {
  EMAIL_PASSWORD: pass,
  EMAIL_USER: user,
  BASE_URL: appUrl,
  PORT: port
} = process.env;

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user,
    pass
  }
});

export const sendConfirmationEmail = (email: string, token: string) => {
  const mailOptions = {
    to: email,
    subject: "Wobbly App - Email Confirmation",
    html: `<p>Hey <a href=${appUrl}:${port}?query=mutation{confirmEmail(token:"${token}"){emailConfirmed}}>click here.</a></p>`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      throw error;
    }
  });
};
