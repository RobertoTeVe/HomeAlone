import * as Express from 'express';
import { readFile } from 'fs/promises';

console.log('hello');

const app = Express();

app.get('/', async (request: any, response: any) => {

    response.send(await readFile('./home.html', 'utf8'));
    
});

app.listen(3000, () => console.log('App listening at http://localhost:3000'));