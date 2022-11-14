// Write your code here
/* eslint-disable react/no-unknown-property */
/* eslint-disable jsx-a11y/control-has-associated-label */
import Popup from 'reactjs-popup'

import 'reactjs-popup/dist/index.css'

import './index.css'

import ReactPlayer from 'react-player'

import {IoMdClose} from 'react-icons/io'

const MovieItem = props => {
  const {movieDetails} = props
  const {thumbnailUrl, videoUrl} = movieDetails
  return (
    <div className="popup-container">
      <Popup
        modal
        trigger={
          <button className="trigger-button" type="button">
            <img src={thumbnailUrl} alt="thumbnail" />
          </button>
        }
        position="center"
        className="popup-content"
      >
        {close => (
          <div className="responsive-container">
            <button type="button" testid="closeButton" onClick={() => close()}>
              <IoMdClose />
            </button>
            <div>
              <ReactPlayer url={videoUrl} controls />
            </div>
          </div>
        )}
      </Popup>
    </div>
  )
}

export default MovieItem
