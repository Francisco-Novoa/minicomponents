import React from "react"
import Button from "./botton"

export default function Dropdown({ id, functions }) {
    return (
        <li className="nav-item dropdown d-block">
            <a className="nav-link dropdown-toggle btn" id={id} data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Dropdown
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                {
                    functions.map((elem, i) => {
                        return (
                            <Button
                                key={i}
                                classes="dropdown-item "
                                handleClick ={(e)=>elem.callback(e)}
                                text={elem.label}
                            />
                        )
                    })
                }
            </div>
        </li>
    )
}