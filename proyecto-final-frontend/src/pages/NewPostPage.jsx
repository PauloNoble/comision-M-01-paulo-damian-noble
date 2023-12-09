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
      if (res.status !== 201)
        return Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
          timer: 2500,
        });

      navigate("/post");
    });
  };

  return (
    <div className="container-fluid d-flex flex-column justify-content-center align-items-center mt-4 ">
      <h1 className="text-center bg-black">New Post</h1>
      <form className="d-flex flex-column mt-4 " onSubmit={handleSubmit}>
        <div className="form-floating gap-2 justify-content-between">
          <input
            type="text"
            name="title"
            className="form-control"
            id="title"
            placeholder="title"
          />
          <label htmlFor="title"></label>
          <input
            type="text"
            name="description"
            className="form-control"
            id="description"
            placeholder="Descripcion"
          />
          <label htmlFor="description"></label>
          <input
            type="URL"
            name="imageURL"
            className="form-control"
            id="imageURL"
            placeholder="https:/imagen.com"
          />
          <label htmlFor="imageURL"></label>
          <input
            type="username"
            name="username"
            className="form-control"
            id="username"
            placeholder="username"
          />
          <label htmlFor="username"></label>
        </div>
        <button className="btn btn-success">Create</button>
      </form>
    </div>
  );
};

export default NewPostPage;
