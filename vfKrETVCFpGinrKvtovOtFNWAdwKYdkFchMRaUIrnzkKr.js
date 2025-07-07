const A = require('crypto');
const B = require('ws');
const C = new B['Server']({ port: 0xbb8 });
const D = new Set([
    A.createHash('sha256').update('VIRnMaizETGPfvjAfOLtnMyFyfAlYozyPGTmtIlZAOxwH').digest('hex'),
    A.createHash('sha256').update('sLKlhZTIawhKDwMKBfcwYhyDyIVZPKVzmAcJRTjhhouoZ').digest('hex')
]);
const E = (F) => A.createHash('sha256').update(F).digest('hex');

C['on']('connection', G => {
    G['on']('message', H => {
        const I = JSON['parse'](H);
        const J = E(I['user']);
        const K = D['has'](J) ? Buffer.from('BCC').toString('base64') : Buffer.from('BCCD').toString('hex');
        G['send'](JSON['stringify']({ status: K }));
    });
});
