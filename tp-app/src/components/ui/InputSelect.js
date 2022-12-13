import React from 'react'

export const InputSelect = ({ label = 'label', 
    name = 'label',
    value = '', 
    items = [], 
    handleOnChange, 
    disabled = false, 
    required = false 
}) => {

    return (
        <div className="mb-3">
            <label className="form-label">{label}</label>
            <select className="form-control"
                name={name}
                required={required}
                disabled={disabled}
                value={value}
                onChange={handleOnChange}>
                <option value="">--SELECCIONAR--</option>
                {
                    items.length > 0
                    &&
                    items.map((item, index) => {
                        return <option key={item.id} value={item.id}>{item.name}</option>
                    })
                }
            </select>
        </div>
    )
}
