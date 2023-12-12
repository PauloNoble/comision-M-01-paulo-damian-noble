const CommentItem = () => {
  return (
    <div key={comment._id}>
      <h2>Comentarios:</h2>
      <ul>
        <li>
          <h3>{comment.username}</h3>
          <p>{comment.description}</p>
        </li>
      </ul>
    </div>
  );
};
export default CommentItem;
