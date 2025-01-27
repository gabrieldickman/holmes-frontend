import Form from "./form/Form";
import Resultados from "./compenents/Resultados.jsx";
import styles from "./modules/Container.module.css";
import Provider from "./context/Provider";

function App() {

  return (
    <Provider>
        <div className={styles.tituloContainer}>
          <h1 className={styles.titulo}>HOLMES</h1>
        </div>
        <div className={styles.container}>
          <Form />
        </div>
        <Resultados/>
    </Provider>
  );
}

export default App;
