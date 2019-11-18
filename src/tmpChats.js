const dummyChat = {
	name: 'Jeff',
	messageBase: [
		{
			id: 12,
			userName: 'Jeff',
			content: 'Do not forget about the meeting',
			addedAt: '12:03',
		},
	],
};
const tmpChats = {
	42: dummyChat,
};
const dummyChat2 = {
	name: 'Brock',
	messageBase: [
		{ id: 45, userName: 'Brock', content: 'Hello there', addedAt: '15:05' },
	],
};
tmpChats[34] = dummyChat2;

export default tmpChats;
