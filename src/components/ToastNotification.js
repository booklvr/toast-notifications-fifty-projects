import React, { Fragment, useState } from 'react'

const ToastNotification = () => {
  const randomMessages = [
    'Message One',
    'Message Two',
    'Message Three',
    'Message Four',
  ]

  // const [messageIndex, setMessageIndex] = useState(-1)
  // const [typeIndex, setTypeIndex] = useState(-1)
  const [messages, setMessages] = useState([])

  const types = ['info', 'success', 'error']

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

    console.log(messages)

    setTimeout(() => {
      console.log('remove message')
      setMessages((messages) => messages.slice(1))

      console.log(messages)
    }, 4000)
  }

  return (
    <Fragment>
      <div className='toasts'>
        {messages.length &&
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
