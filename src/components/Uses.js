import React from 'react'
import img1 from '../images/health.jpeg'
import img2 from '../images/cat.jpeg'
import img3 from '../images/5.jpeg'
import img4 from '../images/vr.jpeg'
import img5 from '../images/3.jpeg'
import img6 from '../images/2.jpeg'
import img7 from '../images/1.jpeg'

const Uses = () => {
  return (

    <div className='cases flex flex-col justify-center items-center'>

      <h1 className='font-bold text-3xl'>Our Use Cases</h1>

      <p className='mt-4 font-semibold text-center mb-8'>Exploring AI Chatbot solutions Across Diverse Industries: Real-world Applications</p>

      <section className='uses flex justify-between items-center'>

        <div className='use flex flex-col rounded-md' id='use1'>
          <p className='inner text-white flex items-start text-left pl-4 py-6 mt-64 capitalize font-semibold rounded-b-md rounded-l-md'>governor's mission</p>
        </div>

        <div className='use flex flex-col rounded-lg' id='use2'>
          <p className='inner text-white flex items-start text-left pl-4 py-6 mt-64 capitalize font-semibold rounded-b-md rounded-l-md'>health services</p>
        </div>

      </section>

    </div>
  )
}

export {Uses}