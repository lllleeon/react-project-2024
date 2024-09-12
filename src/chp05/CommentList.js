import React from "react";
import Comment from "./Comment";
import comment from "./Comment";

const comments = [
    {
        name:, "나님"
        comment:,"추석에 뭐하지"
    },
    {
        name:, "사람"
        comment:,"집가고싶어"
    },
    {
        name:, "머엉ㅇ"
        comment:," 프로젝트 예습 복습 해야겟다"
    },
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