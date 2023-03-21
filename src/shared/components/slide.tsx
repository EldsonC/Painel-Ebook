import { SlideStyle } from "../../assets/styles/slide";

export function Slide() {
    return (
        <SlideStyle>
            <div className="slide">
                <button id="first-btn">
                    Todos
                </button>
                <button>
                    Arquivados
                </button>
            </div>
        </SlideStyle>
    )
}