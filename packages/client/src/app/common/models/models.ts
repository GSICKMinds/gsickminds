
export interface IEvent {
    date: string;
}

export interface ITalk {
    _id: string;
    title: string;
    duration: string;
    description: string;
    slides: string;
    eventId: string;
}

export interface ISpeaker extends ISocial {
    _id: string;
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
