module.exports = {
  apps: [
    {
      name: 'legalsupportnow',
      script: 'node_modules/serve/build/main.js',
      args: '-s dist -l 5000',
      cwd: __dirname,
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '300M',
      env: {
        NODE_ENV: 'production',
      },
    },
  ],
}

