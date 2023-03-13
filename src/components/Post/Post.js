import React from "react";

const Post = (props) =>{
    const {title, author, children} = props;
    return(
        <div>
         <h2>{title}</h2>
         <p> {author} </p>     
         {children}    
        </div>
    )
}
export default Post;