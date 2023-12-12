import { useContext, useEffect, useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { API_URL } from "../utils/consts";
import { BsFillTrashFill, BsFillPencilFill } from "react-icons/bs";
import Swal from "sweetalert2";

const PostPage = () => {
  const { postId } = useParams();

  const { auth } = useContext(AuthContext);

  const [post, setPost] = useState(null);

  const getPost = async (postId) => {
    return await fetch(`${API_URL}/post/${postId}`, {
      headers: {
        Authorization: auth.token,
      },
    })
      .then((res) => res.json())
      .then((data) => setPost(data));
  };
  useEffect(() => {
    getPost(postId);
  }, []);

  const handleDelete = async (postId) => {
    return await fetch(`${API_URL}/post/${postId}`, {
      method: "DELETE",
      headers: {
        Authorization: auth.token,
      },
    });
  };

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
          src={post.avatar}
          height={60}
          width={60}
          style={{
            objectFit: "cover",
            borderRadius: "50%",
          }}
        />
        <h3>@{post.username}</h3>
      </div>
      <div className="container-fluid d-flex flex-column col-md-4">
        <img src={post.imageURL} className="img-fluid rounded-start" />
      </div>
      <div>
        <p>{post.description}</p>
      </div>
      <div className="d-flex flex-row align-items-center gap-2">
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
                handleDelete(postId).then((res) => {
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
      </div>

      <div className="w-50 d-flex flex-col gap-2 mt-4">
        <table className="table table-bordered">
          <thead>
            <h6>Comentarios:</h6>
            <tr className="text-center">
              <th scope="col">Username</th>
              <th scope="col">Comment</th>
              <th scope="col">CreatedAt</th>
            </tr>
          </thead>
          <tbody>
            {post.comments.map((comment) => {
              return (
                <tr key={comment._id} className="text-center">
                  <td>{comment.username}</td>
                  <td>{comment.description}</td>
                  <td>{comment.createdAt}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default PostPage;
