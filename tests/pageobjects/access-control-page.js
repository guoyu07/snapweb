var basepage = require('./basepage')

var accessControlPage = Object.create(basepage, {
    /**
     * define elements
     */
    token: {
        get: function() {
            return browser.element('#token');
        }
    },
    submit_btn: {
        get: function() {
            return browser.element('#submit');
        }
    },
    homepage: {
        get: function() {
            return browser.element("header.p-navigation div.p-navigation__logo a[href*='/']");
        }
    },
    store: {
        get: function() {
            return browser.element("nav.p-navigation__nav a[href*=store]");
        }
    },
    settings: {
        get: function() {
            return browser.element("nav.p-navigation__nav a[href*=settings]");
        }
    },
    login_failed: {
        get: function() {
            return browser.element("label.statusmessage.has-error");
        }
    },
    token_cmd: {
        get: function() {
            return browser.element("//*[contains(text(),'sudo snapweb.generate-token')]");
        }
    },
    bugreport: {
        get: function() {
            return browser.element("div.b-layout__footer a[href*=bugs]");
        }
    },

    /**
     * define or overwrite page methods
     */
    open: {
        value: function() {
            browser.deleteCookie();
            basepage.open.call(this, 'access-control');
        }
    },

    submit_token: {
        value: function(token_value) {

            this.token.setValue(token_value);
            this.submit_btn.click();

        }
    }

});

module.exports = accessControlPage