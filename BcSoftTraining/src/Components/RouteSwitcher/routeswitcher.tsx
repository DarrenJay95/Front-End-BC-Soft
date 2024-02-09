import { Route, Routes } from "react-router-dom"
import NotFound from "../NotFound/notfound"
import Pokemon from "../Pokemon/pokemon"
import Home from "../Home/home"

const RouteSwitcher = () => {
    return (
        <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/pokemon" element={<Pokemon />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}

export default RouteSwitcher;