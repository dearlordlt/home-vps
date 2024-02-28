module.exports = {
  apps: [{
    name: "home-vps",
    script: "npm",
    args: "start",
    watch: true,
    ignore_watch: ["node_modules", ".next"],
    env: {
      NODE_ENV: "production",
    },
  }],
};