import { NavLink } from "react-router-dom";
import { AddBookIcon } from "../../assets/icons/addbook";
import { AddCategoryIcon } from "../../assets/icons/addcategory";
import { LogoIcon } from "../../assets/icons/logo";
import { LogoSmallIcon } from "../../assets/icons/logo-small";
import { HeaderStyle } from "../../assets/styles/header";

import { useDispatch } from "react-redux";
import { show } from "../../redux/features/modaladd";

export function Header() {

    const dispatch = useDispatch()

    return (
        <HeaderStyle>
            <div className="logo">
                <LogoSmallIcon/>
            </div>
            <nav>
                <ul>
                    <li>
                        <NavLink to={"/home"} className={({isActive}) => isActive ? "isactive-nav":"notactive-nav"}>
                            Livros
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={"/students"} className={({isActive}) => isActive ? "isactive-nav":"notactive-nav"}>
                            Alunos
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={"/history"} className={({isActive}) => isActive ? "isactive-nav":"notactive-nav"}>
                            Histórico
                        </NavLink>
                    </li>
                </ul>
            </nav>
            <div className="actions">
                <button className="btn-add" onClick={() => dispatch(show())}>
                    <AddBookIcon/>
                </button>
                <button className="btn-add">
                    <AddCategoryIcon/>
                </button>
            </div>
        </HeaderStyle>
    );
};