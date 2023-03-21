import { Route, Routes } from "react-router-dom";
import { Login } from "../app/pages/login";
import { Header } from "../shared/components/header";
import { Show } from "../shared/components/show";
import { Slide } from "../shared/components/slide";
import { Subheader } from "../shared/components/subheader";

export function Routers() {
    return (
        <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/home" element={
                <>
                    <Header/>
                    <Subheader/>
                    <Slide/>
                    <Show/>
                </>
            }/>
        </Routes>
    )
}