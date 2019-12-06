import axios from "axios";
import environment from "./environment";

export default axios.create({
  baseURL: `http://localhost:8080/`
});
