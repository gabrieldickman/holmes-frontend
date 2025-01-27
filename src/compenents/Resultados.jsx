import fetchClient from "../api/fetchClient";
import AppContext from "../context/App.context";
import styles from "../modules/Resultados.module.css";
import { useEffect, useContext } from "react";

function Resultados() {
  const { client, setClient } = useContext(AppContext);

  // useEffect(() => {
  //   fetchClient(client).then((data) => {
  //     setClient(data);
  //   });
  // },[]);

  fetchClient(client);

  return (
    <div className={styles.resultsContainer}>
      <table className={styles.table}>
        <tr>
          <th>ID</th>
          <th>CLIENTE</th>
          <th>BASE</th>
          <th>ATIVO</th>
          <th>ACESSAR</th>
        </tr>
      </table>
      {client.map((client) => (
        <table className={styles.table}>
          <tr>
            <td>{client.id}</td>
            <td>{client.razao}</td>
            <td>{client.filial_id}</td>
            <td>{client.ativo}</td>
          </tr>
        </table>
      ))}
    </div>
  );
}

export default Resultados;
