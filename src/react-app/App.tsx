import { BrowserRouter as Router, Routes, Route } from "react-router";
import HomePage from "@/react-app/pages/Home";
import AboutPage from "@/react-app/pages/AboutPage";
import ServicesPage from "@/react-app/pages/ServicesPage";
import TeamPage from "@/react-app/pages/TeamPage";
import ContactPage from "@/react-app/pages/ContactPage";
import TributaryLawPage from "@/react-app/pages/TributaryLawPage";
import BusinessLawPage from "@/react-app/pages/BusinessLawPage";
import LaborLawPage from "@/react-app/pages/LaborLawPage";
import MedicalLawPage from "@/react-app/pages/MedicalLawPage";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sobre" element={<AboutPage />} />
        <Route path="/servicos" element={<ServicesPage />} />
        <Route path="/equipe" element={<TeamPage />} />
        <Route path="/contato" element={<ContactPage />} />
        <Route path="/direito-tributario" element={<TributaryLawPage />} />
        <Route path="/direito-empresarial" element={<BusinessLawPage />} />
        <Route path="/direito-trabalhista" element={<LaborLawPage />} />
        <Route path="/direito-medico" element={<MedicalLawPage />} />
      </Routes>
    </Router>
  );
}
