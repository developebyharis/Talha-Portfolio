import { Asset, createClient } from "contentful";
import { generateSlug, getContentfulAssetUrl } from "./utils";

export const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE!,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_API!,
});

export async function FetchAbout() {
  const res = await client.getEntries({ content_type: "about" });

  const name = (res.items[0].fields.name as string) || "Talha Khan";
  const title =
    (res.items[0].fields.title as string) || "Embeded Systems Engineer";
  const intro = (res.items[0].fields.intro as string) || null;
  const description = (res.items[0].fields.description as string) || null;
  const me = getContentfulAssetUrl(res.items[0].fields.me as Asset) || null;
  const data = { name, title, intro, description, me };
  return data;
}

export async function FetchProjects() {
  const res = await client.getEntries({ content_type: "projects" });
  const data = res.items.map((item) => {
    const name = (item.fields.name as string) || "Project Title";
    const description =
      (item.fields.description as string) || "Project Description";
    const category = item.fields.category as string;
    const techStack = item.fields.techStack as string[];
    const thumbnail =
      getContentfulAssetUrl(item.fields.thumbnail as Asset)! || null;
    const duration = item.fields.duration as string;
    const github = (item.fields.github as string) || null;
    const live = (item.fields.live as string) || null;
    const slug = generateSlug(item.fields.name as string);
    const caseStudy = item.fields.caseStudy as string;
    return {
      name,
      description,
      category,
      techStack,
      thumbnail,
      slug,
      duration,
      github,
      live,
      caseStudy,
    };
  });

  return data;
}

export async function FetchSkills() {
  const res = await client.getEntries({
    content_type: "skills",
  });

  const data = res.items.map((item) => {
    const { title, description, skill } = item.fields;

    const skillArray = Array.isArray(skill) ? skill : [];

    const techStack = skillArray
      .map((s: any) => {
        if (!s || !("fields" in s)) return null;
        return {
          tech: s.fields.skill,
          image: s.fields.image?.fields?.file?.url || null,
          color: s?.fields?.color || "#008f9f"
        };
      })
      .filter(Boolean);
    return {
      title,
      description,
      techStack,
    };
  });

  return data;
}

export async function FetchEducation() {
  const res = await client.getEntries({ content_type: "education" });
  const data = res.items.map((item) => {
    const school = item.fields.school as string;
    const course = item.fields.course as string;
    const description = item.fields.description as string;
    const score = (item.fields.score as string) || null;
    const startEndDate = item.fields.startEndDate as string;
    return { school, course, description, score, startEndDate };
  });

  return data;
}

export async function FetchExperience() {
  const res = await client.getEntries({ content_type: "experience" });
  const data = res.items.map((item) => {
    const title = item.fields.title as string;
    const organization = item.fields.organization as string;
    const description = item.fields.description as string;
    const startEndDate = item.fields.startEndDate as string;
    return { title, organization, description, startEndDate };
  });
  return data;
}

export async function FetchCertificate() {
  const res = await client.getEntries({ content_type: "certificate" });
  const data = res.items.map((item) => {
    const name = item.fields.name as string;
    const source = item.fields.source as string;
    const link = (item.fields.link as string) || null;
    return { name, source, link };
  });
  return data;
}

export async function FetchResearchPapers() {
  const res = await client.getEntries({ content_type: "research" });
  const data = res.items.map((item) => {
    const title = item.fields.title as string;
    const category = item.fields.category as string;
    const publishDate = item.fields.publishDate as string;
    const conference = item.fields.conference as string;
    const authors = item.fields.author as string;
    const abstract = item.fields.abstract as string;
    const keywords = item.fields.keyword as string[];
    const slug = generateSlug(item.fields.title as string);
    const detail = item.fields.detail as string;
    const paperPdf = item.fields.paper as Asset[];
    const link = item.fields.link as string;
    return {
      title,
      category,
      publishDate,
      conference,
      authors,
      abstract,
      keywords,
      slug,
      detail,
      paperPdf,
      link,
    };
  });
  return data;
}
export async function FetchBlogs() {
  const res = await client.getEntries({ content_type: "blog" });

  const data = res.items.map((item) => {
    const title = item.fields.title as string;
    const detail = item.fields.detail as string;
    const category = item.fields.category as string;
    const thumbnail = getContentfulAssetUrl(item.fields.thumbnail as Asset);
    const tags = (item.fields.tag as string[]) || null;
    const author = "Talha Khan";
    const slug = generateSlug(item.fields.title as string);
    const publishedDate = item.sys.updatedAt;
    return {
      title,
      detail,
      category,
      thumbnail,
      tags,
      author,
      slug,
      publishedDate,
    };
  });

  return data;
}
