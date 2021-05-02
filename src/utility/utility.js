import axios from "axios"

export var fetchData = async (link) => {
  try {
    // var promises = [fetch(String(link)).json()]
    // var data = await Promise.all(promises)
    var {data} = await axios.get(String(link))

    return data;
  } catch (error) {
    console.log(error);
  }
};
