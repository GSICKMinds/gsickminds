import * as mongoose from 'mongoose';

export const EventSchema = new mongoose.Schema({
    data: Date,
}, { strict: false });