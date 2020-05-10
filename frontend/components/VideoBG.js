// REACT & NEXT
import React from 'react'

const VideoBG = ({ fade, children }) => (
  <div className="vid-box">
    <video loop="loop" muted={true} autoPlay="autoplay" poster="">
      <source src="videos/aquarium.mp4" type="video/mp4" />
    </video>
    <div className="overlay">{children}</div>
    <style jsx global>{`
      html,
      body {
        margin: 0;
        overflow: hidden;
      }
    `}</style>
    <style jsx>
      {`
        .vid-box {
          position: relative;
        }
        .vid-box video {
          height: 100vh;
          width: 100%;
          z-index: 10;
          object-fit: cover;
        }
        .vid-box .overlay {
          display: flex;
          flex: 1;
          flex-direction: column;
          background-color: rgba(0, 0, 0, calc(${fade} / 10));
          height: 100%;
          width: 100%;
          z-index: 20;
          position: absolute;
          top: 0;
          left: 0;
        }
      `}
    </style>
  </div>
)

export default VideoBG
