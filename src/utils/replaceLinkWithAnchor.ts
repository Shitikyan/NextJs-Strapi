export const replaceLinkWithAnchor = (text: string): string => {
  const urlRegex =
    /(https?:\/\/[^\s]+)|(www\.[^\s]+)|(ftp:\/\/[^\s]+)|(mailto:[^\s]+)/g;

  return text.replace(urlRegex, (match) => {
    if (
      match.startsWith('http://') ||
      match.startsWith('https://') ||
      match.startsWith('ftp://') ||
      match.startsWith('mailto:')
    ) {
      return `<a href="${match}" target=_blank>${match}</a>`;
    } else {
      return `<a href="http://${match}" target=_blank>${match}</a>`;
    }
  });
};
