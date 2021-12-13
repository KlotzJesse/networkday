import fetchData from "@lib/fetchData";

const createSitemap = (links, posts) => `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:news="http://www.google.com/schemas/sitemap-news/0.9">
        ${links
          .map(link => {
            return `
                <url>
                    <loc>${`https://www.network-day.de/${link.full_slug}`}</loc>
                </url>
            `;
          })
          .join('')}
          ${posts
            .map(post => {
              return `
                  <url>
                      <loc>${`https://www.network-day.de/${post.full_slug}`}</loc>
                      <news:news>
   <news:publication>
     <news:name>NetworkDay</news:name>
     <news:language>de</news:language>
   </news:publication>
   <news:genres>Blog</news:genres>
   <news:publication_date>${post.published_at}</news:publication_date>
     <news:title>${post.name}</news:title>
    </news:news>
                  </url>
              `;
            })
            .join('')}
    </urlset>
    `;

export default async function handler(req, res) {
    var data = await (await fetch(`https://api.storyblok.com/v1/cdn/stories?token=wM296GLYg0BtNHBdvqcsuwtt&excluding_slugs=*blog*`)).json();

    var blog = await fetchData("/api/components/blog");

    res.setHeader('Content-Type', 'application/xml')
  
   res.write(createSitemap(data.stories, blog))
   res.end()
  }
  