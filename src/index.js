import * as dotenv  from 'dotenv';
import express from 'express';
import { CronJob } from 'cron';
import { rateLimit } from 'express-rate-limit';

import { sendTweets } from './sendTweets.js';


dotenv.config({path : './.env'}); 

const app = express();

const rateLimiter = rateLimit({
    windowMs : 2 * 60 * 1000, // 2 minutes
    limit : 5, // allowed requests a day per IP
});

app.use(rateLimiter);


app.get("/", (req,res) => {

    sendTweets().then((success)=>{
        if (success) {
            console.log('Tweets successfully sent');
            res.send("success");
        }
        else {
            console.log('Tweets Failed');
            res.send("failure");
        }

    });

});

app.listen(3000, () => console.log("Server ready on port 3000."));


export {

    app

};