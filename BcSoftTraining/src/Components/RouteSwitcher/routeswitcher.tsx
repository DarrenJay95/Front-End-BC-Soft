import { Route, Routes } from "react-router-dom"
import NotFound from "../NotFound/notfound"
import Pokedex from "../Pokedex/pokedex"
import Home from "../Home/home"

const RouteSwitcher = () => {
    return (
        <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/pokedex" element={<Pokedex />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}

export default RouteSwitcher;