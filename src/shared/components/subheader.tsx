import { SearchIcon } from "../../assets/icons/search";
import { SubHeaderStyle } from "../../assets/styles/subheader";

import { useDispatch } from "react-redux";
import { findBook } from "../../redux/features/searchSlice";
import { BookWhiteIcon } from "../../assets/icons/bookwhite";

export function Subheader() {

    const dispatch = useDispatch()

    const findBy = (title:string) => {
        const titleLower = title.toLowerCase()
        dispatch(findBook(titleLower))
    }
    return (
        <SubHeaderStyle>
            <div className="breadcrumb">
                <div className="image-bread">
                    <BookWhiteIcon/>
                </div>
                <span>Livros</span>
            </div>

            <div className="input-search">
                <SearchIcon/>
                <input 
                    type="text" 
                    placeholder="Search author or name..."
                    onChange={(e) => findBy(e.target.value)}
                />
            </div>
        </SubHeaderStyle>
    )
}