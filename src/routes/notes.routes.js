const express = require('express')
const router = express.Router()
const {
  getNotes,
  getByIdNotes,
  postNotes,
  putNotes,
  changeStatusNotes,
  getNotesForStatus
} = require('../controllers/notes.controller')


router.get('/', getNotes)
router.get('/:id', getByIdNotes)
router.get('/status/:status', getNotesForStatus)
router.post('/', postNotes)
router.put('/:id', putNotes)
router.delete('/:id', changeStatusNotes)


module.exports = router