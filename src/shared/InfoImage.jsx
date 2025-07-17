import React from 'react'

const InfoImage = ({ imgSrc }) => {
  return (
    <>
      <div className="w-full h-full flex items-center justify-center bg-pink-50 rounded-lg max-h-80 border-primary">
        <img src={imgSrc} alt="info" className="max-h-full w-auto object-contain rounded-lg" />
      </div>
    </>
  )
}

export default InfoImage
