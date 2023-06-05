import { Route, Routes } from "react-router-dom";
import { Login } from "../app/pages/login";
import { Header } from "../shared/components/header";
import { Show } from "../shared/components/show";
import { Slide } from "../shared/components/slide";
import { Subheader } from "../shared/components/subheader";
import { BookWhiteIcon } from "../assets/icons/bookwhite";
import { UsersIcon } from "../assets/icons/user";
import { HistoryIcon } from "../assets/icons/history";

export function Routers() {
    return (
        <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/home" element={
                <>
                    <Header/>
                    <Subheader
                        title="Livros"
                        icon={<BookWhiteIcon/>}
                    />
                    <Slide/>
                    <Show/>
                </>
            }/>

            <Route path="/students" element={
                <>
                    <Header/>
                    <Subheader
                        title="Alunos"
                        icon={<UsersIcon/>}
                    />
                </>
            }/>

            <Route path="history" element={
                <>
                    <Header/>
                    <Subheader
                        title="Histórico"
                        icon={<HistoryIcon/>}
                    />
                </>
            }/>
        </Routes>
    )
}