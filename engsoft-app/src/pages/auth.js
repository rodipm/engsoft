

class Auth {

    constructor() {
        
        
    }

    

    login() {
        

        localStorage.setItem('authentication', true);
    }

    logout() {
        

        localStorage.setItem('authentication', false);
    }

    isAuthenticated() {
        const logState = localStorage.getItem('authentication') === 'true';
        const logged = logState ? true : false;
        return logged;
    }
}

export default new Auth();