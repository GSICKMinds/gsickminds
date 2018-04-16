import { IAuth, IContribution, IEvent, IInfo, IMember, ISpeaker, ISponsor, ISponsorType, ITalk, IVenue } from '@models/models';

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

export class Event implements IEvent {
    _id: string;
    date: string;

    constructor(event?) {
        this._id = event._id || '';
        this.date = event.date || '';
    }
}

export class Member implements IMember {
    name: string;
    position: string;
    photo: string;
    twitter: string;
    linkedin: string;
    github: string;

    constructor(member?) {
        this.name = member.name || '';
        this.position = member.position || '';
        this.photo = member.photo || '';
        this.twitter = member.twitter || '';
        this.linkedin = member.linkedin || '';
        this.github = member.github || '';
    }
}

export class Info implements IInfo {
    name: string;
    description: string;
    address: string;
    phone: string;
    twitter: string;
    telegram: string;
    mail: string;
    constructor(info?) {
        this.name = info.name || '';
        this.description = info.description || '';
        this.address = info.address || '';
        this.phone = info.phone || '';
        this.twitter = info.twitter || '';
        this.telegram = info.telegram || '';
        this.mail = info.mail || '';
    }
}

export class Auth implements IAuth {
    username;
    password;
    constructor() {
        this.username = '';
        this.password = '';
    }
}

export class Contribution implements IContribution {
    info: string;
    talk: string;
    sponsor: string;
    help: string;
    constructor(contribution) {
        this.info = contribution.info || '';
        this.talk = contribution.talk || '';
        this.sponsor = contribution.sponsor || '';
        this.help = contribution.help || '';
    }

}

export class SponsorType implements ISponsorType {
    price: string;
    name: string;
    features: string;
    url: string;

    constructor(sponsor) {
        this.price = ('price' in sponsor) ? sponsor.price : '';
        this.name = ('name' in sponsor) ? sponsor.name : '';
        this.features = ('features' in sponsor) ? sponsor.features : '';
        this.url = ('url' in sponsor) ? sponsor.url : '';
    }
}

export class Venue implements IVenue {
    place: string;
    phone: string;
    map: string;
    web: string;

    constructor(venue) {
        this.place = venue.place || '';
        this.phone = venue.phone || '';
        this.map = venue.map || '';
        this.web = venue.web || '';
    }

}

export class Sponsor implements ISponsor {
    name: string;
    url: string;
    image: string;
    active: boolean;
    type: string;

    constructor(sponsor) {
        this.name = sponsor.name || '';
        this.url = sponsor.url || '';
        this.image = sponsor.image || '';
        this.active = sponsor.active || true;
        this.type = sponsor.type || '';
    }
}
