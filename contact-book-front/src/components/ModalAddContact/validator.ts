import { z } from "zod"


export const schema = z.object({
    name: z.string().min(3, "o nome precisa ter no mínimo 3 caracteres"),
    email: z.string().nonempty("preencha um email válido"),
    phone: z.string().min(11, "preencha um número de telefone válido")
})

export type ContactData = z.infer<typeof schema>