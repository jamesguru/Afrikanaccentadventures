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
                    <img src="https://cdn.pixabay.com/photo/2018/07/11/23/01/black-man-3532185_960_720.jpg" alt="" className='profile'/>
                </div>
                <div className="name">
                    <h4>Jason Stratham</h4>
                    <span>Tourism expert</span>
                </div>
            </div>
            <div className="team-item">
                <div className="image">
                    <img src="https://cdn.pixabay.com/photo/2017/02/16/23/10/smile-2072907__340.jpg" alt="" className='profile'/>
                </div>
                <div className="name">
                    <h4>Cleona Tropez</h4>
                    <span>Adventure Guru</span>
                </div>
            </div>

            <div className="team-item">
                <div className="image">
                    <img src="https://cdn.pixabay.com/photo/2019/12/16/14/46/black-man-4699506__340.jpg" alt="" className='profile'/>
                </div>
                <div className="name">
                    <h4>Martin Blake</h4>
                    <span>Trekking guide</span>
                </div>
            </div>
        </div>


    </div>
  )
}

export default Team