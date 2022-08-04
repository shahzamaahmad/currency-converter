const axios = require('axios')
const express = require('express')
const app = express()
const url = 'https://v6.exchangerate-api.com/v6/601a1abe0129ca1642a99911/latest/USD'
axios.get(url).then(resp => {
  return resp.data.conversion_rates
  // data.map(item => {
  //   console.log(item);
  // })
  // const dataParse = JSON.parse(data)
  // console.log(data);
}).then(res => {
  console.log(res);
  // Object.keys(res).map((item, item2) => {
  //   console.log(item2);
  // });
});
app.listen(3000, () => {
  console.log('Server is running on port 3000');
})