import { SearchIcon } from "../../assets/icons/search";
import { SubHeaderStyle } from "../../assets/styles/subheader";

export function Subheader() {
    return (
        <SubHeaderStyle>
            <div className="breadcrumb">
                <div className="image-bread">

                </div>
                <span>Livros</span>
            </div>

            <div className="input-search">
                <SearchIcon/>
                <input type="text" placeholder="Search author or name..."/>
            </div>
        </SubHeaderStyle>
    )
}