import cheerio from 'cheerio';
import axios from 'axios';
import { htmlPage } from './html.js';


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

    console.log(eventsDiv.html()+"\n\n\n");

    const eventsList = [];


    $(eventsDiv).find("ul.event-list > li.event").each((i, li) => {
        if (i < 7 && !($(li).find('.event-photo').length > 0)) { // the first condition makes sure we only get the first 7 items (minus the image items)
                                                        // the second condition verifies that each item is not an image 
                                                        // because all images have at least one div with a class event photo

            const event = $(li).text(); // gets event in format : {date} {description}
                                        // we will convert it to the format: In {date}, {description}.

            const index = event.indexOf(" "); // gets index where date ends
            const date = event.substring(0, index);  // gets date
            const description = event.substring(index + " "); // gets description

            eventsList.push("In " + date + `,` + description + "."); // concatenates the full string and pushes it into the array
        }

    });

    return eventsList;

}



// getWebPage().then((res) => parseHtml(res)) // gets webpage with an axios request and then passes it to the parseHtml function

const eventsList = parseHtml(htmlPage);

for (let i = 0; i < eventsList.length; i++) { // tests if the parseHtml and getWebPage functions work
    console.log(eventsList[i] + "\n");
}