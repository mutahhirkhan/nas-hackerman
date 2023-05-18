import axios from "axios";

export const fetchData = (link) => axios.get(String(link));

export const POST_FETCH_LIMIT = 10;