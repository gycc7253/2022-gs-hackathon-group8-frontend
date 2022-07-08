import {useRef, useState, setState} from "react"
import {Card, Box} from '@mui/material';


function Result(data) {
    // const data = '{"employees":[\
    //     {"name":"Ram", "email":"ram@gmail.com", "age":23},\
    //     {"name":"Shyam", "email":"shyam23@gmail.com", "age":28},\
    //     {"name":"John", "email":"john@gmail.com", "age":33},\
    //     {"name":"Bob", "email":"bob32@gmail.com", "age":41}\
    //     ],\
    //     "days":[\
    //         "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"\
    //     ]\
    // }'
    // var myObject = JSON.parse(data)

    const data2 = [
        {
           "email":"gowtham@outlook.com",
           "firstname":"gowtham",
           "lastname":"ss",
           "password":"outlook010"
        },
        {
           "email":"ss@ss.com",
           "firstname":"ss",
           "lastname":"ss",
           "password":"ss"
        },
        {
           "email":"gow@gow.com",
           "firstname":"gow",
           "lastname":"gow",
           "password":"gow"
        }
     ];
     if (data == null) {
        this.setState({data: data2})
     } else {
        this.setState({data: data})
     }

    return (
        <div>
            {this.useState("data").map(item => 
                <Box sx={{ minWidth: 275}}>
                    <Card variant="outlined" className="resultItem">
                        {item.lastname}
                    </Card>
                </Box>
            )}
        </div>
    )
}

export default Result