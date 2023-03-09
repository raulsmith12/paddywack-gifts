const SearchBox = ({ searchChange }) => {
    return (
        <div className="mb-3 input-group">
            <span className="input-group-text" id="basic-addon3">&#128270;</span>
            <input
                className="form-control"
                type="search"
                onChange={(e) => {searchChange(e.target.value.toLocaleLowerCase())}}
            />
        </div>
    )
}

export default SearchBox;