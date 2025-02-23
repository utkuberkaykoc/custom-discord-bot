# Custom Discord Bot 🤖  

A highly customizable, lightweight, and powerful Discord bot built with **Oceanic.js**. Configure commands, bot status, activity, avatar, and username dynamically—without touching any config files! 🚀

![NPM Version](https://img.shields.io/npm/v/custom-discord-bot?color=blue&style=flat-square)  
![Downloads](https://img.shields.io/npm/dt/custom-discord-bot?color=green&style=flat-square)  
![License](https://img.shields.io/npm/l/custom-discord-bot?style=flat-square)  

---

## 📦 Installation  

```sh
npm install custom-discord-bot
```

---

## 🚀 Features  
✅ **Fully Customizable Commands** – Define responses dynamically.  
✅ **Set Custom Status & Presence** – Show what your bot is doing.  
✅ **Update Avatar & Username** – Modify appearance instantly.  
✅ **Ultra Lightweight & Fast** – Built with **Oceanic.js** for optimal performance.  
✅ **Plug & Play** – No config files, just pass options dynamically!  

---

## 🔥 Quick Start  

```js
const { startBot } = require("custom-discord-bot");

startBot({
  token: "YOUR_DISCORD_BOT_TOKEN",
  prefix: "!",
  status: "online", // "online", "dnd", "idle"
  statusMessage: "Listening to commands! 🎧",
  statusType: 2, // 0: Playing, 1: Streaming, 2: Listening, 3: Watching
  avatarUrl: "https://example.com/avatar.png",
  username: "CustomBot",
  commands: {
    "ping": "Pong! 🏓",
    "hello": "Hello there! 👋",
    "bot": "I'm a simple bot powered by Oceanic.js! 🤖"
  }
});
```

---

## 📌 Configuration Options  

| Option         | Type     | Default  | Description |
|---------------|---------|----------|-------------|
| `token`       | string  | Required | Your Discord bot token. |
| `prefix`      | string  | `"!"`    | Command prefix. |
| `status`      | string  | `"online"` | Bot status (`online`, `dnd`, `idle`). |
| `statusMessage` | string | `""`     | Custom status message (e.g., `"Listening to commands!"`). |
| `statusType`  | number  | `0`      | Activity type (`0`: Playing, `1`: Streaming, `2`: Listening, `3`: Watching). |
| `avatarUrl`   | string  | `""`      | Bot avatar URL. |
| `username`    | string  | `""`      | Bot username. |
| `commands`    | object  | `{}`      | Custom commands `{ "command": "response" }`. |

---

## 🛠️ Contributing  
Pull requests are welcome! Fork the repo, create a branch, and submit a PR. 🚀  

---

## 📜 License  
This project is licensed under the **MIT License**.  

---

## 🌟 Support & Contact  
- **GitHub Issues:** [Report Bugs or Request Features](https://github.com/utkuberkaykoc/custom-discord-bot/issues)  
- **Give a Star:** ⭐ If you love this package, show some support!  

🚀 **Now go build something awesome!** 🎮✨  
