import { ITalk, ISpeaker } from "@models/models";

export class Talk implements ITalk {
    title: string;
    duration: string;
    description: string;
    slides: string;
    eventId: string;
    _id: string;

    constructor(talk?) {
        this.title = talk.title || '';
        this.duration = talk.duration || '';
        this.description = talk.description || '';
        this.slides = talk.slides || '';
        this.eventId = talk.eventId || '';
        this._id = talk._id || '';
    }
}

export class Speaker implements ISpeaker {
    _id: string;
    name: string;
    position: string;
    photo: string;
    bio: string;
    talkId: string;
    twitter: string;
    linkedin: string;
    github: string;

    constructor(speaker) {
        this.name = speaker.name || '';
        this.position = speaker.position || '';
        this.photo = speaker.photo || '';
        this.bio = speaker.bio || '';
        this.talkId = speaker.talkId || '';
        this.twitter = speaker.twitter || '';
        this.linkedin = speaker.linkedin || '';
        this.github = speaker.github || '';
        this._id = speaker._id || '';
    }
}
