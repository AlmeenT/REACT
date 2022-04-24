import React from 'react'
import Box from './Box/Box'
import './Home.css'



function Home() {
  let component = HOME-PAGE
  return (
    <div>
        <h1>
            THIS IS THE {component}
        </h1>
        <div className='Reuse'>
          <Box />
          <Box />
          <Box />
        </div>
    </div>
  )
}

export default Home