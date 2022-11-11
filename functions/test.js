const base =  (req, res) => {
    res.status(200).send(`Hello ${req.query.name}!`)
  }

export default base