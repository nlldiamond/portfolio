const modules = import.meta.glob<{ default: string }>(
  "./assets/Canva/*.{png,jpg,jpeg}",
  { eager: true }
);

const canvaImages: string[] = Object.values(modules).map((m) => m.default);

canvaImages.sort((a, b) => {
  const getNum = (file: string) =>
    parseInt(file.match(/Canva(\d+)/)?.[1] || "0", 10);
  return getNum(a) - getNum(b);
});

export default canvaImages;