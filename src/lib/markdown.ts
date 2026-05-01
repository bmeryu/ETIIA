import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const contentDirectory = path.join(process.cwd(), 'src/content/insights');

export interface InsightMetadata {
  title: string;
  description: string;
  date: string;
  author: string;
  slug: string;
}

export function getInsightsList(): InsightMetadata[] {
  if (!fs.existsSync(contentDirectory)) {
    return [];
  }
  
  const fileNames = fs.readdirSync(contentDirectory);
  const allInsights = fileNames
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, '');
      const fullPath = path.join(contentDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const matterResult = matter(fileContents);

      return {
        slug,
        title: matterResult.data.title,
        description: matterResult.data.description,
        date: matterResult.data.date,
        author: matterResult.data.author,
      } as InsightMetadata;
    });

  return allInsights.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getInsightBySlug(slug: string) {
  const fullPath = path.join(contentDirectory, `${slug}.md`);
  
  if (!fs.existsSync(fullPath)) {
    return null;
  }
  
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const matterResult = matter(fileContents);

  return {
    slug,
    metadata: {
      title: matterResult.data.title,
      description: matterResult.data.description,
      date: matterResult.data.date,
      author: matterResult.data.author,
    } as InsightMetadata,
    content: matterResult.content,
  };
}
