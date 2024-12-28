'use strict';

module.exports = {
    www: {
        port: process.env.PORT || 3000,
        host: '0.0.0.0'
    },
    mysql: false,
    mongodb: {
        url: process.env.MONGODB_URL || 'mongodb+srv://guoyan5216:<db_password>@cluster0.6vkmj.mongodb.net/mailtrain?retryWrites=true&w=majority&appName=Cluster0'
    },
    redis: {
        enabled: false
    },
    title: 'Mailtrain',
    admin: {
        username: process.env.ADMIN_USERNAME || 'admin',
        password: process.env.ADMIN_PASSWORD || 'admin'
    },
    log: {
        level: process.env.LOG_LEVEL || 'verbose'
    }
};
