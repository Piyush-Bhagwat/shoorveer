import "./App.css";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import MainSignup from "./pages/MainSignup";
import PatientSignup from "./pages/PatientSignup";
import VolunteerSignup from "./pages/VolunteerSignup";
import HomePage from "./pages/HomePage";
import CatergoryCard from "./pages/catergoryCard";

function App() {
    return (
        <div className="App">
            <Navbar />
            <Router>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/signup" element={<MainSignup />} />
                    <Route path="/home" element={<HomePage />} />
                    <Route path="/patientsignup" element={<PatientSignup />} />
                    <Route
                        path="/volunteersignup"
                        element={<VolunteerSignup />}
                    />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
