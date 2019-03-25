import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
//import axios from 'axios';
//give the domain name or local host if running on a local server.
//const API_PATH = '{domain name or local host}/form_api/action.php'; //set the api path for form submit
export default class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: '',
      lname: '',
      email: '',
      message: '',
      mailSent: false,
      error: null,
      formValid: false
    }
  }
  handleFormSubmit = e => {
    //use this method to send email
    // e.preventDefault();
    // axios({
    //   method: 'post',
    //   url: `${API_PATH}`,
    //   headers: { 'content-type': 'application/json' },
    //   data: this.state
    // })
    //   .then(result => {
    //     this.setState({
    //       mailSent: result.data.sent
    //     })
    //   })
    //   .catch(error => this.setState({ error: error.message }));
    alert("First Name: "+this.state.fname+ ", Last Name: " +this.state.lname+ ", Email: " +this.state.email+ ", Message: "  +this.state.message);
    this.setState({
      mailSent: true
    });
  }

  render() {
    const form = this.state.mailSent ? (
      <h2>Thanks for Contacting Us</h2>
    ) : (
      <form action="#" >
      <label>First Name</label>
      <input type="text" id="fname" name="firstname" placeholder="Your name.."
        value={this.state.fname}
        onChange={e => this.setState({ fname: e.target.value })} 
      />
      <label>Last Name</label>
      <input type="text" id="lname" name="lastname" placeholder="Your last name.."
        value={this.state.lname}
        onChange={e => this.setState({ lname: e.target.value })} 
      />

      <label>Email</label>
      <input type="email" id="email" name="email" placeholder="Your email"
        value={this.state.email}
        onChange={e => this.setState({ email: e.target.value })} 
      />

      <label>Message</label>
      <textarea id="message" name="message" placeholder="Write something.."
        onChange={e => this.setState({ message: e.target.value })}
        value={this.state.message}
      ></textarea>
      <input type="submit" onClick={e => this.handleFormSubmit(e)} value="Submit" />
    </form>
      );
    return (
      <div>
        <section className="content-header">
          <h1>
            Contact Us
          </h1>
          <ol className="breadcrumb">
            <li><NavLink to="/"> Home </NavLink></li>
            <li className="active"> Contact Us </li>
          </ol>
        </section>
        <section className="content">
          <div className="row">
            <div className="col-md-9">
            
            {form}
            </div>
          </div>
        </section>
      </div>
    )
  }
}
