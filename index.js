import cheerio from 'cheerio';
import axios from 'axios';
import * as dotenv  from 'dotenv';
import { CronJob } from 'cron';
import { twitterClient } from './twitterclient.js';

import { htmlPage } from './html.js';

dotenv.config({path : './.env'}); 



async function getWebPage() { // gets the web page with a get request

    // downloads the target web page with a HTTP GET Request
    const response = await axios.request({
        method: "GET",
        url: "https://www.onthisday.com/",
        headers: {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36"
        }
    });

    return response.data;

}

function parseHtml(webpage) { // passes the outerhtml as a string to this function in order to parse the html and extract the content
    
    // parse html
    const $ = cheerio.load(webpage);
    const eventsDiv = $('div.no-padding-bottom > div.wrapper');
 

    const eventsList = [];


    $(eventsDiv).find("ul.event-list > li.event").each((i, li) => {
        if (i < 7 && !($(li).find('.event-photo').length > 0)) { // the first condition makes sure we only get the first 7 items (minus the image items)
                                                        // the second condition verifies that each item is not an image 
                                                        // because all images have at least one div with a class event photo

            const event = $(li).text(); // gets event in format : {date} {description}
                                        // we will convert it to the format: On this day in {date}, {description}.

            const index = event.indexOf(" "); // gets index where date ends
            const date = event.substring(0, index);  // gets date
            const description = event.substring(index + " "); // gets description

            eventsList.push("On this day in " + date + `,` + description + "."); // concatenates the full string and pushes it into the array
        }

    });

    return eventsList;

}

async function sendTweets(list) { // sends tweets via the twitter api

    for (let i = 0; i < list.length; i++) {
        try {
            await twitterClient.v2.tweet(list[i]);
            console.log("tweet sent succesfully: " , list[i]);
        } catch(e) {
            console.log(e.data.detail);
        }

    }

}

    console.log("creating cron job");

const cronTweets = new CronJob("@daily", async () => {

    console.log("running cron job");

    // getWebPage fetches the web page from the url
    // the webpage is passed to parseHtml which extracts the data from the page
    // the data is passed to send tweets which finally sends the tweets with the twiiter client

    getWebPage().then(async (res) => {

        const list = parseHtml(res);
        console.log('run jobs');
        await sendTweets(list);

    }).catch(e => console.log(e));       

});

cronTweets.start();