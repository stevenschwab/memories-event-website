module.exports = {
    ensureAuth: function (req, res, next) {
        if (req.isAuthenticated()) { // if user is logged in, kick them to the controller
            return next();
        } else {
            res.redirect('/');
        }
    }
};