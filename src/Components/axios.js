import axios from 'axios'
import {baseurl} from '../constants/Constant'
const instance = axios.create({
    baseURL: baseurl
  });
export default instance