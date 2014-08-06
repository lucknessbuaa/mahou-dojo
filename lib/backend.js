var express = require("express");
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var encryptPassword = require('./encrypt-password');

var db = require("./mongo").db;

passport.use(new LocalStrategy(
    function(username, password, done) {
        db.collection('user', function(err, user) {
            console.log(err, user);
            if (err) return done(err);

            user.findOne({
                username: username
            }, function(err, user) {
                if (err) return done(err);

                if (!user) {
                    return done(null, false, {
                        message: '用户不存在'
                    });
                }

                if (user.password !== encryptPassword(password)) {
                    return done(null, false, {
                        message: '密码不正确'
                    });
                }

                return done(null, user);
            });
        });
    }
));

passport.serializeUser(function(user, done) {
    done(null, user);
});

passport.deserializeUser(function(user, done) {
    done(null, user);
});

function login_required(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }

    res.redirect('login');
}

var router = express.Router();

router.get('/login', function(req, res) {
    return res.render('backend/login.jade');
});

router.post('/login', function(req, res, next) {
    passport.authenticate('local', function(err, user, info) {
        if (err) {
            return next(err)
        }

        if (!user) {
            console.log(info);
            return res.render('backend/login.jade', {
                error: info.message
            });
        }

        req.logIn(user, function(err) {
            if (err) {
                return next(err);
            }

            return res.redirect('show');
        });
    })(req, res, next);
});

router.get('/show', login_required, function(req, res) {
    return res.render('backend/show.jade');
});

router.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/');
});

module.exports = router;
