module.exports = {
    apps: [
        {
            name: "express",
            script: __dirname + "/bin/www",
            "watch": ["express"],
            "ignore_watch": ["node_modules", "log"],
            "watch_options": {
                "followSymlinks": false
            },
            "instances": 1,
            exec_mode: "cluster",
            // log_file: __dirname + "/logs/socket.log",
            // error_file: __dirname + "/logs/err.log",
            // out_file: __dirname + "/logs/out.log",
            // merge_logs: false,
            // og_date_format: "YYYY - MM - DD HH: mm Z",
            env: {
                "NODE_ENV": "development",
            },
            env_production: {
                "NODE_ENV": "production"
            }
        }
    ]
};