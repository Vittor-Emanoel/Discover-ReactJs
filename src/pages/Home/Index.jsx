import Card from "../../components/Card/Index";
import "./styles.css";

export function Home() {
  return (
    <div className="container ">
      <h1>Lista de presença</h1>
      <input type="text" placeholder="Digite o nome.." />
      <button type="button">Adicionar</button>

      <Card name="Vittor" time="13:39:00" />
      <Card name="João" time="10:15:01" />
    </div>
  );
}
