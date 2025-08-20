import {BrowserRouter,Routes,Route} from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import ListStudent from "./pages/ListTeacher";
import AddTeacher from "./pages/AddTeacher";
import AddAdmin from "./pages/AddAdmin";
import ListAdmin from "./pages/ListAdmin";

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/AddTeacher" element={<AddTeacher />} />
      <Route path="/AddAdmin" element={<AddAdmin />} />
      <Route path="/ListTeacher" element={<ListStudent />} />
      <Route path="/ListAdmin" element={<ListAdmin />} />
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
