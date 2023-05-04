import React from 'react'
import { Link } from 'react-router-dom'

function Landingscreen() {
    return (
        <div className='row landing justify-content-center'>
            <div className='col-md-9 my-auto text-center' style={{borderRight: '8px solid white'}}>
                <h2 style={{color:'white', fontSize:'110px'}}>Solo Resort</h2>
                <h1 style={{color:'white'}}>"There is only one boss.The Guest."</h1>

                <Link to='/home'>
                    <button className='btn landingbtn' style={{color:'black' , backgroundColor:'white'}}>Get Started</button>
                    </Link>
            </div>
        </div>
    )
}

export default Landingscreen
