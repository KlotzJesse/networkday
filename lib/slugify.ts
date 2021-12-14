import slugify from "slugify";

export default function slug(slug: string) {
  return slugify(slug.replace(/\./g, ""), {
    lower: true,
  });
}
