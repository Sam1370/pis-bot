import { Trigger } from '../interfaces/Trigger';

export const triggers: Trigger[] = [
    {
        cmd: 'help',
        aliases: ['helpme', 'commands', 'cmds'],
        keys: [
            'create a list of commands',
            'get a list of commands',
            'where is the list of commands',
            'make a list of commands',
        ],
        lines: [
            '**Available commands**',
            '`!pdir` gives the panel directory',
            '`!wdir` gives wings/daemon directory',
            '`!logs` shows how to retrieve logs for the panel and daemon',
            '`!install` gives the master installation script',
            '`!check` gives a useful command to check for panel errors',
            '`!ncheck` gives a command to check nginx configuration, gives nginx configuration directory',
            '`!nstart`, `!nrestart`, `!nstop`, and `!nstatus` all give instructions on how to perform those respective actions to nginx using systemctl',
            '`!wstart`, `!wrestart`, `!wstop`, and `!wstatus` perform similar functions as above except for wings',
            '`!config` provides a link to the official instructions on how to manually configure the daemon',
            '`!storage` provides the location in which server files are stored',
            '`!muser` gives instructions on how to create a new user for the panel',
            "`!eggs` gives a link to parkervcp's collection of public eggs",
            '`!sftpinuse` gives instructions on how to diagnose an SFTP binding error',
            '`!arcio` gives instructions on how to use the arc.io CDN on your website.',
            '`!sslfail` gives instrucions to get certificates after an error.',
            '`!binderror` gives general troubleshooting steps for an error encountered while trying to bind to an IP and port.',
            '`!versions` gives information on the versions the script supports.',
            '`!logsmissing` gives information on how to retrieve the logs manually.',
            '',
            'These commands are paired with a list of keywords which trigger messages.',
            'Find more on the GitHub: <https://github.com/Sam1370/pis-bot>',
        ],
    },
    {
        cmd: 'pdir',
        aliases: ['pdir', 'paneldir'],
        keys: [
            'where is the panel directory',
            'can somebody tell me the panel directory',
        ],
        lines: ['Default panel directory is `/var/www/pterodactyl/`'],
    },
    {
        cmd: 'wdir',
        aliases: ['wdir', 'wingsdir', 'ddir', 'daemondir'],
        keys: [
            'where is the daemon directory',
            'can somebody tell me the daemon directory',
            'where is the wings directory',
            'can somebody tell me the wings directory',
        ],
        lines: [
            'The wings files are stored in:',
            'configs in `/etc/pterodactyl/`',
            'executable in `/usr/local/bin/`',
        ],
    },
    {
        cmd: 'logs',
        aliases: ['log', 'o,l.gs', 'lokgs', 'logas'],
        keys: [
            'how to get the logs',
            'how do I get the logs',
            'where to find the logs',
            'find daemon logs',
            'find logs',
            'find panel logs',
            'find the daemon logs',
            'find the panel logs',
            'find any logs',
            'get the logs',
        ],
        lines: [
            'Panel logs: ```tail -n 100 /var/www/pterodactyl/storage/logs/laravel-$(date +%F).log | nc bin.ptdl.co 99```',
            'Daemon logs: ```sudo wings diagnostics --debug```',
        ],
    },
    {
        cmd: 'install',
        aliases: ['inst', 'instal'],
        keys: [
            'how to install the script',
            'what is the command to install the script',
            'how do I install the daemon',
            'how do I install the panel',
            'how do I install the script',
            'how do I install the panel',
            'how to install the panel',
            'how do I install the panel',
        ],
        lines: [
            'Install with:',
            '```bash\nbash <(curl -s https://pterodactyl-installer.se)```',
            'If that fails, it is possible to do the same thing by running this:',
            '```bash\nwget https://pterodactyl-installer.se/i.sh\nbash i.sh```',
        ],
    },
    {
        cmd: 'check',
        aliases: ['errorcheck', 'checkerror'],
        keys: ['how do I check for panel errors', 'check panel errors'],
        lines: [
            'This command can be useful to check for errors on the panel:',
            "(if everything is alright it doesn't give any output, to quit `ctrl + c`)",
            '`/usr/bin/php /var/www/pterodactyl/artisan queue:work --queue=high,standard,low --sleep=3 --tries=3`',
        ],
    },
    {
        cmd: 'nstart',
        aliases: ['ngstart', 'nginxstart'],
        keys: ['how do I start nginx', 'how to start nginx'],
        lines: ['Start nginx with `systemctl start nginx`'],
    },
    {
        cmd: 'nrestart',
        aliases: ['nginxrestart', 'ngrestart'],
        keys: [
            'how do I restart nginx',
            'restart nginx how',
            'restart nginx? how do I do that?',
            'restarting nginx is impossible',
        ],
        lines: ['Restart nginx with `systemctl restart nginx`'],
    },
    {
        cmd: 'nstop',
        aliases: ['nginxstop', 'ngstop'],
        keys: ['how do I stop nginx', 'stop nginx how'],
        lines: ['Stop nginx with `systemctl stop nginx`'],
    },
    {
        cmd: 'nstatus',
        aliases: ['nginxstatus', 'ngstatus'],
        keys: [
            'how do I check nginx logs',
            'how do I check the status of nginx',
        ],
        lines: ['Check status and logs of nginx with `systemctl status nginx`'],
    },
    {
        cmd: 'ncheck',
        aliases: ['ngcheck', 'nginxcheck'],
        keys: [
            'how do I check nginx configuration',
            'how to check nginx configuration',
        ],
        lines: [
            'To check nginx configuration use `nginx -t`. Nginx configuration is stored in:',
            'Ubuntu/Debian: `/etc/nginx/sites-available/pterodactyl.conf`',
            'CentOS: `/etc/nginx/conf.d/pterodactyl.conf`',
        ],
    },
    {
        cmd: 'wstart',
        aliases: ['wistart', 'wingstart', 'wingsstart'],
        keys: [
            'how do I start wings',
            'how do I start wings',
            'start the daemon',
            'how to start deamon',
            'how to start daemon',
            'how to start wings',
            'systemctl start daemon',
        ],
        lines: [
            'Start the daemon after configuration with `systemctl start wings`',
        ],
    },
    {
        cmd: 'wrestart',
        aliases: ['wirestart', 'wingsrestart', 'wgrestart'],
        keys: [
            'how to restart wings',
            'restart wings how',
            'restart the daemon',
            'systemctl restart daemon',
        ],
        lines: ['Restart the daemon with `systemctl restart wings`'],
    },
    {
        cmd: 'wstop',
        aliases: ['wgstop', 'wingsstop', 'wingstop'],
        keys: [
            'how do I stop wings',
            'stop the daemon',
            'how do I stop the daemon',
            'how to stop daemon',
            'how to stop wings',
            'systemctl stop daemon',
        ],
        lines: ['Stop the daemon with `systemctl stop wings`'],
    },
    {
        cmd: 'wstatus',
        aliases: ['wgstatus', 'wingstatus', 'wingsstatus'],
        keys: [
            'check daemon status',
            'check the status of the daemon',
            'how to check wings status',
            'how to cehck wings status',
            'how do I know if the daemon is installed',
            'systemctl status daemon',
        ],
        lines: [
            'Check status and logs of the daemon with `systemctl status wings`',
        ],
    },
    {
        cmd: 'config',
        keys: [
            'config location',
            'how to configure the daemon',
            'No config file located for Daemon',
            'Please create a configuration file',
            "Cannot find module 'srv/daemon/config/'",
        ],
        lines: [
            'Here is the guide to configuring your daemon:',
            '<https://pterodactyl.io/wings/1.0/installing.html#configure>',
        ],
    },
    {
        cmd: 'redis',
        aliases: ['rediswrong'],
        keys: [
            'dependency problems prevent configuration of redis:',
            'Package redis-server is not configured yet.',
        ],
        lines: [
            "Most likely your server doesn't support IPV6.",
            'To fix run ```sed -i "s/bind .*/bind 127.0.0.1/g" /etc/redis/redis.conf``` and run the script again.',
        ],
    },
    {
        cmd: 'storage',
        aliases: ['strg', 'serverfiles'],
        keys: [
            'where are the server files stored',
            'server file storage location',
        ],
        lines: [
            'The server files on the daemon are stored: ```/var/lib/pterodactyl/volumes/```',
        ],
    },
    {
        cmd: 'muser',
        aliases: ['createuser', 'makeuser'],
        keys: ['how do I make a user', 'how to make a user'],
        lines: [
            'Create a new panel user by running: ```cd /var/www/pterodactyl/\nphp artisan p:user:make```',
        ],
    },
    {
        cmd: 'error500',
        keys: [
            'error 500',
            '500 error',
            '500 http',
            '500 problem',
            'http 500',
            'code 500',
            'something went wrong',
        ],
        lines: [
            'Error 500 can mean a lot of things. Run the command below to get the error logs from the panel, it may help in diagnosing the issues.\n```tail -n 100 /var/www/pterodactyl/storage/logs/laravel-$(date +%F).log | nc bin.ptdl.co 99```',
        ],
    },
    {
        cmd: 'eggs',
        aliases: ['egg'],
        keys: [
            'where to get the eggs',
            'i need to install eggs',
            'help me please i have no idea how to install eggs',
            "i'll give you money if you install eggs for me",
        ],
        lines: [
            "parkervcp's collection of public eggs can be found here: <https://github.com/parkervcp/eggs>",
        ],
    },
    {
        cmd: 'arcio',
        aliases: ['arc.io', 'ark.io', 'arkio', 'io.arc'],
        keys: ['how to set up arc', 'set up arc.io how', 'arc.io need help'],
        lines: [
            'To set up arc.io on the Pterodactyl Panel, first follow the official instructions on the arc.io website.',
            'When you get to the section where it wants you to add their widget to your site, copy the `<script>` tag.',
            'The copied text should look like this: `<script async src="https://arc.io/widget.js#xxxxxxxx"></script>`',
            'In your server, run `cd /var/www/pterodactyl/resources/views/templates/`.',
            'Edit the file `wrapper.blade.php`. Add the `<script>` tag to your `<head>` section.',
            'You should be done! Please ping the helpers if this does not work; the method may need to be fixed or updated.',
        ],
    },
    {
        cmd: 'daemonException',
        keys: ['exception while attempting to communicate with the daemon'],
        lines: [
            'Your panel cannot connect to your daemon. Check: Is it online? (`systemctl status wings`) Is your firewall blocking the connections? (If so, run `ufw allow 8080` and `ufw allow 2022`).',
        ],
    },
    {
        cmd: 'binderror',
        keys: ['driver failed programming external connectivity'],
        lines: [
            "Your daemon failed to bind to the IP and port needed for the service. If this is an error you get while trying to start a Pterodactyl server, the allocations are probably misconfigured. Unless you're using a special setup, bind to `0.0.0.0`, not your external IP address. If that doesn't work, check if your port is in use with `netstat -tulpn | grep <port>`.",
        ],
    },
    {
        cmd: 'sslfail',
        aliases: ['letsencrypt', 'sslerror'],
        keys: [
            'ssl failed',
            'letsencrypt failed',
            "The process of obtaining a Let's Encrypt certificate failed!",
            'certificate failed',
        ],
        lines: [
            "Your certificates weren't generated.",
            'You need to make sure ports 80, 443 are open.',
            'Also make sure your domains DNS settings are correct.',
            'To try obtaining certificates again use:',
            '```certbot certonly --standalone -d panel.example.com```',
        ],
    },
    {
        cmd: 'nologs',
        keys: ['for reading: No such file or directory'],
        lines: [
            'There are no panel logs for today. This error may not be related directly to the panel. If you want to check earlier logs, go into the `/var/pterodactyl/storage/logs` directory',
        ],
    },
    {
        cmd: 'dockersocket',
        keys: ['locate a suitable socket at path specified in configuration'],
        lines: [
            'Docker might not be running. Run `systemctl status docker` to check its status',
        ],
    },
    {
        cmd: 'onlyssl',
        keys: ['the content must be served over HTTPS'],
        lines: [
            'Enable SSL on the server you are trying to access. Clearing the config cache might help as well.',
        ],
    },
    {
        cmd: 'versions',
        keys: [
            'does it work on ubuntu',
            'does it work on debian',
            'does it work on centos',
            'does it work with apache',
            'does it work with ubuntu',
            'does it work with debian',
            'does it work with centos',
        ],
        lines: [
            'The installation script supports the NGINX webserver and these operating systems:',
            'Ubuntu: 18.04, 20.04.',
            'Debian: 9, 10.',
            'CentOS: 7, 8.',
        ],
    },
    {
        cmd: 'logsmissing',
        keys: ['panel logs I get No such file or directory'],
        lines: [
            "The logs for that day don't exist. Instead, look in the log directory itself.",
            '```',
            'cd /var/www/pterodactyl/storage/logs/',
            '```',
        ],
    },
    {
        cmd: 'sftpinuse',
        keys: ['address already in use 0.0.0.0:2022'],
        lines: [
            'Port 2022, the port for the SFTP server, is in use.',
            '**On 0.7 panel** If you installed the standalone SFTP server, make sure you added `"enabled": false,` to your `core.json`, under the section `"sftp"`.',
        ],
    },
    {
        cmd: 'minstall',
        aliases: ['minst', 'minstal'],
        keys: [
            'how to install the mobile module',
            'how to install pterodactyl mobile',
            'how to add mobile support',
            'how to get mobile support',
            'how to install mobile support',
        ],
        lines: [
            '**Only works for 0.7**',
            'To install support for the Pterodactyl mobile app, run these commands in your panel directory:',
            '```composer config repositories.cloud composer https://packages.pterodactyl.cloud',
            '',
            'composer require pterodactyl/mobile-addon --update-no-dev --optimize-autoloader',
            '',
            'php artisan migrate```',
        ],
    },
    {
        cmd: 'daemonFatal',
        keys: ['fatal error was encountered while starting this server'],
        lines: [
            'You will need to retrieve error logs from the daemon in order to diagnose this issue: `cd /srv/daemon/ && npm run diagnostics`',
        ],
    },
    {
        cmd: 'xhrPoll',
        keys: ['xhr poll error'],
        lines: [
            'These troubleshooting steps might help: <https://pterodactyl.io/panel/0.7/troubleshooting.html#transfer-exceptions-xhr-poll-error>',
        ],
    },
    {
        cmd: 'oomDisable',
        keys: ['oom disabled field must be true'],
        lines: [
            "The theme you're using is out of date and not ready for pterodactyl 0.7.15 or newer. Contact the theme maintainer to add the oom killer option. If this is the default theme, consider reinstalling the panel files.",
        ],
    },
];
