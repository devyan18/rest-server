const notes = require('../models/notes.model')

const getNotes = async (req, res) => {
  try {
    const allNotes = await notes.find()
    res.json(allNotes)
  } catch (error) {
    res.send(error)
  }
}

const getNotesForStatus = async (req, res) => {
  try {
    const statusNotes  = await notes.find({ status: req.params.status })
    res.json(statusNotes)
  } catch (error) {
    res.send(error)
  }
}

const getByIdNotes = async (req, res) => {
  try {
    const allNotes = await notes.findById(req.params.id)
    res.json(allNotes)
  } catch (error) {
    res.send(error)
  }
}

const postNotes = async (req, res) => {
  try {
    const { title, desc } = req.body
    const newNote = new notes({ title, desc })
    newNote.save()
    res.json({'status': 'note saved'})
  } catch (error) {
    res.send(error)
  }
}

const putNotes = async (req, res) => {
  try {
    const { title, desc } = req.body
    await notes.findByIdAndUpdate(req.params.id, { title, desc })
    res.json({'status': 'note saved'})
  } catch (error) {
    res.send(error)
  }
}

const changeStatusNotes = async (req, res) => {
  try {
    const currentNote = await notes.findById(req.params.id)
    const { status } = currentNote
    await notes.findByIdAndUpdate(req.params.id, { status: !status })
    res.json({'status': 'note saved'})
  } catch (error) {
    res.send(error)
  }
}

module.exports = {
  getNotes,
  getByIdNotes,
  postNotes,
  putNotes,
  changeStatusNotes,
  getNotesForStatus
}