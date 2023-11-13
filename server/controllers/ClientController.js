const { request } = require("express");
const database = require('../models/database')


class ClientController{

    static async index(req, res){
        const dataAll = await database('client').select('*')
        res.render("dataClient", {dataAll})
    }

    static async createClient(req, res){
        try {
            const currDate = new Date()
            let {username_client, 
                password_client,
                name_client, department} = req.body
            let inputUser = {username_client, 
                password_client,
                name_client,
                department,
                created_at:currDate} 
            const data = await database('client').insert(inputUser)
            res.status(201).json(data)
        } catch (error) {
            console.log(error, "ERORR");
        }
    }

    static async deleteClient(req, res){
        try {
            let targetId = req.params.id 
            await database('client').where({id_client:targetId}).del()
            res.status(200).json('data berhasil dihapus')
        } catch (error) {
            console.log(error, "ERORR");
        }
    }

    static async getAllClient(req, res){
        try { 
            const allData = await database('client').select('*')
        } catch (error) {
            console.log(error, "ERORR");
        }
    }

    static async updateClient(req, res){
        try {
            const currDate = new Date()
            let targetId = req.params.id
            let {username_client, 
                password_client,
                name_client, department} = req.body
            let inputUser = {username_client, 
                password_client,
                name_client,
                department,
                created_at:currDate}      
            const data = await database('client').where({id_client:targetId}).update(inputUser)
            res.status(201).json("berhasil update")
        } catch (error) {
            console.log(error, "ERORR");
        }
    }
    
}

module.exports = ClientController