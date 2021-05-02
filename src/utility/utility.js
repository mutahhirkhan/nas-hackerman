export var fetchData = async (link) => {
  try {
    var promises = [fetch(String(link)).json()]
    var data = await Promise.all(promises)
    // var response = await fetch(String(link));
    // var data = await response.json();

    return data;
  } catch (error) {
    console.log(error);
  }
};
