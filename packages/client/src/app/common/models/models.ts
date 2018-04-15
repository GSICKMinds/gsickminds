
export interface IEvent {
    date: string;
    _id: string;
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

export interface IAlert {
    type: string;
    message: string;
}

export interface HttpError {
    statusCode: number;
    error: string;
    message: string;
}


export interface IData {
    info: IInfo;
    venue: IVenue;
    contribution: IContribution;
    sponsors: ISponsor[];
}
export interface IVenue {
    place: string;
    phone: string;
    map: string;
    web: string;
}
export interface ISponsor {
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

