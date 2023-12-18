import React from 'react'

function Hour(props: {hour: number}) {
  return (
    <div>
      <div className='card'>

      <p>{props.hour}</p>
      </div>
      <h2>HOUR</h2>
      </div>
  )
}

export default Hour