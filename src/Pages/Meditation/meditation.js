/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react'
import { useState} from 'react'
import { useEffect } from 'react';

const meditation = () => {

    const [video , setVideo] = useState()

    //const [num , setNum] =useState(0)

    const base_url="http://www.youtube.com/embed/"

    const randomNumber = (min, max) => {
        return Math.floor(Math.random() * (max - min)) + min;
    };

    useEffect (() => {
    async function fetchData(key='', query="meditation") {
        
        const response = await fetch('https://www.googleapis.com/youtube/v3/search?key=' + key  + '&type=video&part=snippet&maxResults=5&q=' + query)

        const data = await response.json()
        console.log(data)
        // randomNumber(0,100)
        //setNum(randomNumber(0,100))
        setVideo(base_url + data.items[randomNumber(0,5)].id.videoId)
        }
        fetchData()
    }, [randomNumber])
        
    return (
        <div className="lofi">
            {/* <div className="form">
            <input type="text" id="search" placeholder="Search for a video" />
            <button id="search-button" onClick={()=>fetchData('AIzaSyDPUDL2TjZDZLfrubqV8TGtIFigsXlEwD8', document.getElementById('search').value)}>Search</button>
            </div> */}
            { <div id="results" className='iframeVideo'>
                <iframe id='video' title='video' width="860" height="450" src={video}  ></iframe>
            </div> }
        </div>
    )
}

export default meditation

