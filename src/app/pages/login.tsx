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
                    Login
                </button>
            </form>
        </StyledLogin>
    )
}