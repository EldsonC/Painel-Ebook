import { TrashIcon } from "../../assets/icons/trash";
import { ShowStyle } from "../../assets/styles/show";
import { ModalAddBook } from "./modal-add-book";

export function Show() {
    return (
        <>
            {<ModalAddBook/>}
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
                            <td>Ano</td>
                            <td></td>
                            <td></td>
                        </thead>

                        <tbody>
                            <tr>
                                <td className="first-td">
                                    <div className="image">

                                    </div>
                                    <div className="">
                                        <h1>Atos dos apóstolos</h1>
                                        <span>Ellen G. White</span>
                                    </div>
                                </td>
                                <td>E.Profecia</td>
                                <td>2004</td>
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

                            <tr>
                                <td className="first-td">
                                    <div className="image">

                                    </div>
                                    <div className="">
                                        <h1>Atos dos apóstolos</h1>
                                        <span>Ellen G. White</span>
                                    </div>
                                </td>
                                <td>E.Profecia</td>
                                <td>2004</td>
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

                            <tr>
                                <td className="first-td">
                                    <div className="image">

                                    </div>
                                    <div className="">
                                        <h1>Atos dos apóstolos</h1>
                                        <span>Ellen G. White</span>
                                    </div>
                                </td>
                                <td>E.Profecia</td>
                                <td>2004</td>
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

                            <tr>
                                <td className="first-td">
                                    <div className="image">

                                    </div>
                                    <div className="">
                                        <h1>Atos dos apóstolos</h1>
                                        <span>Ellen G. White</span>
                                    </div>
                                </td>
                                <td>E.Profecia</td>
                                <td>2004</td>
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

                            <tr>
                                <td className="first-td">
                                    <div className="image">

                                    </div>
                                    <div className="">
                                        <h1>Atos dos apóstolos</h1>
                                        <span>Ellen G. White</span>
                                    </div>
                                </td>
                                <td>E.Profecia</td>
                                <td>2004</td>
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

                            <tr>
                                <td className="first-td">
                                    <div className="image">

                                    </div>
                                    <div className="">
                                        <h1>Atos dos apóstolos</h1>
                                        <span>Ellen G. White</span>
                                    </div>
                                </td>
                                <td>E.Profecia</td>
                                <td>2004</td>
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
                        </tbody>
                    </table>
                </div>
            </ShowStyle>
        </>
    )
}