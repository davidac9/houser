module.exports ={
    getAllHouses: async(req,res) => {
        const db = req.app.get('db')

        const allHouses = await db.get_all_houses()
        return res.status(200).send(allHouses)
    },
    deleteHouse: async (req,res) => {
        const db = req.app.get('db')
        const delHouse = await db.delete_house(req.params.house_id)
        return res.status(200).send(delHouse)
    }
}