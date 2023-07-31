import { z } from "zod"


export const schema = z.object({
    name: z.string().nonempty("o nome é obrigatória"),
    email: z.string().email("preencha um email válido"),
    password: z.string().nonempty("a senha é obrigatória"),
    phone: z.string().min(11, "preencha um número de telefone válido")

})

export type RegisterData = z.infer<typeof schema>