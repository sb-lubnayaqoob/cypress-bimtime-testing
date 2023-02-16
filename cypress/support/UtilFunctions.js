//

class UtilFunctions {
    constructor(username, password) {
        this.username = username;
        this.password = password;
    }

    login (username, password) {
        if (username == 'admin' && password == 'admin') {
            return true;
        } else {
            return false;
        }
    }
}
module.exports = UtilFunctions;
