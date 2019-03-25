import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Header extends Component {
    render() {
        return (
            <div>
                <header className="main-header">
                    {/* Logo */}
                    <NavLink to="/">
                    <div className="logo">
                        {/* mini logo for sidebar mini 50x50 pixels */}
                        <span className="logo-mini">LOGO</span>
                        {/* logo for regular state and mobile devices */}
                        <span className="logo-lg"><b>LOGO</b></span>
                    </div>
                    </NavLink>
                    {/* Header Navbar: style can be found in header.less */}
                    <nav className="navbar fixed">
                        {/* Sidebar toggle button*/}
                        <a href="/" className="sidebar-toggle" data-toggle="push-menu" role="button">
                            <span className="sr-only">Toggle navigation</span>
                        </a>
                        {/* Navbar Right Menu */}
                        <div className="navbar-custom-menu">
                            <ul className="nav navbar-nav">
                            
                            </ul>
                        </div>
                    </nav>
                </header>
            </div>
        )
    }
}
