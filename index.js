
import * as sqlite from 'sqlite';
import sqlite3 from 'sqlite3';
import express from 'express'

import {getGreetings, addGreeting} from './db.js'

const app = express();
const PORT = process.env.PORT || 3008;

// http://localhost:3008/api/greetings 


// get all the greetings 
app.get('/api/greetings', async (reg, res) => {
    console.log('start')
    res.json({
        greetings : []
    })
});

app.listen(PORT, () => console.log(`started on port : ${'PORT'}`))
const  db = await sqlite.open({
    filename:  './101.db',
    driver:  sqlite3.Database
});

// call the query using an await 
// create a function that returns all the greetings from the db
async function getaGeetings() {
    // sql statement type - insert


    const result = await db.all('select * from greetings');
    return result;
}



console.log('===============')


await addGreeing('venda ', 'Ndaa');

const result = await getGreetings()

// create a function that delete a specific greeting 
// create a function that add a new greetind
function addGreeting(language, greeting){
}

// create a function that update a given greeting


// .then(result = console.log(result));


// console. log()

