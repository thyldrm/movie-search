import { useState, useEffect } from 'react'
import { getMovie } from '../api/movieApi';

function Searchbar({ setMovies }) {

    const [keyword, setKeyword] = useState("");

    useEffect(() => {
        const timeOutId = setTimeout(() => loadMovies(), 300);
        return () => clearTimeout(timeOutId);
    }, [keyword]);

    const onChangeInput = (e) => {
        if(e.target.value.length>=3){
            setKeyword(turkishToEnglish(e.target.value))
        }
    }

    const turkishToEnglish = (value) => {
        const result = value.replace(/Ğ/gim, "g")
            .replace(/Ü/gim, "u")
            .replace(/Ş/gim, "s")
            .replace(/I/gim, "i")
            .replace(/İ/gim, "i")
            .replace(/Ö/gim, "o")
            .replace(/Ç/gim, "c")
            .replace(/ğ/gim, "g")
            .replace(/ü/gim, "u")
            .replace(/ş/gim, "s")
            .replace(/ı/gim, "i")
            .replace(/ö/gim, "o")
            .replace(/ç/gim, "c");
        return result;
    };

    const loadMovies = async () => {
        const result = await getMovie(keyword);
        setMovies(result.data)
    }

    return (
        <div className="container">
            <h2 className="app pt-3">Movie Search Site</h2>
            <div className="input-group p-5">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Search movies..."
                    aria-label=""
                    aria-describedby="basic-addon1"
                    onChange={onChangeInput}
                />
            </div>
        </div>
    )
}

export default Searchbar
