import React from 'react'
import Lottie from 'react-lottie';
import animationData from '../../Lotties/time-relax.json';
import animationData1 from '../../Lotties/camping.json';
import animationData2 from '../../Lotties/reading-book.json';
import './home.scss';


const home = () => {

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          // preserveAspectRatio: "xMidYMid slice"
        }};

        const defaultOptions1 = {
            loop: true,
            autoplay: true,
            animationData: animationData1,
            rendererSettings: {
              // preserveAspectRatio: "xMidYMid slice"
            }};
            
        const defaultOptions2 = {
                loop: true,
                autoplay: true,
                animationData: animationData2,
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
            <div className="how-it-works">
                    <h2>How it works</h2>
            </div>
            <div className="container2">
                <div className="container2-lottie">
                    <Lottie options={defaultOptions1} height={600} width={600} />
                </div>
                <div className="container2-text">
                <p>Worked for long hours? <br/>
                    Took a break? <br/>
                    But you are clueless about what to do? <br/>
                    Navigate to activities pages and find a random activity to do.<br/></p>
                </div> 
            </div>
            <div className="container3">
                <div className="container3-text">
                    <p>Oh!! So you like to read books in your break time??<br/>
                        Well, we have a book section for you. <br/>
                        Just click on the book section and find a random book to read. <br/>
                        Grab a cup of coffee and read the recommended book. <br/>
                    </p>
                </div>
                <div className="container3-lottie">
                    <Lottie options={defaultOptions2} height={600} width={600} />
                </div>
            </div>
        </div>
    )
}

export default home
