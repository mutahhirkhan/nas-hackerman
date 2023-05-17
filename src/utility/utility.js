import axios from "axios"

export const fetchData = async (link) => {
  try {
    // const promises = [fetch(String(link)).json()]
    // const data = await Promise.all(promises)
    const {data} = await axios.get(String(link))

    return data;
  } catch (error) {
    console.log(error);
  }
};

export const POST_FETCH_LIMIT = 10