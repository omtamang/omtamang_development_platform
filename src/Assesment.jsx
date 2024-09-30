import { Route, Routes, BrowserRouter } from "react-router-dom";
import Header from "./header/Header";
import Newmember from "./Add member/Newmember";


export default function Assesment() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Header/>}/>
                    <Route path="/add" element={<Newmember/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    )
}