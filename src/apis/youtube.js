import axios from 'axios';

const KEY = 'AIzaSyAggX0BTsFqK10YwVwpPeYg5q-kbtb7Glo';

export default axios.create({
  baseURL: ' https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
});
