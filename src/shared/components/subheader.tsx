import { SearchIcon } from "../../assets/icons/search";
import { SubHeaderStyle } from "../../assets/styles/subheader";

import { useDispatch } from "react-redux";
import { findBook } from "../../redux/features/searchSlice";
import { BookWhiteIcon } from "../../assets/icons/bookwhite";

interface SubHeaderProps {
    title?: string;
    icon?: React.ReactElement
}

export function Subheader({ title, icon }:SubHeaderProps) {

    const dispatch = useDispatch()

    const findBy = (title:string) => {
        const titleLower = title.toLowerCase()
        dispatch(findBook(titleLower))
    }
    return (
        <SubHeaderStyle>
            <div className="breadcrumb">
                <div className="image-bread">
                    { icon }
                </div>
                <span>{title}</span>
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