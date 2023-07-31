import { z } from "zod"


export const schema = z.object({
    email: z.string().email("preencha um email válido"),
    password: z.string().nonempty("a senha é obrigatória")
})

export type LoginData = z.infer<typeof schema>