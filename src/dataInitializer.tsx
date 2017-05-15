import ContentModel from './app/Content/ContentModel';

const dummyData = [
	{
		id: 0,
		name: 'Some Name',
		imgName: 'Image',
		description: 'Lorem ipsum dolor...'
	},
	{
		id: 1,
		name: 'Some Name',
		imgName: 'Image',
		description: 'Lorem ipsum dolor...'
	},
	{
		id: 2,
		name: 'Some Name',
		imgName: 'Image',
		description: 'Lorem ipsum dolor...'
	},
	{
		id: 3,
		name: 'Some Name',
		imgName: 'Image',
		description: 'Lorem ipsum dolor...'
	},
	{
		id: 4,
		name: 'Some Name',
		imgName: 'Image',
		description: 'Lorem ipsum dolor...'
	}
];

export const DummyData:Array<ContentModel> = [];


function _initializeDummyData() {
	for (var i = 0; i < 4; i++) {
		let newEntry = new ContentModel(dummyData[i].id, dummyData[i].name, dummyData[i].imgName, dummyData[i].description);
		DummyData.push(newEntry);
	}
};


_initializeDummyData();
