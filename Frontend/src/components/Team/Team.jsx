import React from 'react';
import './team.css'

const Team = () => {
  return (
    <div className='team'>

        <div className="team-header">
            <h1>GUIDES TEAM</h1>
            <span>Our highly trained efficient guides.</span>
        </div>
        <div className="team-body">


            <div className="team-item">
                <div className="image">
                    <img src="https://res.cloudinary.com/dap91fhxh/image/upload/v1694774972/hellen2_nni3vx.jpg" alt="Our Director" className='profile'/>
                </div>
                <div className="name">
                    <h4>Hellen Asiko</h4>
                    <span>Director</span>
                </div>
            </div>
            <div className="team-item">
                <div className="image">
                    <img src="https://res.cloudinary.com/dap91fhxh/image/upload/v1694774973/nick_dcekek.jpg" alt="Our Driver" className='profile'/>
                </div>
                <div className="name">
                    <h4>Nick Wangithi</h4>
                    <span>Driver Guide</span>
                </div>
            </div>
            <div className="team-item">
                <div className="image">
                    <img src="https://res.cloudinary.com/dap91fhxh/image/upload/v1695637191/Peter_payycs.jpg" alt="Our Driver" className='profile'/>
                </div>
                <div className="name">
                    <h4>Peter King'ori</h4>
                    <span>Driver Guide(Spanish Speaking)</span>
                </div>
            </div>


            <div className="team-item">
                <div className="image">
                    <img src="https://res.cloudinary.com/dap91fhxh/image/upload/v1694774972/james_m0udid.jpg" alt="IT manager" className='profile'/>
                </div>
                <div className="name">
                    <h4>James Mwathi</h4>
                    <span>IT Manager</span>
                </div>
            </div>
        </div>


    </div>
  )
}

export default Team