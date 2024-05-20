import { TwitterApi } from 'twitter-api-v2';
import {} from 'dotenv/config';


const client = new TwitterApi({ // initializes twitter client
    appKey: process.env.API_KEY,
    appSecret: process.env.API_SECRET,  
    accessToken: process.env.ACCESS_TOKEN,
    accessSecret: process.env.ACCESS_SECRET,
}); 

const bearer = new TwitterApi(process.env.BEARER_TOKEN);

const twitterClient = client.readWrite;
const twitterBearer = bearer.readOnly;

export { twitterClient, twitterBearer};