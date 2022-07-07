import { React, useState } from "react";
import SearchBox from "../components/SearchBox";
import Result from "../components/Result"

function HomePage() {
    return (
        // To solve image not showing
        <div className="main">
            <image src="/images/gs.jpg" width="50px" height="50px" object-fit="contain"/>
            <SearchBox/>
            <Result/>
        </div>
    )
}
  
export default HomePage