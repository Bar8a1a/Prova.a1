import axios from "axios";
import { useEffect, useState } from "react";

export default function AlterarChamado() {
  const [chamados, setChamados] = useState<any[]>([]);

  function carregar() {
    axios.get("http://localhost:5000/api/chamado/listar")
      .then((r) => setChamados(r.data));
  }

  useEffect(() => { carregar(); }, []);

  function alterarStatus(id: string) {
    axios.patch(`http://localhost:5000/api/chamado/alterar/${id}`)
        .then(() => { carregar(); });
  }

  return (
    <div>
    <h2>Gerenciar Status</h2>
    <table border={1} width="100%" cellPadding="5">
    <thead><tr><th>Descrição</th><th>Status</th><th>Ação</th></tr></thead>        
    <tbody>
     {chamados.map(c => (
        <tr key={c.chamadoId}>
        <td>{c.descricao}</td>
        <td>{c.status}</td>
                        <td>
        {c.status !== "Resolvido" && (
        <button onClick={() => alterarStatus(c.chamadoId)}>
        Avançar Status
        </button>
        )}
        </td>
        </tr>
  ))}
            </tbody>
        </table>
    </div>
  );
}
