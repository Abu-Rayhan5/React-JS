import React from "react";
import Post from "./Post";
const PoliList = (props) =>{
    const {post1, post2} = props;
    return(
        <div>
            <Post title={post1.title} author={post1.author}> 
                <p style={{color:'red', fontSize:'20px'}}> {post1.descript} </p>
            </Post>
            <Post title={post2.title} author={post2.author}> 
                <p style={{color:'red', fontSize:'20px'}}> {post2.descript} </p>
            </Post>
        </div>
    )
}
export default PoliList;