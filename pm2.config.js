/*
    Pm2 configuration
*/
module.exports = {
    apps: [
        {
            name: "project-securer-api",
            script: "./build/index.js",
            watch: true,
            env: {
                "MODE": "production"
            }
        }
    ]
};