import React from 'react'

function ChatItem(imageSp, name) {
    return (
        <div className='chat-item'>
            <a href="/">
                <img src={imageSp} alt="" />
            </a>
            <span className='name'>
                <a href="/">{name}</a>
            </span>
            <span className='status-online'></span>
        </div>
  )
}

export default ChatItem;