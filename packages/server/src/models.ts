
export interface IEvent {
    date: Date;
}

export interface ITalk {
    title: string;
    duration: string;
    description: string;
    slides: string;
    eventId: string;
}

export interface ISpeaker extends ISocial {
    name: string;
    position: string;
    photo: string;
    bio: string;
    talkId: string;
}

export interface ISocial {
    twitter: string;
    linkedin: string;
    github: string;
}

export interface IMember extends ISocial {
    name: string;
    position: string;
    photo: string;
}

export interface IAuth {
    username: string;
    password: string;
}

export interface IInfo {
    name: string;
    description: string;
    address: string;
    phone: string;
    twitter: string;
    telegram: string;
    mail: string;
}

import { Document } from 'mongoose';

export interface User extends Document, IAuth { }
export interface Info extends Document, IInfo { }
export interface Event extends Document, IEvent { }
export interface Member extends Document, IMember { }