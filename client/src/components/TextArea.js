import React from 'react'

export function TextArea({ label, value, handleChange }) {
  const saveChange = (event) => handleChange(event.target.value)
  return (
    <div className="container-group">
      <label className="container-label">
        {label === 'name' ? 'title' : label}
      </label>
      <textarea
        className="container-input long"
        value={value}
        onChange={saveChange} />
    </div>
  )
}
