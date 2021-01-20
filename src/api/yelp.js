import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization:
      'Bearer dmQUsoudark7gGXI9WpY151oQyurG3BOzwy_oNsVzGkuWQuZJjsTTC67HnQo9k47IdvS5-f2H_1q2vFgR7FV4-tZqScrz2D7XZQ8JYmhptekT2SAgNySFDbq5-EBYHYx',
  },
});
