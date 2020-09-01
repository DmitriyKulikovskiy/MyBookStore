import React from "react";
import ReactPlayer from "react-player";
import './video.sass'

const Video = () => {
    const protocol = 'https' || 'http'
    return (
        <div className="container-fluid video-container">
            <div className="video-wrapper">
                <ReactPlayer
                    url={`${protocol} + //youtube.com/watch?v=qcxjMYCWJNI`}
                    width="100%"
                    height='450px'
                />
            </div>
        </div>
    );
};

export default Video;
