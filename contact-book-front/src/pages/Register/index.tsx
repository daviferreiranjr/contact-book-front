import { useForm } from "react-hook-form"
import { RegisterForm, StyledRegisterPage } from './styles'
import { RegisterData, schema } from './validator'
import { zodResolver } from '@hookform/resolvers/zod'
import { useAuth } from "../../hooks/useAuth"
import { Link } from "react-router-dom"

export const Register = () =>{
    const {register, handleSubmit} = useForm<RegisterData>({
        resolver: zodResolver(schema)
    })
    
    
    const {signUp} = useAuth()
    
    return(
        <StyledRegisterPage>
            <h1>Contact Book</h1>
            <span>Conecte-se com o mundo através do Contact Book - sua lista pessoal de contatos!</span>
            <RegisterForm onSubmit={handleSubmit(signUp)}>
            <h2>Cadastrar</h2>
                <input type="name" id="name" placeholder="Nome" {...register("name")}/>
                <input type="email" id="email" placeholder="Email"  {...register("email")} />
                <input type="password" id="password" placeholder="Senha" {...register("password")}/>
                <input type="phone" id="phone" placeholder="Telefone" {...register("phone")}/>
                <Link to='/' className='link_style'>Já possui um login?</Link>


                <button type="submit">Cadastrar</button>
            </RegisterForm>
        </StyledRegisterPage>
    )
}