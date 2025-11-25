import axios from "axios";
import { useEffect, useState } from "react";

export default function ListarChamados() {
  const [chamados, setChamados] = useState<any[]>([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/chamado/listar")
      .then((r) => setChamados(r.data))
      .catch(e => console.log(e));
  }, []);

  return (
    <div>
        <h2>Todos os Chamados</h2>
        <table border={1} width="100%" cellPadding="5">
            <thead>
                <tr><th>ID</th><th>Descrição</th><th>Status</th><th>Data</th></tr>
            </thead>
            <tbody>
                {chamados.map(c => (
                    <tr key={c.chamadoId}>
                        <td>{c.chamadoId}</td>
                        <td>{c.descricao}</td>
                        <td>{c.status}</td>
                        <td>{c.dataCriacao}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  );
}
