exports.creds = {
    identityMetadata: 'https://login.microsoftonline.com/common/v2.0/.well-known/openid-configuration',

    clientID: '256e3367-22e4-4493-b2ca-8a33ea0cc25f', //how ms knows what app is making a request

    clientSecret: 'VwU8Q~Gwly2VwsxC-~lz1KkT-zBbobAT-VSbvaK.', // ms secret

    responseType: 'id_token',

    responseMode: 'form_post',

    redirectUrl: 'http://localhost:2121/auth/openid/return',

    allowHttpForRedirectUrl: true,

    validateIssuer: false,

    issuer: null,

    passReqToCallback: false,

    useCookieInsteadOfSession: false,

    cookieEncryptionKeys: [
        { 'key': '12345678901234567890123456789012', 'iv': '123456789012'},
        { 'key': 'abcdefghijklmnopqrstuvwxyzabcdef', 'iv': 'abcdefghijkl'}
    ],

    scope: ['profile', 'offline_access', 'https://graph.microsoft.com/mail.read'],

    loggingLevel: 'info',

    nonceLifetime: null,

    nonceMaxAmount: 5,

    clockSkew: null,
};

exports.destroySessionUrl = 'http://localhost:2121';

exports.useMongoDBSessionStore = false;

exports.databaseUri = 'mongodb://localhost/OIDCStrategy';

exports.mongoDBSessionMaxAge = 24 * 60 * 60;