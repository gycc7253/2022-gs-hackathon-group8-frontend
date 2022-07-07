import {useRef} from "react"
import {Card, Box} from '@mui/material';


function Result() {
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
    const data = [
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

    return (
        <div>
            {data.map(item => 
                <Box sx={{ minWidth: 275}}>
                    <Card variant="outlined">
                        {item.lastname}
                    </Card>
                </Box>
            )}
        </div>
    )
}

export default Result