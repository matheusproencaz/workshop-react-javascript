import Button from "./Eventos/Button";

function Evento(){

    function meuEvento(){
        console.log(`Ativando Primeiro Evento`)
    }

    function segundoEvento(){
        console.log('Ativando Segundo Evento')
    }

    return(
        <div>
            <p>Clique para disparar um evento:</p>
            <Button event={meuEvento} text="Primeiro Evento"/>
            <Button event={segundoEvento} text="Segundo Evento"/>
        </div>
    );
}

export default Evento;