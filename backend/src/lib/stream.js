import {StreamChat} from 'stream-chat';
import 'dotenv/config'
const apikey = process.env.STREAM_API_KEY;
const apiSecret = process.env.STREAM_API_SECRET

if(!apikey || !apiSecret){
    console.log("stream api key or secret is missing")
}

export const upsertStreamUser = async(userData)=>{
    try {
        await streamClient.upsertUsers([userData])
        return userData;
    } catch (error) {
        console.error("error in inserting streamUser",error)
    }

}

const streamClient = StreamChat.getInstance(apikey,apiSecret)

export const generateStreamToken = (userId) => {
  try {
    // ensure userId is a string
    const userIdStr = userId.toString();
    return streamClient.createToken(userIdStr);
  } catch (error) {
    console.error("Error generating Stream token:", error);
  }
};