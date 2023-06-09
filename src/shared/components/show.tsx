import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { BookIcon } from "../../assets/icons/book";
import { TrashIcon } from "../../assets/icons/trash";
import { WorldIcon } from "../../assets/icons/world";
import { ShowStyle } from "../../assets/styles/show";
import { bookFound } from "../../redux/features/searchSlice";
import { api } from "../services/api";
import { ModalAddBook } from "./modal-add-book";

import { stateModal } from "../../redux/features/modaladd";
import { stateModal as stateModalStudent } from "../../redux/features/modaladdstudent";
import { useDispatch } from "react-redux";
import {totalbook} from "../../redux/features/totalbooks";
import { ModalAddStudent } from "./modal-add-student";

interface BookProps {
    cover: string;
    name: string;
    author: string;
    year: number;
    pages: number;
    category_id: string;
}

export function Show() {
    const [books , setBooks] = useState([])
    const bookFind = useSelector(bookFound)
    const modalState = useSelector(stateModal)
    const modaladdstudent = useSelector(stateModalStudent)

    const dispatch = useDispatch()

    const getTotalbooks = (total:number) => {
        dispatch(totalbook(total))
    }

    getTotalbooks(books.length)

    useEffect(() => {
        api.get("/get-books").then((result) => {
            console.log(result.data)
            setBooks(result.data)
            
        })
    }, [])

    const World = () => {
        return <WorldIcon/>
    }

    const Book = () => {
        return <BookIcon/>
    }

    const bookFilter = books.filter((book:BookProps) => book.name.toLowerCase().includes(
        bookFind.toLowerCase())
    )
    return (
        <>
            { modalState ? <ModalAddBook/> : ""}
            { modaladdstudent ? <ModalAddStudent/> : ""}
            <ShowStyle>
                <div className="text-data">
                    <h1>Biblioteca</h1>
                    <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </p>
                    <div className="actions-btn">
                        <button>
                            Editar
                        </button>
                        <button id="btn-arq">
                            Arquivar
                        </button>
                    </div>
                </div>
                <div className="books">
                    <table>
                        <thead>
                            <td>Imagen</td>
                            <td>categoria</td>
                            <td className="none">Ano</td>
                            <td></td>
                            <td></td>
                        </thead>

                        <tbody>
                            {bookFilter.map((dataBook:BookProps) => {
                                return (

                                    <tr>
                                        <td className="first-td">
                                            <div className="image">
                                                {
                                                    dataBook.category_id === "Enciclopédia" || dataBook.category_id === "enciclopédia" ? World() : Book()
                                                }
                                            </div>
                                            <div>
                                                <h1>{dataBook.name}</h1>
                                                <span>{dataBook.author}</span>
                                            </div>
                                        </td>
                                        <td>{dataBook.category_id}</td>
                                        <td className="none">{dataBook.year}</td>
                                        <td>
                                            <div className="container-actions">
                                                <button className="get-book">
                                                    Emprestar
                                                </button>
                                                <button>
                                                    <TrashIcon/>
                                                </button>
                                            </div>
                                        </td>
                                        
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </ShowStyle>
        </>
    )
}