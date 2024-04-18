import { useRef } from "react";
import '../css/Login.css'
import Produtos from "./Produtos";

function Login (){
    
    const usuario = useRef();
    const senha = useRef();

    const getUsuario = sessionStorage.getItem("usuario");
    const getSenha = sessionStorage.getItem("senha");

    const handleSubmit =()=>{

        if(usuario.current.value =="Admin"  && senha.current.value=='12345'){
            let token = 
                Math.random().toString(16).substring(2)+
                Math.random().toString(16).substring(2)+

            
            sessionStorage.setItem("usuario", "Admin");
            sessionStorage.setItem("senha", token);
            
        }
        else(
            alert("usuario e senha negado")
        )

    }
    
    return(
        <section className="login">
            {/*condição ternairia*/}
            {getUsuario && getSenha ?(
                <Produtos/>
            ) : (
                <form action="" onSubmit={handleSubmit}>
                <div className="form__login">
                <p>
                    Usuario: 
                    <input ref={usuario} type="text" name="" id="" placeholder="Nome"/>
                </p>
                <p>
                    Senha: 
                    <input ref={senha} type="password" name="" id="" placeholder="Senha"/>
                </p>
                <button type="submit">Login</button>
                </div>
            </form>
        /*fim da condição ternaria*/
        )}
        </section>
    )
}
export default Login;