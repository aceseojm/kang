import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "안부 | 《四季로 읽는 詩》",
  description: "강길원 《四季로 읽는 詩》 중에서, 〈안부〉",
  openGraph: {
    title: "안부 | 《四季로 읽는 詩》",
    description: "강길원 《四季로 읽는 詩》 중에서, 〈안부〉",
    url: "https://www.kanggilwon.com/anbu",
    type: "website",
    images: [
      {
        url: "https://www.kanggilwon.com/images/anbu.png",
        width: 1024,
        height: 1853,
        alt: "강길원 시 〈안부〉",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "안부 | 《四季로 읽는 詩》",
    description: "강길원 《四季로 읽는 詩》 중에서, 〈안부〉",
    images: ["https://www.kanggilwon.com/images/anbu.png"],
  },
};

const bookstores = [
  { name: "YES24", href: "https://www.yes24.com/product/goods/196183862", left: "4%", width: "16.2%" },
  { name: "교보문고", href: "https://product.kyobobook.co.kr/detail/S000221231674", left: "28.2%", width: "18.8%" },
  { name: "영풍문고", href: "https://www.ypbooks.co.kr/books/202609086925600322", left: "54.2%", width: "17.3%" },
  { name: "알라딘", href: "https://www.aladin.co.kr/shop/wproduct.aspx?ItemId=401731981", left: "78.8%", width: "19.2%" },
];

export default function AnbuPage() {
  return (
    <main className="flex min-h-dvh justify-center bg-[#f4eadf]">
      <div className="relative self-start aspect-[1024/1853] w-full max-w-[1024px] select-none">
        <Image
          src="/images/anbu.png"
          alt="강길원 시 〈안부〉와 온라인 서점 구매 안내"
          fill
          sizes="100vw"
          priority
          unoptimized
          className="object-contain"
        />
        <div className="absolute inset-0" aria-label="구매 및 공식 홈페이지 링크">
          {bookstores.map((bookstore) => (
            <a
              key={bookstore.name}
              href={bookstore.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${bookstore.name}에서 시집 구매하기`}
              className="absolute top-[86.8%] z-20 h-[4.4%] rounded-sm outline-offset-2 hover:bg-[#9b4d2d]/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#9b4d2d]"
              style={{ left: bookstore.left, width: bookstore.width }}
            />
          ))}
          <a
            href="https://www.kanggilwon.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="강길원 공식 홈페이지 방문하기"
            className="absolute left-[32.5%] top-[96.6%] z-20 h-[3.2%] w-[35.1%] rounded-sm outline-offset-2 hover:bg-[#9b4d2d]/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#9b4d2d]"
          />
        </div>
      </div>
    </main>
  );
}
