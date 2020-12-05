import React from 'react'
import { FaMoon, FaRegMoon } from "react-icons/fa"
import { colors } from './colors'

interface Props {
    mode: string;
    setMode: () => void;
}

export default function Topbar({ mode , setMode }: Props) {
    const icon = mode === "light" ? <FaRegMoon /> : <FaMoon />
    return (
        <header
            style={{
                backgroundColor: mode === "light" ?
                    colors.white
                    :
                    colors.dark_mode_element,
                color : mode === "light" ?
                    colors.light_mode_text
                    :
                    colors.white
            }}
            className="shadow-box"
        >
            <div id="nav">
                <h1>Where in the world ?</h1>
                <div onClick={setMode} id="edit-mode">
                    <h1>{icon} Dark Mode</h1>
                </div>
            </div>
        </header>
    )
}
