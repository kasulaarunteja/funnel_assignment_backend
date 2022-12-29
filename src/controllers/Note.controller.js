const express = require('express')

const Post = require('../models/Note')
const router = express.Router()

router.post('/posttitle', async (req, res) => {
  try {
    const posttitle = await Post.create(req.body)
    res.send(posttitle)
  } catch (err) {
    return res.status(400).send(err.message)
  }
})

router.get('/posttitle', async (req, res) => {
  try {
    const posttitle = await Post.find().lean().exec()
    res.send(posttitle)
  } catch (err) {
    return res.status(400).send(err.message)
  }
})

router.patch('/posttitle/:id', async (req, res) => {
  try {
    const posttitle = await Post.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    })

    return res.send(posttitle)
  } catch (err) {
    return res.status(500).send(err.message)
  }
})

router.delete('/posttitle/:id', async (req, res) => {
  try {
    const posttitle = await Post.findByIdAndDelete(req.params.id)

    return res.send("deleted successful")
  } catch (err) {
    return res.status(500).send(err.message)
  }
})

module.exports = {router}
