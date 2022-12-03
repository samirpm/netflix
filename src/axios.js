import axios from "axios";
import { baseUrl } from "./Request";

const instance =axios.create({
    baseURL:baseUrl
})
export default instance