import React from 'react'
import '../../css/SidebarRight.css'


function SidebarRight(image, name) {
    return (
        <div className="sidebar-right">
        <div className="recent-chat">
            <div className="title">
                <h3>Recent Chat</h3>
            </div>

            <div className="chat-items">
                <div className="chat-item">
                    <a href="/">
                        <img src={image} alt=""/>
                    </a>
                    <span className="name">
                        <a href="/">{name}</a>
                    </span>
                    <span className="status-online"></span>
                </div>
            </div>
        </div>
        <div className="recent-contacts"></div>
    </div>
    )
}

export default SidebarRight;