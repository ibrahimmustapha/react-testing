import React from 'react'

const Header = ({title}) => {
    return (
        <>
        <h2 className="header" data-testid="header-001">{title}</h2>
        </>
    )
}

export default Header