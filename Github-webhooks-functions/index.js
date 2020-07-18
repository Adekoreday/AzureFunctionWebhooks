var Crypto = require('crypto');
   context.log('JavaScript HTTP trigger function processed a request.');

    var hmac = Crypto.createHmac("sha1", "adekoreday");
    var signature = hmac.update(JSON.stringify(req.body)).digest('hex');
    var shaSignature =  `sha1=${signature}`;
    var gitHubSignature = req.headers['x-hub-signature'];

module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');
if (!shaSignature.localeCompare(gitHubSignature)) {
 
if (req.body.pages[0].title){
    context.res = {
        body: "Page is " + req.body.pages[0].title + ", Action is " + req.body.pages[0].action + ", Event Type is " + req.headers['x-github-event']
    };
}
else {
    context.res = {
        status: 400,
        body: ("Invalid payload for Wiki event")
    }
}}else {
    context.res = {
        status: 401,
        body: ("signature do not match")
    }
}
};
