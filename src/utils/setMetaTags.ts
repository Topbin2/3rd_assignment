interface Payload {
  title: string;
  description: string;
  imageUrl: string;
}

export const setMetaTags = ({ title, description, imageUrl }: Payload) => {
  (
    document.querySelector('meta[property="og:title"]') as HTMLMetaElement
  ).setAttribute("content", `${title}`);

  (
    document.querySelector('meta[property="og:description"]') as HTMLMetaElement
  ).setAttribute("content", description);

  (
    document.querySelector('meta[property="og:image"]') as HTMLMetaElement
  ).setAttribute("content", imageUrl);

  (
    document.querySelector('meta[property="og:url"]') as HTMLMetaElement
  ).setAttribute("content", window.location.href);
};
