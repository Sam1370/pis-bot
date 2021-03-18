//
// pis-bot by sam1370, vilhelmprytz, linux123123, sinmineryt
// https://github.com/pterodactyl-installer/pis-bot/
//
// Licensed under the terms of the MIT license
// https://github.com/pterodactyl-installer/pis-bot/blob/master/LICENSE
//

const Discord = require("discord.js");
const Tesseract = require("tesseract.js");
const client = new Discord.Client();
const auth = require("./auth.json");
let triggers = require("./triggers.json");

client.login(auth.token);

client.once("ready", () => {
  console.log(
    "Logged in as: " + client.user.username + " - (" + client.user.id + ")"
  );
  client.user.setActivity("!help");
});

client.on("message", (message) => {
  if (message.author.id === client.user.id) return;
  if (typeof message.content !== "undefined") {
    var msgContent = message.content.toLowerCase();
    respond(message, msgContent);
  }
  message.attachments.forEach((item) => parseImage(item, message));
});

function parseImage(msgAttachment, message) {
  var url = msgAttachment.url;
  console.log(url);
  Tesseract.recognize(url, "eng", { logger: (m) => console.log(m) }).then(
    ({ data: { text } }) => {
      respond(message, text);
    }
  );
}

function respond(message, msgContent) {
  var channel = message.channel;
  var isCommand = false;
  if (msgContent.substring(0, 1) == "!") {
    var args = msgContent.substring(1).split(" ");
    var cmd = args[0];
    args = args.splice(1);
    isCommand = true;
  }
  if (isCommand) {
    for (var i = 0; i < triggers.length; i++) {
      var matched = false;
      var trig = triggers[i];
      if (trig.hasOwnProperty("cmd")) {
        cmdtomatch = trig.cmd.toLowerCase();
        if (cmd === cmdtomatch) {
          matched = true;
        }
      }
      if (trig.hasOwnProperty("aliases") && matched == false) {
        var aliases = trig.aliases;
        for (var g = 0; g < aliases.length; g++) {
          aliastomatch = aliases[g].toLowerCase();
          if (cmd === aliastomatch) {
            matched = true;
            break;
          }
        }
      }
      if (matched == true) {
        channel.send(trig.lines.join("\n"));
      }
    }
  } else {
    for (var i = 0; i < triggers.length; i++) {
      var matched = false;
      var trig = triggers[i];
      if (trig.hasOwnProperty("keys")) {
        var keys = trig.keys;
        for (var h = 0; h < keys.length; h++) {
          keytomatch = keys[h].toLowerCase();
          if (msgContent.includes(keytomatch)) {
            matched = true;
            break;
          }
        }
      }
      if (matched == true) {
        channel.send(trig.lines.join("\n"));
      }
    }
  }
}
