import { BsFillTrashFill, BsMusicNoteList } from "react-icons/bs";
import Swal from "sweetalert2";
import { API_URL } from "../utils/consts";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Link } from "react-router-dom";

const PostItem = ({
  postId,
  title,
  imageURL,
  username,
  description,

  createdAt,
  refresh,
}) => {
  const { auth } = useContext(AuthContext);

  const handleDelete = async (postId) => {
    return await fetch(`${API_URL}/post/${postId}`, {
      method: "DELETE",
      headers: {
        Authorization: auth.token,
      },
    });
  };

  return (
    <div className="card mb-3">
      <div className="row g-0">
        <div className="col-md-4">
          <Link to={`/posts/${postId}`}>
            <img
              src={imageURL}
              className="img-fluid rounded-start"
              to={`/posts/${postId}`}
            />
          </Link>
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">
              <b>{username}: </b>
              <span>{description}</span>
            </p>
            <p>{createdAt}</p>
            <div className="d-flex flex-row justify-content-between">
              <span className="card-text">
                {/* <div>
                  {comments.map((comment) => {
                    return (
                      <small className="text-body-secondary">
                        <h6>{comment.username}</h6>
                        <p>{comment.description}</p>
                        <p>Fecha: </p>
                      </small>
                    );
                  })}
                </div> */}
                <Link className=" btn btn-success" to="/comment/:postId">
                  Comentar
                </Link>
              </span>
              <div>
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
                            refresh();
                          }
                        });
                      }
                    });
                  }}
                >
                  <BsFillTrashFill />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostItem;
