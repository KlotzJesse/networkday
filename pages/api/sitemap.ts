import fetchData from "@lib/fetchData";
import { NextApiRequest, NextApiResponse } from "next";


const createSitemap = (links: any, posts: any) => `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:news="http://www.google.com/schemas/sitemap-news/0.9">
        ${links
          .map((link : any) => {
            return `
                <url>
                    <loc>${`https://www.network-day.de/${link.path ? link.path : link.full_slug}`}</loc>
                    <lastmod>${link.published_at.split("T")[0]}</lastmod>
                </url>
            `;
          })
          .join('')}
          ${posts
            .map((post : any) => {
              return `
                  <url>
                      <loc>${`https://www.network-day.de/${post.full_slug}`}</loc>
                      <lastmod>${post.published_at.split("T")[0]}</lastmod>
                      <news:news>
   <news:publication>
     <news:name>NetworkDay</news:name>
     <news:language>de</news:language>
   </news:publication>
   <news:genres>Blog</news:genres>
   <news:publication_date>${post.published_at.split("T")[0]}</news:publication_date>
     <news:title>${post.name}</news:title>
    </news:news>
                  </url>
              `;
            })
            .join('')}
    </urlset>
    `;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    var data = await (await fetch(`https://api.storyblok.com/v1/cdn/stories?token=wM296GLYg0BtNHBdvqcsuwtt&excluding_slugs=*blog*&cv=${new Date().getTime()}`)).json();


    var blog = await fetchData("/api/components/blog");

    res.setHeader('Content-Type', 'application/xml')
  
   res.write(createSitemap(data.stories, blog))
   res.end()
  }
  