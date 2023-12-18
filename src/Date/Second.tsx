import React from 'react'

function Second(props: {second: number}) {
  return (
    <div>
      <div className='card'>

      <p>{props.second}</p>
      </div>
      <h2>SECOND</h2>
    </div>
  )
}

export default Second