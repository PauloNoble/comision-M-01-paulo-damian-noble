// import { useContext, useEffect, useState } from "react";
// import { Link, useParams } from "react-router-dom";
// import { AuthContext } from "../providers/AuthProvider";
// import { API_URL } from "../utils/consts";
// import { BsFillTrashFill, BsFillPencilFill } from "react-icons/bs";
// import Swal from "sweetalert2";

// const CommentPage = () => {

//   const handleDelete = async (commentId) => {
//     return await fetch(`${API_URL}/comment/${commentId}`, {
//       method: "DELETE",
//       headers: {
//         Authorization: auth.token,
//       },
//     });
//   };

//   useEffect(() => {
//     getPost(postId);
//   }, []);

//   if (!post) {
//     return (
//       <div className="container-fluid d-flex flex-column justify-content-center align-items-center mt-4">
//         <h3 className="text-center mt-4">Loading...</h3>
//       </div>
//     );
//   }

//   return (
//     <div className="container-fluid d-flex flex-column justify-content-center align-items-center mt-4">
//       <h1 className="text-center mt-4">{post.title}</h1>
//       <div className="d-flex flex-row align-items-center gap-2">
//         <img
//           src={post.author.avatar}
//           height={60}
//           width={60}
//           style={{
//             objectFit: "cover",
//             borderRadius: "50%",
//           }}
//         />
//         <h3>@{post.username}</h3>
//       </div>
//       <div className="w-50 d-flex flex-column gap-2 mt-4">
//         <div>
//           <Link className="btn btn-success" to={`/comment/${postId}`}>
//             Create
//           </Link>
//         </div>

//         <button
//           className="btn btn-danger"
//           onClick={() => {
//             Swal.fire({
//               title: "Are you sure?",
//               text: "You won't be able to revert this!",
//               icon: "warning",
//               showCancelButton: true,
//               confirmButtonColor: "#3085d6",
//               cancelButtonColor: "#d33",
//               confirmButtonText: "Yes, delete it!",
//             }).then((result) => {
//               if (result.isConfirmed) {
//                 handleDelete(comment._id).then((res) => {
//                   if (res.status !== 200) {
//                     return Swal.fire({
//                       icon: "error",
//                       title: "Oops...",
//                       text: "Something went wrong!",
//                       timer: 2500,
//                     });
//                   } else {
//                     Swal.fire({
//                       title: "Deleted!",
//                       text: "Your file has been deleted.",
//                       icon: "success",
//                     });
//                     getPost(postId);
//                   }
//                 });
//               }
//             });
//           }}
//         >
//           <BsFillTrashFill />
//         </button>
//         <button className="btn btn-warning">
//           <BsFillPencilFill />
//         </button>
//       </div>
//     </div>
//   );
// };

// export default CommentPage;
