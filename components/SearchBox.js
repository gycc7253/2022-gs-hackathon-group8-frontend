import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton"
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';



function SearchBox({handleSearch, forwardedRef}) {

    // function handleSearch() {
    //     // Send request and retrieve response
    //     window.alert(valueRef.current.value)
    //     // const resp = await fetch('url', {
    //     //     method: 'POST',
    //     //     headers: {
    //     //         'Content-Type': 'application/json'
    //     //     },
    //     //     body: JSON.stringify(valudRef.current.value),
    //     // })
    //     // return resp.json()
    // }

    return (
        <div className="search">
            <form>
                <TextField
                id="outlined-basic"
                variant="outlined"
                fullWidth
                label="Search"
                inputRef={forwardedRef}
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