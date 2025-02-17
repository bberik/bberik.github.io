import Assets from './assets';
import { getSkills } from './skills';
import type { Project } from '../types';
import { base } from '$app/paths';

export const items: Array<Project> = [
	{
		slug: 'mapnotes',
		color: '#ff3e00',
		description:
			'Created a web application by combining ReactJS and Django to facilitate the creation of collaborative mind mapping workspaces, fostering efficient brainstorming and planning sessions.',
		shortDescription:
			'A feature rich mind mapping tool',
		links: [
			{ to: 'https://github.com/bberik/mapnotes', label: 'GitHub' },
			{to: 'https://mapnotes.vercel.app/', label: 'Website'}
		
		],
		logo: Assets.Mapnotes,
		name: 'Mapnotes',
		period: {
			from: new Date(2023, 7, 15),
			to: new Date(2023, 7, 29)
		},
		skills: getSkills('reactjs', 'js', 'css', 'html', 'python', 'django', 'docker', 'aws', 'postgres'),
		type: 'Canvas Tool',
		screenshots: [
			{
				label: 'screen 1',
				src: `${base}/logos/mapnotesDemo.gif`
			}
		]
	}
];

export const title = 'Projects';
