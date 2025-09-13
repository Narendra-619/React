import React from "react";
function BlogPost({post})
{
return(
    <div>
        <p>ID: {post.id}</p>
        <p>Author: {post.author}</p>
        <p>Title: {post.title}</p>
        <p>Description: {post.description}</p>
    </div>
)
}
export default BlogPost