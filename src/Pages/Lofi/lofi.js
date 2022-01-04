/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react'
import { useState} from 'react'
import './lofi.scss'

const lofi = () => {

    const [video , setVideo] = useState()

    const base_url="http://www.youtube.com/embed/"
     
    async function fetchData(key, query) {
        const response = await fetch('https://www.googleapis.com/youtube/v3/search?key=' + key + '&type=video&part=snippet&maxResults=1&q=' + query)

        const data = await response.json()
        console.log(data)
        setVideo(base_url + data.items[0].id.videoId)
        }
        fetchData()
        
    return (
        <div className="lofi">
            <div className="form">
            <input type="text" id="search" placeholder="Search for a video" />
            <button id="search-button" onClick={()=>fetchData('', document.getElementById('search').value)}>Search</button> 
            </div>
            { <div id="results" className='iframeVideo'>
                <iframe id='video' title='video' width="860" height="450" src={video}  ></iframe>
            </div> }
        </div>
    )
}

export default lofi
