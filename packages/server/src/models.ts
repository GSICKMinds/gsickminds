
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

export interface IData {
    info: IInfo;
    venue: IVenue;
    contribution: IContribution;
    sponsors: ISponsors[];
}
export interface IVenue {
    place: string;
    phone: string;
    map: string;
    web: string;
}
export interface ISponsors {
    price: string;
    name: string;
    features: string;
    url: string;
}
export interface IContribution {
    info: string;
    talk: string;
    sponsor: string;
    help: string;
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

export interface ISponsor {
    name: string;
    url: string;
    image: string;
    eventId: string;
}

import { Document } from 'mongoose';

export interface User extends Document, IAuth { }
export interface Data extends Document, IData { }
export interface Event extends Document, IEvent { }
export interface Member extends Document, IMember { }

export interface Sponsor extends Document, ISponsor { }
