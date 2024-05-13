import React from 'react'

const Square = ({value,onSquareClick}) => {
  return (
    <div>
        <button onClick={onSquareClick}>{value}</button>
    </div>
  )
}

export default Square