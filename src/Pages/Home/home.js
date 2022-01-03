import React from 'react'
import Lottie from 'react-lottie';
import animationData from '../../Lotties/time-relax.json';
import './home.scss';


const home = () => {

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          // preserveAspectRatio: "xMidYMid slice"
        }};
    return (
        <div className='home'>
            <div className='container1'>
                <div className="container1-text">
                    <h1>Take Break</h1>
                    <p>A platform to relax and to <strong>take a break</strong>. <br/> 
                    Stressed by work? On the verge of burnout? <br/> 
                    Dont worry, we got you covered. <br/>
                    Explore various activities to relieve stress and take a break.</p>
                </div>
                <div className='container1-lottie'>
                    <Lottie options={defaultOptions} height={600} width={600} />
                </div>
            </div>
        </div>
    )
}

export default home
