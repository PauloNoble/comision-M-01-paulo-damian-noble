const Comment = ({ comment, getComment }) => {
  return (
    <div>
      {comment.map((comment) => {
        return (
          <CommentItem
            getComment={getComment}
            key={comment._id}
            comment={comment}
          />
        );
      })}
    </div>
  );
};
export default Comment;
