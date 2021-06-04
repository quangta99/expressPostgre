import {Pool} from 'pg'
 
export const pool = new Pool ({
    user:'',
    host: 'localhost',
    password: '',
    database: 'todo',
    port: 5432
});

