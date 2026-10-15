// PONTO DE PARTIDA DA AULA 4
//
// É exatamente onde o professor acabou o live coding do Bloco 1:
// uma app React criada com o Vite, já sem o código de exemplo.
//
// Para pôr a correr (dentro da pasta client/ do teu repo):
//     npm install
//     npm run dev
// e abrir http://localhost:5173
//
// Tarefa 1: substitui este array vazio pelo array cards do teu server
// (o que fizeste na aula 2).
import {useState} from "react";
import Card from "./Card";
const cards = [
  { name: "Dragão de Cobalto", type: "Criatura", attack: 7, defense: 5 },
  { name: "Guardiã das Marés", type: "Criatura", attack: 4, defense: 8 },
  { name: "Mago de Fogo", type: "Criatura", attack: 6, defense: 2 },
  { name: "Escudo Místico", type: "Feitiço", attack: 0, defense: 10 },
  { name: "Lâmina Sombria", type: "Artefato", attack: 5, defense: 0 }
];

function App() {
  const [filter, setFilter] = useState("Todas");
  const visible = cards.filter(
    (card) => filter === "Todas" || card.type === filter);
  return (
    <main>
      <h1>A minha coleção</h1>
    <p>Tenho {cards.length} cartas</p>
    <button onClick={() => setFilter("Criatura")}> Só criaturas</button>
    <button onClick={() => setFilter("Feitiço")}> Só feitiços</button>
    <button onClick={() => setFilter("Artefato")}> Só artefatos</button>
    <p>{visible.map((card, index) => (
      <Card key = {index} card={card}/>
    ))}</p>
    
    </main>
  );
}

export default App;
