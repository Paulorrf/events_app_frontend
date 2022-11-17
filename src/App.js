import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import RegisterUser from "./pages/RegisterUser";

function App() {
  return (
    <div className="bg-[#0f0f0f] h-screen w-screen text-white">
      <Navbar />
      <Routes>
        <Route path="/register" element={<RegisterUser />} />
      </Routes>
    </div>
  );
}

export default App;
