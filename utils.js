function freeBody(req) {
    return new Promise((resolve, reject) => {
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString();
        });

        req.on('end', () => {
            resolve(body);
        });
    });
}

module.exports = {
    freeBody
};