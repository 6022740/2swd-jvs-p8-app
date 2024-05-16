export class Application {
    user = null;

    constructor() {
        document.addEventListener('DOMContentLoaded', () => {
            this.init();
        });
        console.log('Application created');
    }

    updateHtml() {
        if (this.user) {
            document.querySelector('#header .login').style.display = 'none';
            document.querySelector('#header .logout').style.display = 'block';
            document.querySelector('#header .register').style.display = 'none';
            document.querySelector('#header .profile').style.display = 'block';
        } else {
            document.querySelector('#header .login').style.display = 'block';
            document.querySelector('#header .logout').style.display = 'none';
            document.querySelector('#header .register').style.display = 'block';
            document.querySelector('#header .profile').style.display = 'none';
        }
    }

    init() {
        this.updateHtml(); // Call updateHtml() when the DOM is loaded
    }
}