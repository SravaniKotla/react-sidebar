import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class SideBar extends Component {
  render() {
    return (
      <div>
        <aside className="main-sidebar">
          <section className="sidebar">
            <ul className="sidebar-menu" data-widget="tree">
              <li className="header text-center">DASHBOARD</li>
                           
              <NavLink to="/posts">
                <li className="treeview">
                  <i className="fas fa-table"></i>
                  <span> Posts</span>
                  <span className="pull-right-container">
                  </span>
                </li>
              </NavLink>
              <NavLink to="/contact">
                <li className="treeview">
                  <i className="fas fa-envelope"></i>
                  <span> Contact Us</span>
                  <span className="pull-right-container">
                  </span>
                </li>
              </NavLink>
            </ul>
          </section>
        </aside>
      </div>
    )
  }
}
