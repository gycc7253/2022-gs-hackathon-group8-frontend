import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton"
import Box from "@mui/material/Box"
import {useRef} from "react"
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';



function SearchBox() {
    const valueRef = useRef('')

    function handleSearch() {
        // Send request and retrieve response
        window.alert(valueRef.current.value)
        return '{"name":"John", "age":30, "city":"New York"}'
    }

    return (
        <div className="search">
            <form>
                <TextField
                id="outlined-basic"
                variant="outlined"
                fullWidth
                label="Search"
                inputRef={valueRef}
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                            <IconButton color="primary" onClick={handleSearch}>
                                <SearchIcon/>
                            </IconButton>
                        </InputAdornment>
                        ),
                }}
                />
                <IconButton 
                    type="submit" 
                    onClick={handleSearch}/>
            </form>
        </div>
    )
}

export default SearchBox