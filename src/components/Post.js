import React, { Component } from 'react'
import {Link} from "react-router-dom";
import {AppContext} from "./context"

export default class Post extends Component {
  render() {
    return (
        <div>
            <h3>Posts</h3>
        <AppContext.Consumer>
            {
                (c)=>{
                    return c.data.map((post)=>{
                        if(post.id == this.props.match.params.id){
                            return(
                                <div key = {`post${post.id}`}>
                                    <h3>{post.title}</h3>
                                    <p>{post.body}</p>
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
