import React from 'react'

function Minute(props: {minute: number}) {
  return (
    <div>
      <div className='card'>
      <p>{props.minute}</p>
      </div>
      <h2>MINUTE</h2>
    </div>
  )
}

export default Minute