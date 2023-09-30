import { useState } from "react"
import styled, { ThemeProvider } from "styled-components"

export default function LabelOpt({ checked, id, tam, handleCheckboxChange }) {

    return (

        <label>
            <input
                type="checkbox"
                onChange={() => handleCheckboxChange(id)}
            />
        </label>




    )
}
