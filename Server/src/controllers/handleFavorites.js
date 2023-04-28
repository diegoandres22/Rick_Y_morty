let miFavorites = [];

const postFav = (req, res) =>{
    const perso = req.body; 

    miFavorites.push(perso)

    return res.status(200).json(miFavorites);
}
const getFav = (req, res) =>{    

    return res.status(200).json(miFavorites);
}

const deleteFav = (req, res) =>{
    const {id} = req.params; 

    miFavorites = miFavorites.filter( perso => perso.id !== +id )
     
    return res.status(200).json(miFavorites)
}

module.exports = {
    postFav,
    deleteFav,
    getFav
}