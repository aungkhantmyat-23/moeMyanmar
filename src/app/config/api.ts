import { environment } from './../../environments/environment.prod';
export const baseUrl = environment.production
? 'http://localhost:3000'
: 'http://localhost:3000';
export const courseUrl = baseUrl +'/courses';
export const userUrl = baseUrl + '/user';