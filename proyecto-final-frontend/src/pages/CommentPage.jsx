// import { useParams } from "react-router-dom";
// import { API_URL } from "../utils/consts";
// import { useEffect, useState } from "react";

// const CommentPage = ({comment}) => {
//   const { postId } = useParams();

//   const [comments, setComment] = useState();

//   const getComment = () => {
//     fetch(`${API_URL}/comment`)
//       .then((res) => {
//         if (res.status !== 200)
//           return alert("Error al obtener comentarios de este post");

//         return res.json();
//       })
//       .then((data) => {
//         setComment(data);
//       });
//   };

//   useEffect(() => {
//     getComment();
//   }, [getComment]);

//   return (
//     <div className="">
//       <main className="">
//         <Comment getComment={getComment} comments={comments} />
//       </main>
//     </div>
//   );
// };
// export default CommentPage;

import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { API_URL } from "../utils/consts";
import { BsFillTrashFill, BsFillPencilFill } from "react-icons/bs";
import Swal from "sweetalert2";

const CommentPage = () => {
  const { postId } = useParams();

  const { auth } = useContext(AuthContext);

  const [post, setPost] = useState(null);

  const getPost = (postId) => {
    fetch(`${API_URL}/post/${postId}`, {
      headers: {
        Authorization: auth.token,
      },
    })
      .then((res) => res.json())
      .then((data) => setPost(data));
  };

  const handleDelete = (postId, commentId) => {
    return fetch(`${API_URL}/musics/${postId}/${commentId}`, {
      method: "DELETE",
      headers: {
        Authorization: auth.token,
      },
    });
  };

  useEffect(() => {
    getPost(postId);
  }, []);

  if (!post) {
    return (
      <div className="container-fluid d-flex flex-column justify-content-center align-items-center mt-4">
        <h3 className="text-center mt-4">Loading...</h3>
      </div>
    );
  }

  return (
    <div className="container-fluid d-flex flex-column justify-content-center align-items-center mt-4">
      <h1 className="text-center mt-4">{post.title}</h1>
      <div className="d-flex flex-row align-items-center gap-2">
        <img
          src={post.author.avatar}
          height={60}
          width={60}
          style={{
            objectFit: "cover",
            borderRadius: "50%",
          }}
        />
        <h3>@{post.author.username}</h3>
      </div>
      <div className="w-50 d-flex flex-column gap-2 mt-4">
        <div>
          <Link className="btn btn-success" to={`/comment/${postId}`}>
            Create
          </Link>
        </div>
        <table className="table table-bordered">
          <thead>
            <tr className="text-center">
              <th scope="col">Description</th>
              <th scope="col">Username</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {post.comments.map((comment) => {
              comment;
              return (
                <tr key={comment._id} className="text-center">
                  <td>{comment.description}</td>
                  <td>{comment.username}</td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => {
                        Swal.fire({
                          title: "Are you sure?",
                          text: "You won't be able to revert this!",
                          icon: "warning",
                          showCancelButton: true,
                          confirmButtonColor: "#3085d6",
                          cancelButtonColor: "#d33",
                          confirmButtonText: "Yes, delete it!",
                        }).then((result) => {
                          if (result.isConfirmed) {
                            handleDelete(postId, comment._id).then((res) => {
                              if (res.status !== 200) {
                                return Swal.fire({
                                  icon: "error",
                                  title: "Oops...",
                                  text: "Something went wrong!",
                                  timer: 2500,
                                });
                              } else {
                                Swal.fire({
                                  title: "Deleted!",
                                  text: "Your file has been deleted.",
                                  icon: "success",
                                });
                                getPost(postId);
                              }
                            });
                          }
                        });
                      }}
                    >
                      <BsFillTrashFill />
                    </button>
                    <button className="btn btn-warning">
                      <BsFillPencilFill />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CommentPage;
