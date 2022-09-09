import {instance} from './client';

export const getCategories = () => instance.get('/categories');
