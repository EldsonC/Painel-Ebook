import { useState } from "react";
import { CloseIcon } from "../../assets/icons/close";
import { StyleModalAddBook } from "../../assets/styles/modal-add-book";
import { api } from "../services/api";
import { useDispatch } from "react-redux";
import { hide } from "../../redux/features/modaladdstudent";

export function ModalAddStudent() {
    const [ name, setName ] = useState("")

    const dispatch = useDispatch()
    
    const addBook = async (e:any) => {
        e.preventDefault()
    }

    return (
        <StyleModalAddBook>
            <div className="container-form">
                <div className="select-image">
                    
                </div>
                <form>
                    <input 
                        type="text" 
                        placeholder="Name"
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                    <div className="actions-form">
                        <button onClick={() => dispatch(hide())}>
                            Cancel
                        </button>
                        <button id="btn-save" onClick={addBook}>
                            Salvar
                        </button>
                    </div>
                </form>
            </div>
        </StyleModalAddBook>
    );
};