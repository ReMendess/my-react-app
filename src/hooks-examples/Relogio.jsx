import { useState, useEffect } from "react";

export function Relogio(){
    const [hora, setHora] = useState(new Date().toLocaleDateString());

    useEffect(() => {
        const intervalo = setInterval(() => {
            setHora(new Date().toLocaleTimeString());
        }, 1000);

        return () => clearInterval(intervalo);
    }, []);

    return(
        <div>
            <h2>Relógio em Tempo Real</h2>
            <p>{hora}</p>
        </div>
    );
}