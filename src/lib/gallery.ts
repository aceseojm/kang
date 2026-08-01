export type GalleryCategory = "꽃" | "열매" | "풍경";

const categories: Record<string, GalleryCategory> = {
  "01": "꽃",
  "02": "꽃",
  "03": "열매",
  "04": "열매",
  "05": "열매",
  "06": "열매",
  "07": "꽃",
  "08": "꽃",
  "09": "풍경",
  "10": "꽃",
  "11": "꽃",
  "12": "꽃",
  "13": "꽃",
  "14": "꽃",
  "15": "열매",
  "16": "열매",
  "17": "열매",
  "18": "꽃",
  "19": "열매",
  "20": "꽃",
  "21": "꽃",
  "22": "꽃",
  "23": "꽃",
  "24": "꽃",
  "25": "꽃",
  "26": "열매",
  "27": "열매",
  "28": "꽃",
  "29": "꽃",
  "30": "꽃",
};

export const galleryImages = Array.from({ length: 30 }, (_, i) => {
  const n = String(i + 1).padStart(2, "0");
  return {
    src: `/images/gallery/${n}.jpeg`,
    alt: `강길원 시인 사진 ${n}`,
    category: categories[n],
  };
});
