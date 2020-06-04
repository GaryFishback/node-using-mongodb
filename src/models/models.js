import mongoose from ('mongoose')
import { Schema } from "mongoose"

var newItem = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    category: {
        type: String
    },
    price: {
        type: Number
    },
    created_date: {
        type: Date,
        default: Date.now
})