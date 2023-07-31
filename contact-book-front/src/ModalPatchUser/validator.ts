import { z } from "zod"


export const schema = z.object({
    name: z.string(),
    email: z.string().email("preencha um email válido"),
    password: z.string(),
    phone: z.string().min(11, "preencha um número de telefone válido")

}).partial()

export type UserData = z.infer<typeof schema>