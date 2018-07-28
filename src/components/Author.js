import React, { Component } from 'react';
import {BrowserRouter, Route, Link} from "react-router-dom";
import {AppContext} from "./context"
import Title from "./Title";
import Post from "./Post";

export default class Author extends Component {
  render() {
    return (
        <BrowserRouter>
            <div>
            <h3>Authors</h3>
            <AppContext.Consumer>
                {
                    (c)=>{
                         return c.authors().map((author)=>{
                            return(
                                <div key= {author}>
                                    <Link to={`/${author}`}>{author}</Link>
                                </div>
                            )
                        })
                    }
                }
            </AppContext.Consumer>
            <Route  path = '/:author' component={Title}/>
            <Route path ='/:author/:id' component={Post}/>
            </div>
        </BrowserRouter>
    )
  }
}
