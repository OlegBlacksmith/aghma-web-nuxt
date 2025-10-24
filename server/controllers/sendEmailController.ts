import Email from '~/../../shared/models/Email.model'
import { transporter } from '../utils/transporter'

export const sendEmailController = async (email: Email) => {
  try {
    const mailOptions = {
      from: `"${email.name}" <oil.kuz@yandex.ru>`, // всегда твоя почта
      to: 'oil.kuz@yandex.ru',
      replyTo: email.email,
      subject: `Заявка от ${email.name}`,
      text: `Заинтересовавшая услуга: ${email.serviceType}\nИмейл для связи: "${email.email}"\nВыбранная локаль: "${email.locale}"`
    };
    await transporter.sendMail(mailOptions);
    return { success: true }
  } catch (err: any) {
    console.error(err.message);
    return { success: false, error: err.message }
  }
};