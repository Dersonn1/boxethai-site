module.exports = {
  apps: [
    {
      name: "boxethai-site",
      script: "server.js",
      cwd: "/var/www/boxethai-site",
      instances: 1,
      exec_mode: "fork",
      env: {
        NODE_ENV: "production",
        PORT: 3008,
        HOSTNAME: "127.0.0.1",
        NEXT_PUBLIC_SITE_URL: "http://143.95.212.129:8101",
      },
      max_memory_restart: "220M",
      autorestart: true,
    },
  ],
};
