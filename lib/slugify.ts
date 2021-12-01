import slugify from "slugify";

export default function slug(slug) {
  return slugify(slug.replace(/./g, ""), {
    lower: true,
  });
}
