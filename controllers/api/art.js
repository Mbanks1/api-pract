const Art = require('../../models/art')




module.exports = {
    index,
    show,
    create,
    update,
    delete: deleteArt,
};


function index(req, res){
    Art.find({})
    .then((art)=>{
        res.status(200).json(art)
    })
};

function show( req, res) {
    Art.findById(req.params.id)
    .then((art) => {
        res.status(200).json(art)
    })
};

function create( req, res) {
   Art.create(req.body)
   .then((art) => {
       res.status(200).json(art)
   })
};


function update( req, res) {
   Art.findByIdAndUpdate(req.params.id, req.body, {new:true})
   .then((art)=>{
       res.status(200).json(art)
   })
};


function deleteArt( req, res) {
    Art.findByIdAndDelete(req.params.id)
    .then((art) => {
        res.status(200).json(art)
    })
};

