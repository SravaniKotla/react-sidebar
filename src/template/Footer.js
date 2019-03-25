import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    const date = new Date().getFullYear();

    return (
      <div>
        <footer className="main-footer">
          <div className="pull-right hidden-xs">
            <b>Dashboard Template {date}</b>
          </div>
        </footer>
      </div>
    )
  }
}
