import React from 'react'
import './StackItem.css'

export default function AddStackItem() {
  return (
    <div
      key={`keyNew`}
      className="wrapper"
      style={{
        background: 'rgb(228 16 45)'
      }}
    >
      <div className="section">
        <form>
          <label>
            Name:
            <input type="text" name="name" />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
      <div className="section title">Add New</div>
      <div className="section"></div>
    </div>
  )
}
