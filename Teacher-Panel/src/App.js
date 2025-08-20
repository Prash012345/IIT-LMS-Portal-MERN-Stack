import {BrowserRouter,Routes,Route} from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import AddStudent from "./pages/AddStudent";
import ListStudent from "./pages/ListStudent";
import AddMaterial from "./pages/AddMaterial";
import ListMaterial from "./pages/ListMaterial";

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/AddStudent" element={<AddStudent />} />
      <Route path="/ListStudent" element={<ListStudent />} />
      <Route path="/AddMaterial" element={<AddMaterial />} />
      <Route path="/ListMaterial" element={<ListMaterial />} />
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
