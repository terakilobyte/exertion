import React from 'react'
const PresentationComponent = (props) => {
  return (
    <div className='presentationComponent'>
      <p>{props.content}</p>
    </div>
  )
}

export default PresentationComponent

PresentationComponent.propTypes = {
  content: React.PropTypes.string.isRequired
}
