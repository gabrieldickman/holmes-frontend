import axios from "axios";

const fetchClient = async (cpf) => {
  try {
    const data = await axios.get(`http://localhost:8000/cliente/?cpf=${cpf}`);
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};
export default fetchClient;
