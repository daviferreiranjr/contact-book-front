import { Dispatch } from "react"
import { Contact } from "../../pages/Dashboard"
import { useForm } from "react-hook-form"
import { ContactData, schema } from "../ModalAddContact/validator"
import { zodResolver } from "@hookform/resolvers/zod"
import { Modal } from "../Modal"
import { api } from "../../services/api"


interface ModalUpdateContactsProps {
    toggleModal: () => void
    selectedContactId: null | number
    setContacts: Dispatch<React.SetStateAction<Contact[]>>
}

export const ModalUpdateContacts = ({setContacts, toggleModal, selectedContactId}: ModalUpdateContactsProps) =>{
    const { register, handleSubmit } = useForm<ContactData>({
        resolver: zodResolver(schema)
    })

    const updateContact = async (data: ContactData) => {
        const response = await api.patch<Contact>(`/contacts/${selectedContactId}`, data)
        const updatedContact = response.data;
        setContacts((previusContacts) => 
        previusContacts.map((contact) => (contact.id === selectedContactId ? updatedContact : contact))
    );
        toggleModal()
    }

    return (
        <Modal toggleModal={toggleModal}>
            <h3>Atualize as informações de contato:</h3>
            <form onSubmit={handleSubmit(updateContact)}>
                <label htmlFor="name">Nome</label>
                <input type="name" id="name" {...register("name")} />
                <label htmlFor="email">Email</label>
                <input type="email" id="email" {...register("email")}/>
                <label htmlFor="phone">Telefone</label>
                <input type="phone" id="phone" {...register("phone")}/>

                <button type="submit">Atualizar</button>
            </form>
        </Modal>
    )
}