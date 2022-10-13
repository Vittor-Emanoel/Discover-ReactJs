import { useState } from "react";
import Card from "../../components/Card/Index";
import "./styles.css";

export function Home() {
  const [studentName, setStudentName] = useState("");
  const [students, setStudens] = useState([]);

  function handleAddStudent() {
    const newStudent = {
      name: studentName,
      time: new Date().toLocaleTimeString("pt-br", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      }),
    };
    setStudens((prevState) => [...prevState, newStudent]); //adicionando o objeto no estado
  }

  return (
    <div className="container ">
      <h1>Lista de presença</h1>
      <input
        className="inpt"
        type="text"
        placeholder="Digite o nome.."
        onChange={(e) => setStudentName(e.target.value)} // pegando o valor do input e atualizando o stado
      />
      <button type="button" onClick={handleAddStudent}>
        Adicionar
      </button>

      {students.map((student) => (
        <Card name={student.name} time={student.time} />
      ))}
    </div>
  );
}
