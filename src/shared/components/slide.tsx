import { SlideStyle } from "../../assets/styles/slide";
import { useSelector } from "react-redux";
import { bookTotal } from "../../redux/features/totalbooks";

export function Slide() {
    const totalBooks = useSelector(bookTotal)

    return (
        <SlideStyle>
            <div className="slide">
                <div className="container-actions">
                    <button id="first-btn">
                        Todos
                    </button>
                    <button>
                        Arquivados
                    </button>
                </div>

                <div className="total-books">
                    <span>{totalBooks} livros</span>
                </div>
            </div>
        </SlideStyle>
    )
}