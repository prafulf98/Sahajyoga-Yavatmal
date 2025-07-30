import React, { useEffect } from 'react'

const Events = () => {
  useEffect(() => {
    window.document.title = 'Events - Sahajyoga Yavatmal'
  }, [])
  
  return (
    <>
      <section className="p-2 md:p-4 lg:p-8 md:max-w-[1000px] my-20 mx-auto w-full border border-pink-50 shadow-2xl bg-pink-50" id={document.title}>
      </section>
    </>
  )
}

export default Events
