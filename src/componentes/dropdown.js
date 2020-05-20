import React from "react"
import Button from "./botton"

export default function Dropdown({ id, functions, name }) {
    return (
        <li className="nav-item dropdown my-2">
            <a
                id={id}
                className="nav-link dropdown-toggle btn"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false">
                <span>{name}</span>
            </a>
            <div
                className="dropdown-menu"
                aria-labelledby="navbarDropdown">
                {
                    functions.map((elem, i) => {
                        return (
                            <Button
                                key={i}
                                classes="dropdown-item "
                                handleClick={(e) => elem.callback(e)}
                                text={elem.label}
                            />
                        )
                    })
                }
            </div>
        </li>
    )
}