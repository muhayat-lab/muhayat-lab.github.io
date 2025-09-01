import { getCollection } from 'astro:content';

export async function GET() {
  const posts = await getCollection('posts');
  const courses = await getCollection('courses');
  const items = [
    ...posts.map(p => ({ type: 'post', slug: `/posts/${p.slug}/`, title: p.data.title, date: p.data.date, tags: p.data.tags || [], summary: p.data.summary || '' })),
    ...courses.map(c => ({ type: 'course', slug: `/courses/${c.slug}/`, title: c.data.title, code: c.data.code || '', description: c.data.description || '' })),
  ];
  return new Response(JSON.stringify(items), { headers: { 'Content-Type': 'application/json' } });
}
