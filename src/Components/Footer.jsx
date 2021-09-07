import React from 'react'
import Socials from './Socials'
// import Divider from '@material-ui/core/Divider';

export default function Footer() {
    return (
        <div className="container">
            <div className="footer">
                <Socials align="center"/>
                <h3 className="footer-text">Deployed on <i class="fab fa-github"></i></h3>
                <h3 className="footer-text">Last Updated @Aug 2021</h3>
            </div>
        </div>
    )
}
