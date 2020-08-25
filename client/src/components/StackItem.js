import React from 'react'
import './StackItem.css'

function formatDecription(text = '') {
  return text.length > 200 ? text.slice(0, 100) + '...' : text
}

function getRandomColor() {
  var letters = 'BCDEF'.split('')
  var color = '#'
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * letters.length)]
  }
  return color
}

export const StackItem = (props) => {
  const { post, key: keyCount } = props
  const {
    author: { name: authorName },
    name,
    description
  } = post
  return (
    <div
      key={`key${keyCount}`}
      className="wrapper"
      style={{
        background: getRandomColor()
      }}
    >
      <div className="section title">{name}</div>
      <div className="section">{formatDecription(description)}</div>
      <div className="section author">- {authorName}</div>
    </div>
  )
}
