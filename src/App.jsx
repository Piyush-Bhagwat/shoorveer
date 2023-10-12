import "./App.css";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import MainSignup from "./pages/MainSignup";
import PatientSignup from "./pages/PatientSignup";
import VolunteerSignup from "./pages/VolunteerSignup";
import HomePage from "./pages/HomePage";
import CatergoryCard from "./pages/catergoryCard";
import { db, getDocuments } from "./Firebase/firebaseInit";
import { useContext } from "react";
import { AppContext } from "./context/appContext";
import { useEffect } from "react";

function App() {
    const { setUserData, setLogged, setMode } = useContext(AppContext);

    useEffect(() => {
        const lsUserData = JSON.parse(localStorage.getItem("userInfo"));
        if (lsUserData) {
            setUserData(lsUserData);
            setLogged(true);
            setMode(lsUserData.type);
        }
    }, []);

    return (
        <div className="App">
            <Navbar />
            <CatergoryCard />
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
