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

export const confirmEmail = (email: string, token: string) => {
  const mailOptions = {
    to: email,
    subject: "Wobbly App - Email Confirmation",
    text: `${appUrl}:${port}/confirm?${token}`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      throw error;
    }
  });
};
