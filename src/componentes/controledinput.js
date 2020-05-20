import React from "react"

export default function ControledInput({ value, handleChange, placeholder }) {
    return (
        <input
            type="text"
            onChange={(e) => { handleChange(e.target.value) }}
            placeholder={placeholder}
            value={value}
            className="form-control"
        />
    )
}