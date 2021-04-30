export var fetchData = async (link) => {
    try {
        // var api = String(link)
        var response = await fetch(String(link))
        var data = await response.json()
        return data
    } catch (error) {
        console.log(error)
    }
}