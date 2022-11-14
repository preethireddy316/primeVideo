// Write your code here

import MoviesSlider from '../MoviesSlider'

import './index.css'

const PrimeVideo = props => {
  const {moviesList} = props
  const actionList = moviesList.filter(each => each.categoryId === 'ACTION')
  const comedyList = moviesList.filter(each => each.categoryId === 'COMEDY')
  return (
    <>
      <img
        src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
        alt="prime video"
      />
      <h1>Action Movies</h1>
      <MoviesSlider list={actionList} />
      <h1>Comedy Movies</h1>
      <MoviesSlider list={comedyList} />
    </>
  )
}

export default PrimeVideo
