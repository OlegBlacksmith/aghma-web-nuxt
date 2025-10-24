import { sendEmailController } from "../controllers/sendEmailController"

export default defineEventHandler(async (event) => {
  const body = await readBody(event) // читаем JSON из запроса
  return await sendEmailController(body) // вызываем контроллер
})
