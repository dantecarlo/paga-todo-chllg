import axios from 'axios'

export const challengeApi = axios.create({
  baseURL: 'https://dev.obtenmas.com/catom/api/challenge'
})
