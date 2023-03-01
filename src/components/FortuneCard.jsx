import React from 'react'

const FortuneCard = ({fortuneData}) => {
  console.log(fortuneData)
  return (
    <div className='fortune__cards'> 
      <h3>{fortuneData.phrase}</h3>
      <p>Autor: {fortuneData.author}</p>
    </div>
  )
}

export default FortuneCard