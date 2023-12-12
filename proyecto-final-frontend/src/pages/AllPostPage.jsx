import styles from "../styles/Post.module.css";

import PostItem from "../components/PostItem";
import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { API_URL } from "../utils/consts";
import { Link } from "react-router-dom";

const AllPostPage = () => {
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);

  const [search, setSearch] = useState("");

  const { auth } = useContext(AuthContext);

  const getAllPost = () => {
    fetch(`${API_URL}/post`, {
      headers: {
        Authorization: auth.token,
      },
    })
      .then((res) => res.json())
      .then((data) => setPosts(data));
  };

  useEffect(() => {
    getAllPost();
  }, []);

  useEffect(() => {
    const filtereds = posts.filter((post) => {
      return post.title.toLowerCase().includes(search.toLowerCase().trim());
    });

    setFilteredPosts(filtereds);
  }, [posts, search]);

  return (
    <div className={styles.wrapper}>
      <div className="container-fluid d-flex flex-column justify-content-center align-items-center mt-4">
        <h1>Publicaciones</h1>
        <div className="w-50 d-flex flex-row gap-2 mt-4">
          <Link className="btn btn-success" to="/posts/new">
            Create
          </Link>
          <input
            type="search"
            placeholder="Search"
            className="form-control"
            onChange={(e) => setSearch(e.target.value)}
            value={search}
          />
        </div>
        <div className="w-50 d-flex flex-column gap-2 mt-4">
          {filteredPosts.map((post) => {
            return (
              <PostItem
                key={post._id}
                postId={post._id}
                title={post.title}
                username={post.username}
                imageURL={post.imageURL}
                description={post.description}
                comments={post.comment}
                refresh={getAllPost}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AllPostPage;
