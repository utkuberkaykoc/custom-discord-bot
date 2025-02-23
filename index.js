const { Client } = require("oceanic.js");
const fetch = require("node-fetch");

/**
 * Starts the Discord bot with custom settings.
 * @param {Object} options - Bot configuration options.
 * @param {string} options.token - Discord bot token.
 * @param {string} [options.prefix='!'] - Command prefix.
 * @param {Object} [options.commands={}] - Custom command-response pairs.
 * @param {string} [options.status='online'] - Bot status ('online', 'idle', 'dnd').
 * @param {string} [options.statusMessage=''] - Custom status message.
 * @param {number} [options.statusType=0] - Activity type (0: Playing, 1: Streaming, 2: Listening, 3: Watching).
 * @param {string} [options.avatarUrl=''] - Bot avatar URL.
 * @param {string} [options.username=''] - Bot username.
 */
function startBot({
  token,
  prefix = "!",
  commands = {},
  status = "online",
  statusMessage = "",
  statusType = 0,
  avatarUrl = "",
  username = "",
}) {
  if (!token) {
    console.error("❌ ERROR: Bot token is required!");
    return;
  }
  if (token === "YOUR_DISCORD_BOT_TOKEN") {
    console.error("❌ ERROR: Please replace the 'YOUR_DISCORD_BOT_TOKEN' with your Discord bot token!");
    return;
  }

  const client = new Client({
    auth: `Bot ${token}`,
    gateway: {
      intents: ["GUILDS", "GUILD_MESSAGES", "MESSAGE_CONTENT"]
    },
  });

  client.on("ready", async () => {
    try {
      console.log(`✅ Bot is online as ${client.user.username}`);

      client.editStatus(status, [{ name: statusMessage, type: statusType }]);

      if (username && client.user.username !== username) {
        try {
          await client.user.edit({ username });
          console.log(`🔹 Username set to: ${username}`);
        } catch (error) {
          console.error("❌ Error setting username:", error.message);
        }
      }

      if (avatarUrl) {
        try {
          const response = await fetch(avatarUrl);
          const buffer = await response.buffer();
          await client.user.edit({
            avatar: `data:image/png;base64,${buffer.toString("base64")}`,
          });
          console.log("🖼 Avatar updated successfully!");
        } catch (error) {
          console.error("❌ Error setting avatar:", error.message);
        }
      }
    } catch (error) {
      console.error("❌ Error during bot initialization:", error.message);
    }
  });

  client.on("messageCreate", async (message) => {
    try {
      if (!message.content.startsWith(prefix) || message.author.bot) return;

      const command = message.content.slice(prefix.length).trim().toLowerCase();
      if (commands[command]) {
        await message.channel.createMessage({ content: commands[command] });
      }
    } catch (error) {
      console.error("❌ Error handling message:", error.message);
    }
  });

  try {
    client.connect();
  } catch (error) {
    console.error("❌ Error connecting to Discord:", error.message);
  }
}

module.exports = { startBot };