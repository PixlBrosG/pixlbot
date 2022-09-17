import cfg from './config.json' assert { type: 'json' };

import { EmbedBuilder } from 'discord.js';

export function Embed(author)
{
	let embed = new EmbedBuilder().setColor(cfg.embedColor);

	return embed.setFooter({
		text: `Requested by ${author.tag}`,
		iconURL: author.iconURL ? author.iconURL : author.displayAvatarURL()
	});
}

export function RandInt(...args)
{
	let min = args[1] ? args[0] : 0;
	let max = args[1] ? args[1] : args[0];

	return Math.floor(Math.random() * (max - min)) + min;
}

export function Choice(list)
{
	return list[Math.floor(Math.random() * list.length)];
}

export function ParseVideo(video)
{
	return `[${video.title}](${video.url})`;
}

export function LevenshteinDistance(s, t)
{
	const m = s.length;
	const n = t.length;

	let v0 = new Array(n + 1);
	let v1 = new Array(n + 1);

	for (let i = 0; i < v0.length; ++i)
		v0[i] = i;

	for (let i = 0; i < m; ++i)
	{
		v1[0] = i + 1;

		for (let j = 0; j < n; ++j)
		{
			const deletionCost = v0[j + 1] + 1;
			const insertionCost = v1[j] + 1;
			const substitutionCost = v0[j] + (s[i] !== t[j]);

			v1[j + 1] = Math.min(deletionCost, insertionCost, substitutionCost);
		}

		let temp = [...v0];
		v0 = [...v1];
		v1 = temp;
	}

	return v0[n];
}