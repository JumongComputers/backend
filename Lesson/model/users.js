import mongoose from 'mongoose';

const Schema = new mongoose.Schema({
    firstName: {
        type: 'string',
        required: [true, 'firstName is required'],
    },
    lastName: {
        type: 'string',
        required: [true, 'lastName is required'],
    },
    email: {
        type: 'string',
        required: [true, 'email is required'],
        unique: true,
        lowercase: true,
    },
    password: {
        type: 'string',
        required: [true, 'password is required'],
    },
    address: {
        houseNumber: {type: 'string'},
        street: {type: 'string'},
        city: {type: 'string'},
        state: {type: 'string'},
        country: {type: 'string'},

    }

})