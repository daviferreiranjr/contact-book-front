import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { UserData, schema } from "./validator"
import { Modal } from "../components/Modal"
import { api } from "../services/api"

interface ModalUpdateUserProps {
    toggleModalUpdateUser: () => void
    userData: { userName: string; userId: number } | null;
}

export const ModalUpdateUser = ({userData, toggleModalUpdateUser}: ModalUpdateUserProps) =>{
    const { register, handleSubmit } = useForm<UserData>({
        resolver: zodResolver(schema)
    })

    const updateUser = async (data: UserData) => {
        const response = await api.patch<UserData>(`/users/${userData?.userId}`, data)

        toggleModalUpdateUser()
        return response
        
    }
      
    return (
        <Modal toggleModal={toggleModalUpdateUser}>
            <h3>Atualize suas informações:</h3>
            <form onSubmit={handleSubmit(updateUser)}>
                <label htmlFor="name">Nome</label>
                <input type="name" id="name" {...register("name")} />
                <label htmlFor="email">Email</label>
                <input type="email" id="email" {...register("email")}/>
                <label htmlFor="password">Senha</label>
                <input type="password" id="password" {...register("password")}/>
                <label htmlFor="phone">Telefone</label>
                <input type="phone" id="phone" {...register("phone")}/>

                <button type="submit">Atualizar</button>
            </form>
        </Modal>
    )
}