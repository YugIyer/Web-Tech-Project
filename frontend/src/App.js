import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Home from "./pages/Home";
import Calculator from "./pages/Calculator";
import TaxCalculator from "./pages/TaxCalculator";
import PaperReader from "./pages/PaperReader";
import StudentForm from "./pages/StudentForm";
import Layout from "./components/Layout";
import Register from "./pages/Register";

function App() {
  return (
<BrowserRouter>
  <Routes>
    <Route path="/" element={<Login />} />
    <Route path="/register" element={<Register />} />

    <Route
      path="/*"
      element={
        <Layout>
          <Routes>
            <Route path="home" element={<Home />} />
            <Route path="calculator" element={<Calculator />} />
            <Route path="tax" element={<TaxCalculator />} />
            <Route path="reader" element={<PaperReader />} />
            <Route path="student" element={<StudentForm />} />
          </Routes>
        </Layout>
      }
    />
  </Routes>
</BrowserRouter>
  );
}

export default App;