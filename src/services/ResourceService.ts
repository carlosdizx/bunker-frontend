import { CLIENTE } from './axios';
import router from '@/router';

export const REGISTER_PERSON = (person: {
	address: string;
	phone: string;
	name: string;
	type: string;
	email: string;
}) => CLIENTE.post('person/all', person);

export const LIST_PERSON = () => CLIENTE.get('person/all');
