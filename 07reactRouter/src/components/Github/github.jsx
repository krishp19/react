/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";

function Github() {
    const [data, setData] = useState([])
    const [repo, setRepo] = useState([])
    useEffect(() => {
        fetch('https://api.github.com/users/krishp19')
        .then(response=> response.json())
        .then(data => {
            console.log(data);
            setData(data)
            
        })
    }, [])
    useEffect(() => {
        fetch('https://api.github.com/users/krishp19/repos')
        .then(response=> response.json())
        .then(repo => {
            console.log(repo);
            setRepo(repo)
            
        })
    },[])
    return(
        <>
            <div className="text-center m-4 bg-gray-500 text-white p-4 text-3xl">Github followers: {data.followers} </div>
            <div className="text-center m-4 bg-gray-800 text-white p-4 text-3xl">Total Repos: {data.public_repos}</div>
            <div className="text-center m-4 bg-gray-800 text-white p-4 text-3xl">Clone URL: {repo.clone_url}</div>
            <img src={data.avatar_url} alt="Git Picture" width={300} />
        </>
    )
}

export default Github