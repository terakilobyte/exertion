import React from 'react'
import './PresentationCard.scss'

const PresentationCard = (props) => {
  const icon = props.faClass && <i className={props.faClass} aria-hidden='true' />
  return (
    <div className='presentationComponent'>
      <p>{props.content}&nbsp;{icon}</p>
    </div>
  )
}

export default PresentationCard

PresentationCard.propTypes = {
  content: React.PropTypes.string.isRequired,
  faClass: React.PropTypes.string
}
