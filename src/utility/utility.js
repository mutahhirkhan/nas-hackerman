export var fetchData = async (link) => {
    var api = String(link)
    var response = await fetch(api)
    var data = await response.json()
    return data
}