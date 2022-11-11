var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  
fetch("https://api.nightbot.tv/1/commands", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));

const base =  (req, res) => {
    res.status(200).send(`Hello ${req.query.name}!`)
  }

export default base