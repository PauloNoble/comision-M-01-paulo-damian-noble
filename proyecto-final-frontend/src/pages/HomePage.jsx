import styles from "../styles/Landing.module.css";

import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className={styles.wrapper}>
      <h1>Foro Viajeros</h1>
      <p>Bienvenidos al foro para los viajeros más apasionados</p>
      <Link to="">Vamos a ver las publicaciones</Link>
    </div>
  );
};
export default HomePage;
