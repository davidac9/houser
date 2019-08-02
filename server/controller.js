module.exports ={
    getAllHouses: async(req,res) => {
        const db = req.app.get('db')

        const allHouses = await db.get_all_houses()
        return res.status(200).send(allHouses)
    }
}