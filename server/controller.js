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
    },
    newHouse: async (req, res) => {
        const db = req.app.get('db')
        const newHouse = await db.new_house(req.body.name, req.body.address, req.body.city, req.body.zip_code, req.body.image, req.body.monthly_mortgage, req.body.rent, req.body.state)
        return res.status(200).send(newHouse)
    }
}