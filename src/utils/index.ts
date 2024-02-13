import axios from 'axios'

export const fetchData = (link: string) => axios.get(String(link))

export const POST_FETCH_LIMIT: number = 10
