import React, { useEffect, useState } from 'react';

function UseEffectExample(){

    const [counter, setCoutner] = useState(0);

    useEffect(() => {
        document.title = counter;
        
        return () => document.title = 'React App';
    }, [counter])

    return(
        <>
            <h1>{counter}</h1>
            <button onClick={() => setCoutner(counter + 1)}>Adicionar</button>
        </>
    );
}

export default UseEffectExample;