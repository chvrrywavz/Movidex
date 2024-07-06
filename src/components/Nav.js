import React from 'react';
import {AppBar} from '@mui/material';
import SearchArea from "./SearchArea";

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
                    <SearchArea/>
                </AppBar>
            </div>
        </nav>
    )
}
export default Nav;