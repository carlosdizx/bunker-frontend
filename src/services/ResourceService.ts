import { CLIENTE } from './axios';
import { Person } from '@/models/person';
import router from '@/router';

export const REGISTER_PERSON = (person: Person) => CLIENTE.post('person/all', person);

export const LIST_PERSON = () => CLIENTE.get('person/all');
