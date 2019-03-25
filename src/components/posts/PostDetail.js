import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

export default class PostDetail extends Component {
    constructor() {
        super()
        this.state = {
            id: null,
            data: []
        }
    }
    componentDidMount() {
        let id = this.props.match.params.post_id;
        axios.get("https://jsonplaceholder.typicode.com/posts/"+id).then(res => {
            console.log(res);
            this.setState({
                id: id,
                data: res.data
            })

        });
    }

    render() {
        return (
            <div>
                <section className="content-header">
                    <h1>
                        POST : {this.state.id}
                    </h1>
                    <ol className="breadcrumb">
                        <li><NavLink to="/"> Home </NavLink></li>
                        <li> <NavLink to="/posts"> Posts </NavLink> </li>
                        <li className="active"> Post : {this.state.id} </li>
                    </ol>
                </section>
                <section className="content">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="box">
                                <div className="box-header">
                                </div>
                                <div className="box-body">
                                 <h1>{this.state.data.title}</h1>   
                                 <p>{this.state.data.body}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
