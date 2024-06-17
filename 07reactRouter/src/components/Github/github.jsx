/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";

function Github() {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('https://api.github.com/users/krishp19')
        .then(response=> response.json())
        .then(data => {
            console.log(data);
            setData(data)
        })
    }, [])
    return(
        <><div className="text-center m-4 bg-gray-500 text-white-500 p-4 text-3xl">Github followers: {data.followers} </div>
        <img src={data.avatar_url} alt="Git Picture" width={300} />
        </>
    )
}

export default Github