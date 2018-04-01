import * as mongoose from 'mongoose';

export const InfoSchema = new mongoose.Schema({
    name: String,
    descriptcion: String,
}, { strict: false });