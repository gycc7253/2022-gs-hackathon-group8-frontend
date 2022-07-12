import { React, useState, setState, useRef, Component, createRef} from "react";
import SearchBox from "../components/SearchBox";
import Image from 'next/image'
import {Paper, TableContainer, Table, TableRow, TableHead, TableCell, TableBody} from '@mui/material'
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton"
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {list: [], textFieldValue: ''};
        this.handleSearch = this.handleSearch.bind(this)
        this.handleTextFieldChange = this.handleTextFieldChange.bind(this)
    }

    handleTextFieldChange(event) {
        this.setState({
            textFieldValue: event.target.value
        });
    }


    handleSearch() {
        const url = 'https://qv5krif365.execute-api.ap-southeast-1.amazonaws.com/dev/search-query-tagger-lambda'

        console.log("fetching")
        fetch(url, {
            method: "POST",
            body: JSON.stringify({'question': this.state.textFieldValue})
        }).then(response => {
            console.log(response.status)
            if(response.ok){
              const data = response.json()
              return data
            }else{
              alert("something is wrong")
            }
          }).then(newResults => {
            var d = [];
            var keys = Object.keys(newResults)
            keys.forEach(function(key){
                d.push(newResults[key])
            })
            this.setState({list: d})
            console.log(typeof this.state.list)
          })

    }
    

    render() {
        return (
            <div className="main">
                <div className="header">
                <Image src="/images/gs.jpg" width={150} height={150}/>
                <span className="projectTitle">Relational Intelligent Graph-based Search</span>
                </div>
                <div className="search">
                    <form>
                        <TextField
                        id="outlined-basic"
                        variant="outlined"
                        fullWidth
                        label="Search"
                        onChange={this.handleTextFieldChange}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton color="primary" onClick={this.handleSearch}>
                                        <SearchIcon/>
                                    </IconButton>
                                </InputAdornment>
                                ),
                        }}
                        />
                        <IconButton 
                            type="submit" 
                            onClick={this.handleSearch}/>
                    </form>
                </div>
                <div>
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 850 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="center"> Id</TableCell>
                                <TableCell align="center"> Title</TableCell>
                                <TableCell align="center"> Page Url</TableCell>
                                <TableCell align="center"> Source</TableCell>
                                <TableCell align="center"> author</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {this.state.list.map(item => 
                                <TableRow>
                                    <TableCell>
                                        {item.id}
                                    </TableCell>
                                    <TableCell>
                                        {item.title}
                                    </TableCell>
                                    <TableCell>
                                        {item.pageUrl}
                                    </TableCell>
                                    <TableCell>
                                        {item.source}
                                    </TableCell>
                                    <TableCell>
                                        {item.author}
                                    </TableCell>
                                </TableRow>)}
                        </TableBody>
                        </Table>
                    </TableContainer>
                </div>
            </div>
        )
    }

}

export default HomePage
