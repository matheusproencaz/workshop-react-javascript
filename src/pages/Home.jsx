import { useState} from 'react';
import UseEffectExample from "../components/Eventos/UseEffectExample";

function Home() {

    const[visible, setVisible] = useState(true);

    setTimeout(() => {
        setVisible(false);
    }, 5000);

    return(
        <div>
            <h1>Home</h1>
            { visible && 
                <UseEffectExample /> 
            }   
        </div>
    );
}

export default Home;