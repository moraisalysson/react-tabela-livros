import TableBody from "./components/table/TableBody";
import TableFoot from "./components/table/TableFoot";
import TableHead from "./components/table/TableHead";

function App() {
  return (
    <table className="tabela">
      <TableHead />
      <TableBody />
      <TableFoot />
    </table>
  );
}

export default App;
