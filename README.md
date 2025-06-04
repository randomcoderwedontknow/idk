# Discord Bot Status Changer [ GlaceYT ]

This Discord bot status changer is a simple JavaScript application that allows you to change your bot's presence status on Discord. You can customize your bot's status to display a specific message or show that it is playing a particular game.

## Usage

1. Clone or download this repository to your local machine or fork it.

2. Install the required dependencies using npm or yarn:

   ```shell
   npm install
   ```

3. Create a `.env` file in the root directory and add your Discord bot token:
   ```
   TOKEN=your-discord-bot-token-here
   ```
   
   To get your Discord bot token:
   1. Go to the [Discord Developer Portal](https://discord.com/developers/applications)
   2. Select your application or create a new one
   3. Go to the "Bot" section
   4. Click "Reset Token" or "Copy" to get your token
   5. Paste the token in your `.env` file

   ⚠️ Never share or commit your bot token! Keep it secret and safe.

4. Start the bot:
   ```shell
   npm start
   ```