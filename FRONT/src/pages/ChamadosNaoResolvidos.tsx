import axios from "axios";
import { useEffect, useState } from "react";

export default function ChamadosNaoResolvidos() {
  const [chamados, setChamados] = useState<any[]>([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/chamado/naoresolvido")
      .then((r) => setChamados(r.data));
  }, []);

 return (
    <div>
        <h2>Não Resolvidos</h2>
        <ul>
            {chamados.map(c => <li key={c.chamadoId}>{c.descricao} - <strong>{c.status}</strong></li>)}
        </ul>
    </div>
  );
}
