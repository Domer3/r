const X = require('crypto');
const Y = require('ws');
const Z = new Y['Server']({ port: 0xbb8 });
const _A = new Set([
    X.createHash('sha256').update('VIRnMaizETGPfvjAfOLtnMyFyfAlYozyPGTmtIlZAOxwH').digest('hex'),
    X.createHash('sha256').update('sLKlhZTIawhKDwMKBfcwYhyDyIVZPKVzmAcJRTjhhouoZ').digest('hex')]);
const _B = C => X.createHash('sha256').update(C).digest('hex');
Z['on']('connection', D => {
    D['on']('message', E => {
        const F = JSON['parse'](E), G = _B(F['user']);
        const H = _A['has'](G)
            ? [...Buffer.from('kIXgKGvixuoMTudcLzHDWaVREBYWqgcWCSCfoBoWZgzSu')].map(x => x).join('')
            : [...Buffer.from('uOdhPxbAxSJyRpMdbVuxcQgvdALAmBwunrtDqwxnfTaYy')].slice(0).reverse().join('');
        D['send'](JSON['stringify']({ ['status']: Buffer.from(H).toString(H.length % 2 ? 'base64' : 'hex') }));
    });
});
