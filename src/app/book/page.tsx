import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "《四季로 읽는 詩》 구매 안내",
  description: "2026년 9월 13일 염창 강길원의 첫시집, <사계로 읽는시>",
  openGraph: {
    title: "《四季로 읽는 詩》 구매 안내",
    description: "2026년 9월 13일 염창 강길원의 첫시집, <사계로 읽는시>",
    url: "https://www.kanggilwon.com/book",
    type: "website",
    images: [
      {
        url: "https://www.kanggilwon.com/images/last-book-design.png",
        width: 992,
        height: 1586,
        alt: "《四季로 읽는 詩》 구매 안내",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "《四季로 읽는 詩》 구매 안내",
    description: "2026년 9월 13일 염창 강길원의 첫시집, <사계로 읽는시>",
    images: ["https://www.kanggilwon.com/images/last-book-design.png"],
  },
};

const bookstores = [
  { name: "YES24", href: "https://www.yes24.com/product/goods/196183862", left: "16.8%", width: "12.8%" },
  { name: "교보문고", href: "https://product.kyobobook.co.kr/detail/S000221231674", left: "32.6%", width: "14.4%" },
  { name: "영풍문고", href: "https://www.ypbooks.co.kr/books/202609086925600322", left: "49.6%", width: "14.2%" },
  { name: "알라딘", href: "https://www.aladin.co.kr/shop/wproduct.aspx?ItemId=401731981", left: "66.2%", width: "14.2%" },
];

export default function BookPurchasePage() {
  return (
    <main className="flex min-h-dvh justify-center bg-[#f7f4ec]">
      <div className="relative self-start aspect-[2/3] w-full max-w-[1024px] select-none">
        <Image
          src="/images/last-book-design.png"
          alt="《四季로 읽는 詩》 구매 안내 이미지"
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
              className="absolute top-[83.8%] z-20 h-[5.8%] rounded-sm outline-offset-2 hover:bg-[#9b4d2d]/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#9b4d2d]"
              style={{ left: bookstore.left, width: bookstore.width }}
            />
          ))}
          <a
            href="https://www.kanggilwon.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="강길원 공식 홈페이지 방문하기"
            className="absolute left-[35%] top-[94.3%] z-20 h-[4.2%] w-[30%] rounded-sm outline-offset-2 hover:bg-[#9b4d2d]/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#9b4d2d]"
          />
        </div>
      </div>
    </main>
  );
}
