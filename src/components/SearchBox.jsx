import {InputSearch} from "./InputSearch.jsx";
import {useEffect, useState} from "react";
import {SearchResult} from "./SearchResult.jsx";

export function SearchBox() {
    const [search, setSearch] = useState("");
    const [result,setResult] = useState([]);
    useEffect(() => {
        if (search.length >= 2) {
            const data = fetch("https://dummyjson.com/products");
            data.then(result => result.json()).then(console.log);
        }
    }, [search]);

    return (
        <div>
            <InputSearch search={search} setSearch={setSearch}/>
            <SearchResult/>
        </div>
    );
}