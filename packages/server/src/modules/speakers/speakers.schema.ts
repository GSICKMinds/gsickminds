import * as mongoose from 'mongoose';

export const SpeakerSchema = new mongoose.Schema({
    name: String,
    position: String,
    photo: String,
    bio: String,
    talkId: String,
}, { strict: false });