const express = require('express');
const route = express.Router()
const parser = require('body-parser')
const Todo = require('../../DB/models/To-do')

module.exports = route

route.get('/', async (req, res) => {

      const data = await Todo.find()

      res.render('index', {
            datap: data
      })
})

route.post('/', async (req, res) => {
      console.log(req.body)
      const {
            data
      } = req.body
      console.log(data)
      if (!data) return res.send("beta kuchh dalo")

      const todo = new Todo({
            data
      })

      await todo.save()

      res.redirect('/')
})



route.get('/edit/:_id', async (req, res) => {
      const id = req.params._id
      console.log("edit");
      console.log(id)
      const edt = await Todo.findById(id)
      res.render('editform', {
            e: edt
      })


})

route.post('/edit/:_id', async (req, res) => {
      const id = req.params._id
      console.log(id);
      const updatedData = req.body
      const options = {
            new: true
      };
      try {
            const result = await Todo.findByIdAndUpdate(id, updatedData, options)
            console.log(result)

      } catch (e) {
            console.log(e);
      }
      console.log("Data")
      res.redirect('/')



})

route.get('/delete/:_id', async (req, res) => {
      const id = req.params._id

      console.log(id)

      const del = await Todo.findByIdAndRemove(id)
      if (!del) return res.send("beta kuchh na milo")

      res.redirect('/')

})