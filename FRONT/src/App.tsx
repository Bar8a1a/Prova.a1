import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import ListarChamados from "./pages/ListarChamados";
import CadastrarChamado from "./pages/CadastrarChamado";
import ChamadosResolvidos from "./pages/ChamadosResolvidos";
import ChamadosNaoResolvidos from "./pages/ChamadosNaoResolvidos";
import AlterarChamado from "./pages/AlterarChamado";

function App() {
  return (
    <BrowserRouter>
      <nav style={{ padding: "15px", backgroundColor: "#333", color: "#fff", marginBottom: "20px" }}>
        <Link to="/" style={{ color: "#fff", marginRight: "15px" }}>Listar Todos</Link>
        <Link to="/cadastrar" style={{ color: "#fff", marginRight: "15px" }}>Cadastrar</Link>
        <Link to="/nao-resolvidos" style={{ color: "#fff", marginRight: "15px" }}>Não Resolvidos</Link>
        <Link to="/resolvidos" style={{ color: "#fff", marginRight: "15px" }}>Resolvidos</Link>
        <Link to="/alterar" style={{ color: "#fff" }}>Alterar Status</Link>
      </nav>

      <div style={{ padding: "20px" }}>
        <Routes>
          <Route path="/" element={<ListarChamados />} />
          <Route path="/cadastrar" element={<CadastrarChamado />} />
          <Route path="/nao-resolvidos" element={<ChamadosNaoResolvidos />} />
          <Route path="/resolvidos" element={<ChamadosResolvidos />} />
          <Route path="/alterar" element={<AlterarChamado />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
