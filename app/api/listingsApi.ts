import {instance} from './client';

//Fetch all the Lisitings.
export const getListings = () => instance.get('/listings');
