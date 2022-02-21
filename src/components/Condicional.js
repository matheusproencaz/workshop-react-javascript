import { useState } from 'react';

function Condicional(){
    const [email, setEmail] = useState();
    const [userEmail, setUserEmail] = useState();

    function enviarEmail(e){
        e.preventDefault();
        setUserEmail(email);
   }

    function limparEmail(e){
        setUserEmail("");
    }
    
    return(
        <div>
            <h2>Cadastre seu E-mail</h2>
            <form>
                <input type="email" placeholder='Digite seu E-mail' onChange={(e) => setEmail(e.target.value)}/>
                <button onClick={enviarEmail}>Enviar</button>
                {userEmail && (
                    <div>
                        <p>O e-mail do usuário é: {userEmail}</p>
                        <button onClick={limparEmail}>Limpar E-mail</button>
                    </div>
                )}
            </form>
        </div>
    );
}

export default Condicional;