import { get } from './http.js'

export const getApp = (id)=>get('/v-web/m',{id:id})