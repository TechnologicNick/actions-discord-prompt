

class Prompt {

    constructor() {

    }

    static fromObject(obj) {
        return Object.assign(new this(), obj);
    }
}

module.exports = Prompt;