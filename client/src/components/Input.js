import React from 'react'

export function Input({ label, value, handleChange }) {
  const saveChange = (event) => handleChange(event.target.value)
  return (
    <div className="container-group">
      <label className="container-label">{label}</label>
      <input
        type="text"
        className="container-input"
        value={value}
        onChange={saveChange}
      />
    </div>
  )
}
