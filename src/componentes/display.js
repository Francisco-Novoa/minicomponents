import React from "react"

export default function Button({ text, classes }) {
    return (
        <span className={classes} >
            {text}
        </span>
    )
}