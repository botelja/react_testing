import React, { FC } from 'react';

interface HeaderProps {}

const Header: FC<HeaderProps> = () => {

    const headerStyle = {

        width: '100%',
        padding: '2%',
        backgroundColor: "red",
        color: 'white',
        textAlign: 'center'
    }

    return(
        <header style={headerStyle}>
            <h1>React testing playground</h1>
        </header>
    )
}

export default Header;
