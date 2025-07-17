import React, { useEffect } from 'react'

const About = () => {
  
  useEffect(() => {
    document.title = "About - Sahajyoga Yavatmal";
  }, []);
  
  return (
    <div>
      about
    </div>
  )
}

export default About
