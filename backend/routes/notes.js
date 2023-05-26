const express = require('express');
// const { model } = require('mongoose');
const fetchuser = require('../midileware/fetchuser');
const { body, validationResult } = require('express-validator');
const router = express.Router()
const Notes = require('../models/Notes');

// Route 1 get all the notes using get "/api/auth/fetchallnotes" login required
router.get('/fetchallnotes',fetchuser,async (req,res)=>{
  try {
    const notes = await Notes.find({user: req.user.id})
    res.json(notes);
} catch (error) {
    console.log(error.message);
    res.status(500).send("Internal sever error");
}
})

// Route 2 Add a new note using post "/api/auth/addnote" login required
router.post('/addnote', fetchuser,[
    body('title','Enter a valid title').isLength({ min: 2 }),
    body('description','description must be atleast 5 charactors').isLength({ min: 5 }),
], async (req,res)=>{
    try {
    
    const {title, description, tag} = req.body;
     //if there are errors return bad request and the error
     const errors = validationResult(req);
     if (!errors.isEmpty()) {
       return res.status(400).json({ errors: errors.array() });
     }
     const note = new Notes({
        title, description, tag, user: req.user.id
     })
    const savedNote = await note.save();
     res.json(savedNote);
    } catch (error) {
        console.log(error.message);
        res.status(500).send("Internal sever error");
    }
})

// ROUTE 3: Update an existing Note using: PUT "/api/notes/updatenote". Login required
router.put('/updatenote/:id', fetchuser, async (req, res) => {
    const { title, description, tag } = req.body;
    try {
        // Create a newNote object
        const newNote = {};
        if (title) { newNote.title = title };
        if (description) { newNote.description = description };
        if (tag) { newNote.tag = tag };

        // Find the note to be updated and update it
        let note = await Notes.findById(req.params.id);
        if (!note) { return res.status(404).send("Not Found") }

        if (note.user.toString() !== req.user.id) {
            return res.status(401).send("Not Allowed");
        }
        note = await Notes.findByIdAndUpdate(req.params.id, { $set: newNote }, { new: true })
        res.json({ note });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})


// ROUTE 4: Delete an existing Note using: DELETE "/api/notes/deletenote". Login required
router.delete('/deletenote/:id', fetchuser, async (req, res) => {
    try {
        // Find the note to be delete and delete it
        let note = await Notes.findById(req.params.id);
        if (!note) { return res.status(404).send("Not Found") }

        // Allow deletion only if user owns this Note
        if (note.user.toString() !== req.user.id) {
            return res.status(401).send("Not Allowed");
        }

        note = await Notes.findByIdAndDelete(req.params.id)
        res.json({ "Success": "Note has been deleted", note: note });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})


module.exports = router


