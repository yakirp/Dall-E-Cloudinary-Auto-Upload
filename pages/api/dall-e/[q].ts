const axios = require('axios');

export default async function handler(req, res) {

  if (req.method === 'GET') {

    if (!req.query.q) {
      return res.status(400).send('Missing query parameter q');
    }
    try {
      const apicall = await axios.post('https://api.openai.com/v1/images/generations',
        {
          "prompt": req.query.q.split('/').join(''),
          "n": 1,
          "size": "256x256"
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + process.env.OPENAI_API_KEY
          }
        }
      )

      const data = apicall.data
      await downloadImage(data.data[0].url, res)

    } catch (error) {
      res.status(400).send(error.message);
    }



  }

}

async function downloadImage(url, res) {
  const response = await axios({
    url,
    method: 'GET',
    responseType: 'stream'
  });
  return new Promise((resolve, reject) => {
    response.data.pipe(res)
      .on('error', reject)
      .once('close', () => resolve(true));
  });
}