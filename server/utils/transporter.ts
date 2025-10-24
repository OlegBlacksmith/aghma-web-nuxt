import { createTransport } from 'nodemailer';

export const transporter = createTransport({
  host: 'smtp.yandex.ru',
  port: 465, // или 587, если хочешь использовать STARTTLS
  secure: true, // true для 465, false для 587
  auth: {
    user: 'oil.kuz@yandex.ru',
    pass: 'lakcurgclebfyvpg'
  }
});