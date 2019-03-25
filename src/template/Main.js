import React, { Component } from 'react';

export default class Main extends Component {
  render() {
    return (
      <div>
        <section className="content-header">
          <div className="row">
            <div className="col-md-12">

              <div className="text-center">
                <h1>Home Page!!</h1>

              </div>
              <div>
                <p> <strong>Features:</strong>
                  <ul>
                    <li>Toggle Sidebar Navigation</li>
                    <li>Posts show the jsonplace holder data in the table format, the table is searchable, sortable, paginated. On click table row , takes to the post details page. Shows clicked row data in detail.</li>
                    <li>Contact Page : Shows a responsive contact form to submit form data and send a email. Email is sent server side using PHP. To send the email uncomment(remove //) before "const API_PATH" and " handleFormSubmit method" from <em>src/components/contact/Contact.js</em> file. </li>
                    <li>Data fetching and data submit is done using <em>axios</em>.</li>
                    <li>Data table representation is done using <em>mdbreact</em></li>
                  </ul>
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
