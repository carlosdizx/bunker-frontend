import { CLIENTE } from './axios';
import router from '@/router';

//--------------------- Person ---------------------

export const REGISTER_PERSON = (person: {
	address: string;
	phone: string;
	name: string;
	type: string;
	email: string;
}) => CLIENTE.post('person/all', person);

export const LIST_PERSONS_CLIENTS = () => CLIENTE.get('person/all/Cliente');

export const LIST_PERSONS = () => CLIENTE.get('person/all');

//--------------------- Product ---------------------

export const REGISTER_PRODUCT = (product: {
	name: String;
	costPrice: number;
	salePrice: number;
}) => CLIENTE.post('product/all', product);

export const LIST_PRODUCTS = () => CLIENTE.get('product/all');
