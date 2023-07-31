import { useForm } from "react-hook-form"
import { LoginData, schema } from "./validator"
import { zodResolver } from "@hookform/resolvers/zod"
import { useAuth } from "../../hooks/useAuth"
import { Container, LoginForm } from "./styles"
import { Link } from "react-router-dom"


export const Login = () => {
    const {register, handleSubmit} = useForm<LoginData>({
        resolver: zodResolver(schema)
    })

    const {signIn} = useAuth()

    return (
        <Container>
            <h1>Contact Book</h1>
            <span>Conecte-se com o mundo através do Contact Book - sua lista pessoal de contatos!</span>
            <LoginForm onSubmit={handleSubmit(signIn)}>
            <h2>Login</h2>
                <input type="email" id="email" placeholder="Email"  {...register("email")} />
                <input type="password" id="password" placeholder="Senha" {...register("password")}/>
                <Link to='/register' className='link_style'>Vamos nos cadastrar?</Link>

                <button type="submit">Entrar</button>
            </LoginForm>
        </Container>
    )
}