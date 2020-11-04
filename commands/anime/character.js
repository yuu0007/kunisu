const request = require('node-superfetch');
const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');

module.exports = class extends Command {
	constructor(client) {
		super(client, {
			name: 'character',
			aliases: ['ac'],
			memberName: 'character',
			group: 'anime',
			description: 'Sends a random anime character!'
		});
	}

	async run(msg) {
		const { body } = await request.get('https://api.kunisu.tk/anime');
		const embed = new MessageEmbed()
			.setImage(body.img)
			.setTitle(body.name)
			.setDescription(body.about)
			.setURL(body.url)
			.setFooter(`Requested by ${msg.author.tag}`)
			.setTimestamp();
		msg.say(embed);
	}
};
