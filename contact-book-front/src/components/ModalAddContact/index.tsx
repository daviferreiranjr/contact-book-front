import { Dispatch } from "react"
import { Contact } from "../../pages/Dashboard"
import { useForm } from "react-hook-form"
import { ContactData, schema } from "./validator"
import { zodResolver } from "@hookform/resolvers/zod"
import { Modal } from "../Modal"
import { api } from "../../services/api"


interface ModalAddContactsProps {
    toggleModal: () => void
    setContacts: Dispatch<React.SetStateAction<Contact[]>>
}

export const ModalAddContact = ({setContacts, toggleModal}: ModalAddContactsProps) =>{
    const { register, handleSubmit } = useForm<ContactData>({
        resolver: zodResolver(schema)
    })

    const createContact = async (data: ContactData) =>{
        const response = await api.post<Contact>('/contacts', data)

        setContacts(previusContacts => [response.data, ...previusContacts])
        toggleModal()
    }

    return (
        <Modal toggleModal={toggleModal}>
            <h3>Cadastre um novo contato:</h3>
            <form onSubmit={handleSubmit(createContact)}>
                <label htmlFor="name">Nome</label>
                <input type="name" id="name" {...register("name")} />
                <label htmlFor="email">Email</label>
                <input type="email" id="email" {...register("email")}/>
                <label htmlFor="phone">Telefone</label>
                <input type="phone" id="phone" {...register("phone")}/>

                <button type="submit">Cadastrar</button>
            </form>
        </Modal>
    )
}