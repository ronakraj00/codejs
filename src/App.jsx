import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import "./css/App.css";
import CardList from "./component/CardList.jsx";
import Navbar from "./component/Navbar.jsx";
import Home from "./component/Home.jsx";
import About from "./component/About.jsx";
import Services from "./component/Services.jsx";
import Contacts from "./component/Contacts.jsx";


function App() {
    // console.log(places);
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<CardList />}></Route>
                <Route path="/about" element={<About />}></Route>
                <Route path="/services" element={<Services />}></Route>
                <Route path="/contact" element={<Contacts />}></Route>
            </Routes>
        </BrowserRouter>

    );
}

export default App;
