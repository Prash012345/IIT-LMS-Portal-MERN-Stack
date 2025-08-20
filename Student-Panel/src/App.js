import {BrowserRouter,Routes,Route} from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import ListMaterial from "./pages/ListMaterial";


function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/ListMaterial" element={<ListMaterial />} />
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
