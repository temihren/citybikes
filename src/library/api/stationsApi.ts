import axios from 'axios';

export const stationsRequest = (network_id: string) =>
    axios.get(`http://api.citybik.es/v2/networks/${network_id}`);