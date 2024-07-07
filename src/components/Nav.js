import React from 'react';
import {AppBar} from '@mui/material';

const Nav = () => {
    return (
        <nav>
            <div className="nav-wrapper container">
                <AppBar>
                     <figure>
                        <img
                            src="/assets/logo/movidexLogo.png"
                            width="100px"
                            height="100px"
                        />
                    </figure>
                </AppBar>
            </div>
        </nav>
    )
}
export default Nav;