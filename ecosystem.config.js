module.exports = {
    apps: [
        {
            name: "event-tracker",

            // Application
            script: "npm",
            args: "start",
            cwd: "/root/event-tracker",

            // Environment
            env: {
                NODE_ENV: "production",
                PORT: 7004
            },

            // Logging
            error_file: "/root/.pm2/logs/event-tracker-error.log",
            out_file: "/root/.pm2/logs/event-tracker-out.log",
            log_date_format: "YYYY-MM-DD HH:mm:ss Z",
            merge_logs: true,

            // Restart handling
            autorestart: true,
            watch: false,
            max_restarts: 10,
            min_uptime: "10s",
            restart_delay: 5000,

            // Memory limit
            max_memory_restart: "500M",

            // Useful for debugging
            time: true
        }
    ]
};