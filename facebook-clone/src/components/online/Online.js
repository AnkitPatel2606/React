import React from 'react'
import "./online.css"
const Online = ({user}) => {
  return (
    <div>
      <li className="rightbarFriend">
            <div className="rightbarProfileimgcontainer">
              <img src={user.profilePicture} alt="" className="rightbarProfileimg" />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">{user.username}</span>
          </li>
    </div>
  )
}

export default Online
