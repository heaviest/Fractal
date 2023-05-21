fetch("https://discord.com/api/guilds/1081345998762283008/widget.json").then(
	async (d) => {
		const data = await d.json();
		console.log(data);
		document.querySelectorAll("a.discord").forEach((el) => {
			el.href = data.instant_invite
				? data.instant_invite
				: "https://discord.gg/shardproject";
		});
	}
);
