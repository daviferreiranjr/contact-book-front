import { useEffect, useState } from "react"
import { api } from "../../services/api"
import { Board, Container } from "./styled"
import { Card } from "../../components/Card"
import { ModalAddContact } from "../../components/ModalAddContact"
import { AiOutlineUserAdd } from 'react-icons/ai'
import { AiOutlineEdit } from 'react-icons/ai'
import { AiFillDelete } from 'react-icons/ai'
import { AiOutlineLogout } from 'react-icons/ai'
import { useNavigate } from "react-router-dom";
import jwt_decode from 'jwt-decode'
import { ModalUpdateUser } from "../../ModalPatchUser"
import { toast } from "react-toastify"


export interface Contact {
    id: number,
    name: string,
    email: string,
    phone: string,
    dateRegister: Date
}


export const Dashboard = () => {
    const [contacts, setContacts] = useState<Contact[]>([])
    const [isOpenModal , setisOpenModal] = useState(false)
    const [isOpenModalUpdateUser, setIsOpenModalUpdateUser] = useState(false)
    const navigate = useNavigate()
    const [users, setUsers] = useState<Contact[]>([]);

    useEffect(() => {
        (async () => {
            const response = await api.get<Contact[]>('/contacts')

            setContacts(response.data)
        })()
    }, [])

    const toggleModal = () =>{setisOpenModal(!isOpenModal)}
    const toggleModalUpdateUser = () =>{setIsOpenModalUpdateUser(!isOpenModalUpdateUser)}

    const renderBoard = (contactsToRender: Contact[]) => 
        contactsToRender.map(contact => <Card key={contact.id} contact={contact} setContacts={setContacts}/>)

    const logout = () => {
        localStorage.removeItem('your-contack-book:token')
        navigate('/');
    };


    const getUserNameFromToken = () => {
        const token = localStorage.getItem('your-contack-book:token');

        if (token) {
            try {
            const decodedToken = jwt_decode<{ userName: string; subject: string }>(token);

            const userName = decodedToken.userName;
            const userId = parseInt(decodedToken.subject, 10);

            return {userName, userId}

            } catch (error) {
            console.log('Erro ao decodificar o token:', error);
            }
        }

        return null
};

    const userData = getUserNameFromToken()


    useEffect(() => {
        (async () => {
            const response = await api.get<Contact[]>('/users')

            setUsers(response.data)
        })()
    }, [])
    
    const targetUser = users.find((user) => user.id === userData?.userId);


    const deleteUser = async () => {
        try {
        const userId = userData?.userId;
        if (userId !== undefined){
            await api.delete(`/users/${userId}`);
        }
        localStorage.removeItem('your-contack-book:token');
      
        navigate("/")
        toast.success('Usuário deletado com sucesso!');
        } catch (error) {
        toast.error('Falha ao deletar o usuário!');
        }
      };

    return (
        <>
        <Container>
            <header>
                <div className="title-user">
                    <h1>Contact Book</h1>
                    <p>Olá {targetUser?.name}, seja bem vindo!</p>
                    <p>Seu número: {targetUser?.phone}</p>
                </div>
                <nav>
                    <button type="button" className="icon-nav" onClick={toggleModal}><AiOutlineUserAdd /></button>
                    <button type="button" className="icon-nav" onClick={toggleModalUpdateUser}><AiOutlineEdit/></button>
                    <button type="button" className="icon-nav" onClick={() => deleteUser()}><AiFillDelete/></button> 
                    <button type="button" className="icon-nav" onClick={logout}><AiOutlineLogout/></button> 
                </nav>
            </header>
            {
                isOpenModal && <ModalAddContact setContacts={setContacts} toggleModal={toggleModal}/>
            }
            {
                isOpenModalUpdateUser && <ModalUpdateUser userData={userData} toggleModalUpdateUser={toggleModalUpdateUser}/>
            }

            <main>
                <Board>{renderBoard(contacts)}</Board>
            </main>
        </Container>
        </>
    )
}