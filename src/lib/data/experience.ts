import Assets from './assets';
import { getSkills } from './skills';
import { ContractType, type Experience } from '../types';

export const items: Array<Experience> = [
	{
		slug: 'giboo',
		company: 'Giboo',
		description: `
- **Orchestrated** end-to-end migration of production databases using AWS DMS, automating schema replication, dependency-aware data syncing, and cut-over workflows. **Reduced downtime by 85%** and eliminated data loss risks.
- **Built** a high-concurrency crawler pipeline (**Scrapy + Playwright**) to automate image extraction, scraping images from **500,000+ websites**.
- **Designed** and automated a fault-tolerant big data pipeline using **AWS Step Functions** and **AWS Glue**, cutting manual monitoring and orchestration by **25 hours/month**.
- **Deployed microservices** with **AWS CDK**, integrating Lambda, API Gateway, SQS, RDS, ECS, and S3 to automate workflows, including **real-time data streaming, email scheduling, file downloading,** and **server error notifications via Slack**.
`.trim(),
		contract: ContractType.FullTime,
		type: 'Software Development',
		location: 'Seoul, South Korea',
		period: { from: new Date(2024, 6, 1), to: new Date(2025, 1, 7) },
		skills: getSkills('python', 'aws', 'awscdk', 'docker', 'fastapi', 'git', 'jenkins', 'pytest', 'selenium', 'playwright', 'linux', 'locust', 'mongodb', 'postgres'),
		name: 'Backend/DevOps Engineer',
		color: 'red',
		links: [{to: 'https://www.giboo.com/', label: 'Home Page', newTab: true}],
		logo: Assets.Giboo,
		shortDescription: 'Automated data pipelines, high-scale web scraping, and cloud-native microservices.'
	},
	{
		slug: 'aka',
		company: 'AKA Cognitive Co. LTD',
		description: `
- Reduced OpenAI API response errors by **73%** by redesigning **Django and Celery** back-end, leveraging OpenAI’s Function Call feature to ensure consistent JSON output for mission-critical tasks.
- Developed a reusable **WebSocket** module adopted by **3 teams** to enable real-time response streaming, resolving data loss issues caused by multiserver architecture.
- Engineered data collection and processing pipelines for LLM fine-tuning, curating **20+ GB** of high-quality chat data (synthetic + real user sessions) while training **3 classification models** using **Sentence Transformers** to achieve **94% accuracy**.
		`.trim(),
		contract: ContractType.Internship,
		type: 'Software Development',
		location: 'Seoul, South Korea',
		period: { from: new Date(2023, 5, 28), to: new Date(2024, 1, 28) },
		skills: getSkills('python', 'reactjs', 'django', 'fastapi', 'docker', 'git', 'js', 'linux', 'selenium'),
		name: 'Backend/AI Engineer',
		color: 'blue',
		links: [{to: 'https://www.akaintelligence.com/', label: 'Home Page', newTab: true}],
		logo: Assets.AKA,
		shortDescription: 'Built scalable backend systems and data pipelines to improve AI reliability and real-time processing.'
	},
	{
		slug: 'prism39',
		company: 'Prism 39, Inc.',
		description: `
- Boosted data processing speed by **2.5x** by replacing Pandas with **Polars**, while cutting storage costs by **66%** by transitioning from Arrow to **Parquet** for optimized compression of archived data.
- Implemented a reusable data export system using **FastAPI and MinIO**, allowing users to save/retrieve complex query results, reducing the average retrieval time by **65-70%**.
- Automated API documentation updates via **Sphinx/Git** integration, reducing manual maintenance time by **12 hours/month**, and implemented **JWT authentication** to secure exclusive access for users.
`.trim(),
		contract: ContractType.Internship,
		type: 'Software Development',
		location: 'Seoul, South Korea',
		period: { from: new Date(2023, 0, 1), to: new Date(2023, 1, 28) },
		skills: getSkills('python', 'js', 'fastapi', 'html', 'css', 'git'),
		name: 'Software Engineer Intern',
		color: 'green',
		links: [{to: 'https://www.prism39.com/', label: 'Home Page', newTab: true}],
		logo: Assets.PRISM39,
		shortDescription: 'Optimized backend performance, data processing, and API efficiency with scalable solutions.'
	}
];

export const title = 'Experience';
