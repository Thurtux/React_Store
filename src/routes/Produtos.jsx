import { useNavigate } from "react-router-dom";

function Produtos(){
    /*useNavigate tem  a funçap de fazer o redirecionamento de componentes*/ 
    const navigate =useNavigate();

    /*criando a função handleLogout */

    const handleLogout =()=>{
        sessionStorage.removeItem("usuario");
        sessionStorage.removeItem("senha");
        alert("saindo da sessao...")
        navigate("/")
    }

    return(
    <>
    <h1>ACESSO RESTRITO</h1>
    <button onClick={handleLogout}>Logoff</button>
    </>
    )
}

export default Produtos;