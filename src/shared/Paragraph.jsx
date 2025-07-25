import React from 'react'

const Paragraph = ({ paragraphItem, customStyle }) => {
  return (
    <>
      <p className={`${customStyle} text-justify text-sm font-normal mb-3 text-gray-500 w-fit pt-3`}>
        {paragraphItem}
      </p>
    </>
  )
}

export default Paragraph
