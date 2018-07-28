import React, { Component } from 'react'
import {Link} from "react-router-dom";
import {AppContext} from "./context"

export default class Title extends Component {
  render() {
    return (
        <div>
            <h3>Title</h3>
        <AppContext.Consumer>
            {
                (c)=>{
                    return c.data.map((post)=>{
                        if(post.author === this.props.match.params.author){
                            return (
                                <div key={post.id}>
                                    <Link to={`/${post.author}/${post.id}`}>{post.title}</Link>
                                </div>
                            )
                        }
                    })
                    
                }
            }
        </AppContext.Consumer>
        </div>
    )
  }
}
