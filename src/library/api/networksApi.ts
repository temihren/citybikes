import axios from 'axios';

export const networksRequest = () =>
    axios.get('http://api.citybik.es/v2/networks');