import mongoose from 'mongoose'

const Schema = mongoose.Schema


export const ProductSchema = new Schema({
    name: {
        type: String,
        required: 'Enter a product name'
    },
    description: {
        type: String,
        required: 'Enter a description'
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
    }
})

// const assert = require("assert");
// const mongoose = require("mongoose");

// const ProductSchema = new mongoose.Schema({
//     name: {
//         type: String,
//         required: 'Enter a product name'
//     },
//     description: {
//         type: String,
//         required: 'Enter a description'
//     },
//     category: {
//         type: String
//     },
//     price: {
//         type: Number
//     },
//     created_date: {
//         type: Date,
//         default: Date.now
//     }
// });