import { useState } from "react";
import { CloseIcon } from "../../assets/icons/close";
import { ImageIcon } from "../../assets/icons/image";
import { StyleModalAddBook } from "../../assets/styles/modal-add-book";
import { api } from "../services/api";
import { useDispatch } from "react-redux";
import { hide } from "../../redux/features/modaladd";

export function ModalAddBook() {
    const [ cover, setCover ] = useState<File | string>("")
    const [ name, setName ] = useState("")
    const [ author, setAuthor ] = useState("")
    const [ category, setCategory ] = useState("")
    const [ year, setYear ] = useState(0)
    const [ pages, setPages ] = useState(0)

    const dispatch = useDispatch()

    const showPreview = (event:any) => {
        const src = URL.createObjectURL(event.target.files[0])
        const preview = document.getElementById("image-preview") as HTMLImageElement
        
        preview.style.display = "flex"
        preview.src = src

        const text_fill = document.querySelector("#image_fill") as HTMLDivElement;
        text_fill.style.display = "none"
    }
    
    const addBook = async (e:any) => {
        e.preventDefault()

        const formData = new FormData()

        formData.append("image", cover);
        formData.append("name", name);
        formData.append("author", author);
        formData.append("year", year.toString());
        formData.append("pages", pages.toString());
        formData.append("category_id", category);

        const headers = {
            'headers': {
                'Content-type': 'multipart/form-data'
            }
        }

        await api.post("/create-book", formData, headers)
            .then(() => {
                alert("Livro Adicionado com sucesso! 😎")
            }).catch(() => {
                alert("Algo deu errado! 😵")
            })
    }
    return (
        <StyleModalAddBook>
            <div className="container-form">
                <div className="select-image">
                    <label htmlFor="file">
                        
                        <img id="image-preview"/>
                        <div id="image_fill">
                            <ImageIcon/>
                            <span>Escolher capa</span>
                        </div>
                    </label>
                    <input 
                        required
                        type="file" 
                        id="file"
                        accept="image/png,image/jpeg,image/jpg"
                        onChange={(e) => {
                            if(e.target.files instanceof FileList) {
                                setCover(e.target.files[0])
                            }

                            showPreview(e)
                        }}
                    />
                </div>
                <form>
                    <header>
                        <div className="close-btn" onClick={() => dispatch(hide())}>
                            <CloseIcon/>
                        </div>
                    </header>
                    <input 
                        type="text" 
                        placeholder="Titulo"
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                    <input 
                        type="text" 
                        placeholder="Autor"
                        onChange={(e) => setAuthor(e.target.value)}
                    />
                    <div className="divider-inputs">
                        <input 
                            type="number" 
                            placeholder="Ano"
                            onChange={(e) => setYear(parseInt(e.target.value))}
                        />
                        <input 
                            type="number" 
                            placeholder="Pages"
                            onChange={(e) => setPages(parseInt(e.target.value))}
                        />
                            
                    </div>
                    <input 
                        type="text" 
                        placeholder="Category"
                        onChange={(e) => setCategory(e.target.value)}
                        required
                    />
                    <textarea name="" id="" placeholder="Sinopse">

                    </textarea>
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