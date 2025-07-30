import React, { useEffect } from 'react'

const Events = () => {
  useEffect(() => {
    window.document.title = 'Events - Sahajyoga Yavatmal'
  }, [])

  return (
    <>
      <div id={document.title}>
      </div>
    </>
  )
}

export default Events
