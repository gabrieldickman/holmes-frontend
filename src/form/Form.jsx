import fetchClient from "../api/fetchClient";
import AppContext from "../context/App.context";
import styles from "../modules/Form.module.css";
import Button from "./Button.jsx";
import { useState, useContext } from "react";

function Form() {
  const [cpfClient, setCpfClient] = useState("");

  const { setClient } = useContext(AppContext);

  const handleSearch = async (e) => {
    e.preventDefault();

    const cliente = await fetchClient(cpfClient);

    setClient(cliente);

    setCpfClient("");
  };

  return (
    <form className={styles.form} onSubmit={handleSearch}>
      <div className={styles.inputContainer}>
        <p>INFORME O CPF/CNPJ DO CLIENTE</p>
        <input
          className={styles.input}
          type="search"
          value={cpfClient}
          onChange={(e) => setCpfClient(e.target.value)}
          required
        />
      </div>
      <div>
        <p>PESQUISAR</p>
        <Button />
      </div>
    </form>
  );
}

export default Form;
