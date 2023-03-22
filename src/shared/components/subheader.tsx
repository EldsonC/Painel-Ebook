import { SearchIcon } from "../../assets/icons/search";
import { SubHeaderStyle } from "../../assets/styles/subheader";

import { useDispatch } from "react-redux";
import { findBook } from "../../redux/features/searchSlice";

export function Subheader() {

    const dispatch = useDispatch()

    const findBy = (title:string) => {
        dispatch(findBook(title))
    }
    return (
        <SubHeaderStyle>
            <div className="breadcrumb">
                <div className="image-bread">

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