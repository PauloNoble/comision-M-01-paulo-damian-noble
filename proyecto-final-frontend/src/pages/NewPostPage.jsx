import { useContext } from "react";
import { API_URL } from "../utils/consts";
import { AuthContext } from "../providers/AuthProvider";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const NewPostPage = () => {
  const { auth } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = {
      title: formData.get("title"),
      description: formData.get("descrpition"),
      imageURL: formData.get("imageURL"),
      username: formData.get("username"),
    };

    fetch(`${API_URL}/post`, {
      method: "POST",
      headers: {
        Authorization: auth.token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => {
      if (res.status !== 201) {
        return Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
          timer: 2500,
        });
      } else {
        Swal.fire({
          icon: "success",
          title: "Success",
          text: "Comment added to post",
          timer: 2500,
        }).then(() => {
          navigate(`/posts`);
        });
      }
    });
  };

  return (
    <div className="container-fluid d-flex flex-column justify-content-center align-items-center mt-4">
      <h2 className="text-center bg-black">New Post from</h2>

      <form
        className="d-flex flex-column mt-4 gap-2"
        onSubmit={handleSubmit}
        style={{ width: "500px" }}
      >
        <div className="form-floating">
          <input
            type="text"
            description
            name="title"
            className="form-control"
            id="title"
            placeholder="titulo"
          />
          <label htmlFor="title">Titulo</label>
        </div>
        <div className="form-floating">
          <input
            type="text"
            description
            name="imageURL"
            className="form-control"
            id="imageURL"
            placeholder="imageURL"
          />
          <label htmlFor="imageURL">ImageURL</label>
        </div>
        <div className="form-floating">
          <input
            type="text"
            description
            name="description"
            className="form-control"
            id="description"
            placeholder="descripcion"
          />
          <label htmlFor="description">Descripcion</label>
        </div>
        <div className="form-floating">
          <input
            type="text"
            name="username"
            className="form-control"
            id="username"
            placeholder="Myusername"
          />
          <label htmlFor="username">Username</label>
        </div>

        <button className="btn btn-success" type="submit">
          Create
        </button>
      </form>
    </div>
  );
};

export default NewPostPage;
