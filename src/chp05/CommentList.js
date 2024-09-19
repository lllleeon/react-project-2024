import React from "react";
import Comment from "./Comment";
import comment from "./Comment";

const comments = [

];
function CommentList(props) {
    return(
        <div>
            {
                comments.map((comments)=>{
                    return(
                        <Comment name={comments.name} comment={comments.comment}/>
                    )
                })
            }

        </div>
    );
}

export default CommentList;