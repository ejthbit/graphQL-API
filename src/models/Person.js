import mongoose from 'mongoose'

const personSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: false,
        required: true,
    },
    position: {
        type: String,
        unique: false,
        required: true,
    },
})

const Person = mongoose.model('Person', personSchema)

export default Person
