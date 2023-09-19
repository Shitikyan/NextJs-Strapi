export const sliceText = (text: string, count: number): string => {
  if (text?.length > count) {
    return text.slice(0, count) + '...';
  }
  return text;
};
