const getGreet = ( (req, res) => {
    res.status(200).json({
        'message': 'halo dunia'
    })
  })
const postGreet = ((req, res) => {
    const { name } = req.body;

    res.status(200).json({
        'message': `halooo ${name}`
    })
})

const putGreet = ((req, res) => {
    const { name } = req.params;
    res.status(200).json({
        'message': `halooo ${name}`
    })
  })

const deleteGreet = ((req, res) => {
    const { name } = req.params;
    res.status(200).json({
        'message': `halooo ${name}`
    })
  })

module.exports ={
    getGreet,
    postGreet,
    putGreet,
    deleteGreet
}