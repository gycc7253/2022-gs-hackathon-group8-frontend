import { React, useState } from "react";
import SearchBox from "../components/SearchBox";
import Result from "../components/Result"
import Image from 'next/image'

function HomePage() {
    return (
        // To solve image not showing
        <div className="main">
            <div className="header">
            <Image src="/images/gs.jpg" width={150} height={150}/>
            <span className="projectTitle">Integrated Engineering Search</span>
            </div>
            <SearchBox/>
            <Result/>
        </div>
    )

}

export default HomePage
