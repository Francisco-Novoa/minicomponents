import React, { useState } from 'react'
import Button from './botton'
import Dropdown from './dropdown'
import ControledInput from './controledinput'



export default function Navbar() {
    const [local, setLocal] = useState("")
    const handleClick = () => {
        console.log("a")
    }

    const funcion1 = () => {
        console.log("b")
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">Navbar</a>
            <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div
                className="collapse navbar-collapse "
                id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto d-flex justify-content-center ">
                    <li className="nav-item active">
                        <Button
                            text="boton1"
                            classes=""
                            handleClick={handleClick}
                        />
                    </li>
                    <li className="nav-item">
                        <Button
                            text="boton2"
                            classes=""
                            handleClick={handleClick}
                        />
                    </li>
                    <li className="nav-item">
                        <Button
                            text="boton3"
                            classes=""
                            handleClick={handleClick}
                        />
                    </li>
                    <Dropdown
                        id={"dropdown1"}
                        functions={
                            [
                                {
                                    "label": "label1",
                                    "callback": funcion1
                                }
                                ,
                                {
                                    "label": "label2",
                                    "callback": funcion1
                                }
                                ,
                                {
                                    "label": "label3",
                                    "callback": funcion1
                                }
                            ]
                        }
                    />

                </ul>
                <ControledInput
                    value={local}
                    handleChange={setLocal}
                    placeholder="" />
            </div>

        </nav>
    )
}

