import * as mongoose from 'mongoose';

export const TalkSchema = new mongoose.Schema({
    title: String,
    duration: String,
    description: String,
    slides: String,
}, { strict: false });