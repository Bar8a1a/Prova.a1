import axios from "axios";
import { useState } from "react";

export default function CadastrarChamado() {
  const [descricao, setDescricao] = useState("");

  function enviar(e: any) {
    e.preventDefault();
    const chamado = {
      descricao: descricao,
      status: "Aberto"
    };

    axios.post("http://localhost:5000/api/chamado/cadastrar", chamado)
      .then(() => {
        alert("Cadastrado com sucesso!");
        setDescricao("");
      });
  }

  return (
    <div>
      <h2>Novo Chamado</h2>
      <form onSubmit={enviar}>
        <input 
            placeholder="Descrição do problema" 
            value={descricao} 
            onChange={(e) => setDescricao(e.target.value)} 
            required 
            style={{ padding: "10px", width: "300px" }}
        />
        <br/><br/>
        <button type="submit" style={{ padding: "10px" }}>Cadastrar</button>
      </form>
    </div>
  );
}
