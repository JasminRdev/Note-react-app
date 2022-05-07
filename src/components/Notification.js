import React from 'react'

const successStyle = {
  color: 'green',
  background: 'lightgrey',
  font_size: 20,
  border_style: 'solid',
  border_radius: 5,
  padding: 10,
  margin_bottom: 10
}

const Notification = ({ message }) => {
    if (message === null) {
      return null
    }

    if (message.includes('Successfully')) {
      return (
        <div style={successStyle}>
          {message}
        </div>
      )
    }
  }

export default Notification