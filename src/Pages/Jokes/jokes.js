import React from 'react';
import jokesList from './jokesList';

import { Card  } from 'antd';
import './jokes.scss';
import jokeImg from './joke_img.png';

const jokes = () => {

    const refreshPage = () =>{
        window.location.reload();
    }

    const randomNumber = (min, max) => {
        return Math.floor(Math.random() * (max - min)) + min;
    };
    const joke = jokesList[randomNumber(0,387)];
    console.log(joke);
    return (
        <div className='jokes'>
            
                <Card className='joke-card'>
                  <div className='title'>
                    <h2>Joke</h2>
                  </div>
                  <hr></hr>
                  <div className='joke-content'>
                    <p>{joke.setup}</p>
                    <br></br>
                    <p>{joke.punchline}</p>

                  </div>
                  <button className='button' onClick = {refreshPage} >Get Another Joke</button>
                </Card>
                <img className='img' src = {jokeImg} alt = ""></img>
        </div>
    )
}

export default jokes



