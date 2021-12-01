import slugify from "slugify";

export default function slug(slug) {
    return slugify(slug.replaceAll(".", ""), {
        lower: true,
      })
  }
  