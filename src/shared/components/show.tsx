import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { BookIcon } from "../../assets/icons/book";
import { TrashIcon } from "../../assets/icons/trash";
import { WorldIcon } from "../../assets/icons/world";
import { ShowStyle } from "../../assets/styles/show";
import { bookFound } from "../../redux/features/searchSlice";
import { api } from "../services/api";
import { ModalAddBook } from "./modal-add-book";


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

    const bookFilter = books.filter((book:BookProps) => book.name?.includes(
        bookFind.toLocaleLowerCase())
    )
    return (
        <>
            <ShowStyle>
                <div className="modal">
                    {<ModalAddBook/>}
                </div>
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
                            <td>Ano</td>
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
                                                    dataBook.category_id === "Enciclopédia" ? World() : Book()
                                                }
                                                {/* <img src={dataBook.cover}/> */}
                                            </div>
                                            <div>
                                                <h1>{dataBook.name}</h1>
                                                <span>{dataBook.author}</span>
                                            </div>
                                        </td>
                                        <td>{dataBook.category_id}</td>
                                        <td>{dataBook.year}</td>
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