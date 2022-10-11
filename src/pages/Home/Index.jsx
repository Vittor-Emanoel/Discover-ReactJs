import { useState } from "react";
import Card from "../../components/Card/Index";
import "./styles.css";

export function Home() {
  const [studentName, setStudentName] = useState();

  return (
    <div className="container ">
      <h1>Lista de presença{studentName}</h1>
      <input
        type="text"
        placeholder="Digite o nome.."
        onChange={(e) => setStudentName(e.target.value)} // pegando o valor do input e atualizando o stado
      />
      <button type="button">Adicionar</button>

      <Card name="Vittor" time="13:39:00" />
      <Card name="João" time="10:15:01" />
    </div>
  );
}
