# pis-bot

![Travis (.com)](https://img.shields.io/travis/com/Sam1370/pis-bot)
![GitHub](https://img.shields.io/github/license/Sam1370/pis-bot)

This is a support bot for the [Pterodactyl Installation Script Discord](https://discord.gg/zhUu4rv), but feel free to adapt it for your own uses. It is a simple bot that responds to commands and keywords and gives a response.

## Requirements

Nodejs v12.0.0 or newer is required. You can install that using:

```bash
curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -
sudo apt-get install -y nodejs
```

## Installation

`git clone` the repository. Run `npm install`.

## Configuration

Commands and keywords are defined in `triggers.json`.

Create a file named `auth.json` and put your token in it.

```json
{
  "token": "your-bot-token"
}
```

## Running

One-time start: `node index.js`

Encapsulated in while-true loop: `start-bot.sh`

As a system service: `install-service.sh && systemctl daemon-reload` then when you want to start: `systemctl start pis-bot`

## Staying updated

To stay updated with the latest versions, you can run a cronjob to automatically pull the latest version from the GitHub. Run `crontab -e` and add this at the end of the file:

```bash
*/1 * * * * su -s /bin/sh root -c 'cd /root/pis-bot/ && /usr/bin/git update-index --assume-unchanged auth.json && /usr/bin/git pull origin master'
```

If you are using the system service and want to restart it, use this instead:

```
*/1 * * * * su -s /bin/sh root -c 'cd /root/pis-bot/ && /usr/bin/git update-index --assume-unchanged auth.json && /usr/bin/git pull origin master && systemctl restart pis-bot'
```
