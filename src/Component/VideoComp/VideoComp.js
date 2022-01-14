import React from 'react'
import { videoData } from '../../videos'
import './VideoComp.css'
import ReactPlayer from 'react-player'
import { Draggable } from "react-drag-reorder";

const VideoComp = () => {
    // console.log(videoData);

    const getChangedPos = (currentPos, newPos) => {
        // console.log(currentPos, newPos);
    };

    return (
        <div id='video-comp'>
            <div>
                <h1 id='heading'> Your Personal Fitness Guide </h1>
            </div>
            
            <div id='video-div'>
                <Draggable onPosChange={getChangedPos}>
                {
                    videoData.map((v, i)=> {   
                        return (<div id='single-video' key={i}>
                            <ReactPlayer url={v.url} width='100%'/> 
                            <h3> {v.description}</h3>
                            <h3> Likes : {v.likes}</h3>
                            <h3> Channel:{v.channel}</h3>
                        </div>) 
                    })
                }
                </Draggable>
                
            </div>

        </div>
    )
}

export default VideoComp
