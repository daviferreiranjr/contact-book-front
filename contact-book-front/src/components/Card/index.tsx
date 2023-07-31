import { Dispatch, useState } from "react"
import { Contact } from "../../pages/Dashboard"
import { Container } from "./styles"
import { ModalUpdateContacts } from "../ModalPatchContact"
import { AiOutlineEdit } from 'react-icons/ai'
import { AiFillDelete } from 'react-icons/ai'
import { api } from "../../services/api"
import { toast } from "react-toastify"


interface CardProps {
    contact: Contact
    setContacts: Dispatch<React.SetStateAction<Contact[]>>
}


export const Card = ({contact, setContacts}: CardProps) => {

const [selectedContactId, setSelectedContactId] = useState<number | null>(null);
const [isOpenModal , setisOpenModal] = useState(false)
const toggleModal = () =>{setisOpenModal(!isOpenModal)}

    const handleCardClick = (id: number) => {
        setSelectedContactId(id);
    };

    const deleteContact = async (selectedContactId: number) => {

        try {
       
          await api.delete(`/contacts/${selectedContactId}`);
      
          setContacts((previousContacts) =>
            previousContacts.filter((contact) => contact.id !== selectedContactId)
          );
      
          toast.success('Contato deletado com sucesso!');

        }catch (error) {
            toast.error('Falha ao deletar o contato!');
          }
    }
    

    return (
        <Container key={contact.id} onClick={() => handleCardClick(contact.id)}>
                <h3>{contact.name}</h3>
                <h4>{contact.email}</h4>
                <h4>{contact.phone}</h4>
                <div className="buttons-contact">
                    <button type="button" className="icon-contact" onClick={toggleModal}><AiOutlineEdit/></button>
                    <button type="button" className="icon-contact" onClick={() => deleteContact(contact.id)}><AiFillDelete/></button> 
                </div>
                {
                isOpenModal && <ModalUpdateContacts setContacts={setContacts} toggleModal={toggleModal} selectedContactId={selectedContactId}/>
                }
        </Container>
    )

}