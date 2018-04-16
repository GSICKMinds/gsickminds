import * as mongoose from 'mongoose';

export const SponsorSchema = new mongoose.Schema({
    name: String,
    url: String,
    image: String,
}, { strict: false });