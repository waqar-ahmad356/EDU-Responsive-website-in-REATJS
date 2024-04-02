import React, { useRef } from 'react'
import './VideoPlayer.css';
import video from '../../assets/video.mp4';

const VideoPlayer = ({playstate,setPlayState}) => {

    const player=useRef(null)

    const closeplayer=(e)=>{
        if(e.target===player.current){
            setPlayState(false)
        }
    }

  return (
    <div ref={player} className={`video-player ${playstate?'':'hide'}`} onClick={closeplayer}>
    <video src={video} autoPlay muted controls></video>
      
    </div>
  )
}

export default VideoPlayer
