import Assets from './assets';
import type { Education } from '../types';

export const items: Array<Education> = [
	{
		degree: `Bachelor's Degree in Computer Science 
(Minor in Electrical Engineering)`.trim(),
		description: "",
		location: 'Daejeon, South Korea',
		logo: Assets.KAIST,
		name: 'Test',
		organization: `Korea Advanced Institute of Science and Technology`.trim(),
		period: { from: new Date(2019, 8, 2), to: new Date(2024, 7, 31) },
		shortDescription: '',
		slug: 'dummy-education-item',
		subjects: [
			'Introduction to Programming', 
			'Discrete Mathematics', 
			'Data Structures', 
			'Introduction to Algorithms', 
			'Computer Organization', 
			'Programming Languages', 
			'Operating Systems and Lab',
			'Introduction to Software Engineering',
			'Introduction to Database',
			'Introduction to Data Science',
			'Machine Learning',
			'Mobile Computing and Applications',
			'AI Based Software Engineering',
			'Machine Learning for Computer Vision',
			'Computer Ethics & Social issues',
			'Building Blockchain and Web3 Applications',
			'Trust and Safety Engineering and Practice',


		]
	},
	// {
	// 	degree: 'PhD of Computer Science',
	// 	description: '',
	// 	location: 'USA',
	// 	logo: Assets.Unknown,
	// 	name: '',
	// 	organization: 'MIT',
	// 	period: { from: new Date(2023, 0, 1) },
	// 	shortDescription: '',
	// 	slug: 'dummy-education-item-2',
	// 	subjects: ['Assembly', 'Rust', 'Computer Architecture', 'Algorithms and Data structures']
	// }
];

export const title = 'Education';
