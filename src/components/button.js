import React, {useState} from 'react'

const ClickIt = () => {
    const [theme, setTheme] = useState('light')
    return (
        <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
            The Current Theme {theme}
        </button>
    )
}

export default ClickIt