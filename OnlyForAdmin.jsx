import React, { useEffect } from 'react'
import { getRole } from './dataProvide'

export default function OnlyForAdmin({ children }) {
    console.log(children)

    let item = Array.isArray(children) ? children[0] : children 

    return (
        <>
            {(getRole() == "Admin") && item}
        </>
    )
}