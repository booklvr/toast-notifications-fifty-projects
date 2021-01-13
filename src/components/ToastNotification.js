import React, { Fragment, useState } from 'react'

const ToastNotification = () => {
  const randomMessages = [
    'Message One',
    'Message Two',
    'Message Three',
    'Message Four',
  ]

  const types = ['info', 'success', 'error']

  const [messages, setMessages] = useState([])

  const getRandomIndex = (length) => {
    return Math.floor(Math.random() * length)
  }

  const createNotification = () => {
    setMessages((messages) => [
      ...messages,
      {
        message: randomMessages[getRandomIndex(randomMessages.length)],
        type: types[getRandomIndex(types.length)],
      },
    ])

    setTimeout(() => {
      setMessages((messages) => messages.slice(1))
    }, 4000)
  }

  return (
    <Fragment>
      <div className='toasts'>
        {messages.length > 0 &&
          messages.map((message, index) => (
            <div className={`toast ${message.type}`} key={index}>
              {message.message}
            </div>
          ))}
      </div>
      <button className='btn' onClick={createNotification}>
        Show Notification
      </button>
    </Fragment>
  )
}

export default ToastNotification
