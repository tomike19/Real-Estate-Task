import { useState } from 'react'

export const Input = (props) => {
  const { error, label, name, placeholder, ...inputProps } = props

  return (
    <div className="input-wrap d-flex flex-column">
      <label htmlFor={name} className="input-label">
        {label}
      </label>
      <input
        className="input"
        {...inputProps}
        placeholder={placeholder}
        id={name}
        name={name}
      />
      {error && (
        <p className=" input-wrap__error-size text-danger m-0">{error}</p>
      )}
    </div>
  )
}
