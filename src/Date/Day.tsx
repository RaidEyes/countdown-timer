import React from 'react'

function Day(props: {day: number}) {
  return (
    <div>
      <div className='card'>
      <p>{props.day}</p>
      </div>
    <h2 className="text-[0.5rem] tracking-[0.25rem] pt-4">DAYS</h2>
    </div>
  )
}

export default Day