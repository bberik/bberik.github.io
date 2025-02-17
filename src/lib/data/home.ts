import { Platform } from '$lib/types';
import type { ProfilePicture } from '$lib/types';
import { getSkills } from './skills';
import Assets from './assets';

export const title = 'Home';

export const name = 'Berik';

export const lastName = 'Bazarbayev';

export const description =
	'Backend developer and DevOps engineer with a passion for building scalable data systems, automating workflows, and optimizing cloud infrastructure.';

export const links: Array<{ platform: Platform; link: string }> = [
	{ platform: Platform.GitHub, link: 'https://github.com/bberik' },
	{
		platform: Platform.Linkedin,
		link: 'https://www.linkedin.com/in/berik-bazarbayev/'
	},
	// {
	// 	platform: Platform.Twitter,
	// 	link: 'https://twitter.com/'
	// },
	// {
	// 	platform: Platform.StackOverflow,
	// 	link: 'https://stackoverflow.com/'
	// },
	{
		platform: Platform.Email,
		link: 'berik_bazarbayev@icloud.com'
	},
	// {
	// 	platform: Platform.Youtube,
	// 	link: 'https://www.youtube.com'
	// },
	// {
	// 	platform: Platform.Facebook,
	// 	link: 'https://www.facebook.com'
	// }
];

export const ProfilePic: ProfilePicture = {
	url: Assets.ProfilePic,
	altText: "profile picture"
  };