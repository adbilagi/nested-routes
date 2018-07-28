import React, { Component } from 'react'
export const AppContext = React.createContext();

export  class AppProvider extends Component {
    state ={
        data : [

            {author : "James Bond",id : 1, title : "My first article", body : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"},
            {author : "James Bond", id : 2, title : "My second article", body : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"},
            { author : "James Bond",id : 3, title : "My third article", body : "Lorem Ipsum is simply dummy textof the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"},
        
            {author : "Rambo", id : 4, title : "My fourth article", body : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"},
            {author : "Rambo", id : 5, title : "My fifth article", body : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"},
            {author : "Rambo", id : 6, title : "My sixth article", body : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"}
        
        ],
        authors : ()=>{
            let authorSet = new Set(
                this.state.data.map((post)=>{
                    return post.author;
                })
            );

            let authorArray = [];
            authorSet.forEach((author)=>{
                authorArray.push(author);
            });
            return authorArray;
        }
    }
  render() {
    return (
        <AppContext.Provider value={{...this.state}}>
        {this.props.children}
        </AppContext.Provider>
    )
  }
}

