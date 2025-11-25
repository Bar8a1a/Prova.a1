import axios from "axios";
import { useEffect, useState } from "react";

export default function ChamadosResolvidos() {
  const [chamados, setChamados] = useState<any[]>([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/chamado/resolvidos")
      .then((r) => setChamados(r.data));
  }, []);

  return (
    <div>
        <h2>Resolvidos</h2>
        <ul>
            {chamados.map(c => <li key={c.chamadoId}>{c.descricao} - <strong>{c.status}</strong></li>)}
        </ул>
    </div>
  );
}
