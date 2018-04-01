import * as passport from 'passport';
import { UnauthorizedException } from '@nestjs/common';

export const jwtMiddleware = (req, res, next) => {
    return passport.authenticate('jwt', { session: false }, (err, user, info) => {
        if (err) {
            next(new UnauthorizedException(err));
        } else if (typeof info !== 'undefined') {
            let message;
            switch (info.message) {
                case 'No auth token':
                case 'invalid signature':
                case 'jwt malformed':
                    message = 'You must provide a valid authenticated access token';
                    break;
                case 'jwt expired':
                    message = 'Your session has expired. Please log in again';
                    break;
            }
            next(new UnauthorizedException(message));
        } else {
            req.user = user;
            next();
        }
    })(req, res, next);
};
