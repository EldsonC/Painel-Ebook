import { NavLink } from "react-router-dom";
import { LogoIcon } from "../../assets/icons/logo";
import { StyledLogin } from "../../assets/styles/login";

export function Login() {
    return (
        <StyledLogin>
            <LogoIcon
                sizeW={161}
                sizeH={61}
            />
            <form>
                <input type="text" placeholder="Username"/>
                <input type="password" placeholder="Password"/>
                    <button>
                        <NavLink to={"/home"}>
                            Login
                        </NavLink>
                    </button>
            </form>
        </StyledLogin>
    )
}