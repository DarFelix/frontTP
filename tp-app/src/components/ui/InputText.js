import React from 'react'

export const InputText = (
  {
    label = 'label',
    name = 'label',
    value = '',
    handleOnChange,
    type = 'text',
    required = false,
    disabled = false,
  }) => {
  
  return (
    <div className="mb-3">
      <label className="form-label">{label}</label>
      <input className="form-control"
        name={name}
        required={required}
        disabled={disabled}
        type={type}
        minLength={1}
        maxLength={100}
        value={value}
        onChange={handleOnChange} />
    </div>
  )

}