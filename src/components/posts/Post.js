import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import { MDBDataTable } from 'mdbreact';

const $ = window.$;

export default class Post extends Component {
  //constructor method to declare the state.
  constructor() {
    super()
    this.state = {
      columns: [],
      rows: []
    }
  }
  //life cycle methods, to fetch data using axios from an API
  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/posts').then(res => {
      this.setState({
        columns: [
          {
            label: 'User',
            field: 'userId',
            sort: 'asc',
            width: 300
          },
          {
            label: 'ID',
            field: 'id',
            sort: 'asc',
            width: 2000
          },
          {
            label: 'Title',
            field: 'title',
            sort: 'asc',
            width: 2000
          },
          {
            label: 'Body',
            field: 'body',
            sort: 'asc',
            width: 2000
          }],
        rows: res.data
      })

    });
   
  }
  //Display the fetched data in render method
  render() {
    $(document).ready(function () {
      $("table tbody tr").click(function () {
        var tableData = $(this).children("td").map(function () {
          return $(this).text();
        }).get();
        window.location.hash = 'posts/' + tableData[1];
      });
    });

    const post = this.state.rows;
    const postList = post.length ? (
      <MDBDataTable
        striped
        bordered
        data={this.state}
      />
    ) : (
        <div>No data to display</div>
      );
    return (
      <div>
        <section className="content-header">
          <h1>
            POSTS
            <small></small>
          </h1>
          <ol className="breadcrumb">
            <li><NavLink to="/"> Home </NavLink></li>
            <li className="active"> Posts </li>
          </ol>
        </section>
        <section className="content">
          <div className="row">
            <div className="col-md-12">
              <div className="box">
                <div className="box-header">
                </div>
                <div className="box-body">
                  {postList}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
