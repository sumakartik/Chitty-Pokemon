import React from "react"


export default function SearchBar({ handleSearchChange, handleSearchClick }) {
    return (
        <div>
            <form>
                <input
                    id="Search"
                    type="text"
                    onChange={handleSearchChange}
                ></input>
                <button onClick={handleSearchClick}>SEARCH</button>
            </form>
        </div>
    );
}