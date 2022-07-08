import { React, useState, setState, useRef} from "react";
import SearchBox from "../components/SearchBox";
import Image from 'next/image'
import {Box, Card} from '@mui/material'

function HomePage() {

    const valueRef = useRef('')


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
    const [data, setData] = useState(data2)

    function handleSearch() {
        // Send request and retrieve response
        window.alert(valueRef.current.value)
        const data = [
            {
               "email":"gowtham@outlook.com",
               "firstname":"gowtham",
               "lastname":"aa",
               "password":"outlook010"
            },
            {
               "email":"ss@ss.com",
               "firstname":"ss",
               "lastname":"bb",
               "password":"ss"
            },
            {
               "email":"gow@gow.com",
               "firstname":"gow",
               "lastname":"cc",
               "password":"gow"
            }
         ];
         setData(data)
         return data
        // const resp = await fetch('url', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify(valudRef.current.value),
        // })
        // return resp.json()
    }

    return (
        // To solve image not showing
        <div className="main">
            <div className="header">
            <Image src="/images/gs.jpg" width={150} height={150}/>
            <span className="projectTitle">Integrated Engineering Search</span>
            </div>
            <SearchBox handleSearch={handleSearch} forwardedRef={valueRef}/>
            <div>
                {data.map(item => 
                    <Box sx={{ minWidth: 275}}>
                        <Card variant="outlined" className="resultItem">
                            {item.lastname}
                        </Card>
                    </Box>
                )}
            </div>
        </div>
    )

}

export default HomePage
