// import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className='bg-red-500'>
        <h1 className='text-gray-400 text-3xl'>Home Page!</h1>

        <div className='w-80 bg-amber-300 m-auto'>
            <h1>title</h1>
            {/* <Link className='text-blue-400' to="/viewdetail">view detail</Link> */}
            <a className='text-blue-400' href="/viewdetail">view detail</a>
        </div>
    </div>
  )
}

export default Home