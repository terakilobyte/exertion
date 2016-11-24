import React from 'react'
import './PresentationCard.scss'

const PresentationCard = (props) => {
  return (
    <div className='presentationComponent'>
      <p>{props.content}</p>
    </div>
  )
}

export default PresentationCard

PresentationCard.propTypes = {
  content: React.PropTypes.string.isRequired
}
