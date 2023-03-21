import { CloseIcon } from "../../assets/icons/close";
import { ImageIcon } from "../../assets/icons/image";
import { StyleModalAddBook } from "../../assets/styles/modal-add-book";

export function ModalAddBook() {
    return (
        <StyleModalAddBook>
            <div className="container-form">
                <div className="select-image">
                    <label htmlFor="file">
                        <ImageIcon/>
                        <span>Escolher capa</span>
                    </label>
                    <input type="file" id="file"/>
                </div>
                <form>
                    <header>
                        <div className="close-btn">
                            <CloseIcon/>
                        </div>
                    </header>
                    <input type="text" placeholder="Titulo"/>
                    <input type="text" placeholder="Autor"/>
                    <div className="divider-inputs">
                        <input type="number" placeholder="Ano"/>
                        <input type="number" placeholder="Pages"/>
                    </div>
                    <input type="text" placeholder="Category"/>
                    <textarea name="" id="" placeholder="Sinopse">

                    </textarea>
                    <div className="actions-form">
                        <button>
                            Cancel
                        </button>
                        <button id="btn-save">
                            Salvar
                        </button>
                    </div>
                </form>
            </div>
        </StyleModalAddBook>
    );
};