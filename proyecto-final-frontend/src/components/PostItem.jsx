import { Link } from "react-router-dom";
import styles from "../styles/Post.module.css";
import { HiOutlineTrash, HiOutlinePencil } from "react-icons/hi";
import { useId } from "react";

const PostItem = ({ post, getPost, onClick }) => {
  const modalId = useId();

  return (
    <div
      key={post._id}
      className={styles.item}
      onClick={(e) => {
        e.stopPropagation();

        onClick();
      }}
    >
      <picture>
        <img src={post.author.avatar} alt={post.author.username} />
      </picture>
      <section>
        <h2>{post.title}</h2>
        <p>
          <b>{post.author.username}</b>
          <span>{post.author.description}</span>
        </p>
      </section>
      <div>
        <Link
          style={{ fontSize: "30px", color: "green" }}
          className="font-warning"
        >
          <HiOutlinePencil />
        </Link>
        <Link
          onClick={(e) => {
            e.stopPropagation();
          }}
          data-bs-toggle="modal"
          data-bs-target={"#modal" + post._id}
          style={{ fontSize: "30px", color: "red" }}
        >
          <HiOutlineTrash />
        </Link>
      </div>
    </div>
  );
};
export default PostItem;
