import {FiSearch} from "react-icons/fi"
import "./InputSearch.css"
export const InputSearch = ({search,setSearch}) => {
    return (
        <div className={"inputContainer"}>
            <FiSearch color={"dimgrey"} size={"20px"} id={'fisearch'}/>
            <input type="text" value={search}
                   onChange={(event )=> {setSearch(event.target.value)}}
                   placeholder={"Searching is easier"}/>
        </div>
    );
};