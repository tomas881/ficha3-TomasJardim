import { useState } from "react";

function Card({card})
{
    const [likes, setlikes] = useState(0);
    return(
        <li className="card">
            <h2>Nome: {card.name}</h2>
            <p>Tipo: {card.type} </p>
            <p>Ataque: {card.attack} </p>
            <p>Defesa: {card.defense} </p>
        </li>
    );
}

export default Card;