import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "《四季로 읽는 詩》 구매 안내",
  description: "염창 강길원 첫 시집 《四季로 읽는 詩》 구매 안내",
};

const bookstores = [
  { name: "YES24", href: "https://www.yes24.com/product/goods/196183862" },
  { name: "교보문고", href: "https://product.kyobobook.co.kr/detail/S000221231674" },
  { name: "영풍문고", href: "https://www.ypbooks.co.kr/books/202609086925600322" },
  { name: "알라딘", href: "https://www.aladin.co.kr/shop/wproduct.aspx?ItemId=401731981" },
];

export default function BookPurchasePage() {
  return (
    <main className="flex min-h-dvh justify-center bg-[#f7f4ec]">
      <div className="relative self-start aspect-[1086/1448] w-full max-w-[1086px] select-none">
        <Image
          src="/images/last-book-design.png"
          alt="《四季로 읽는 詩》 구매 안내 이미지"
          fill
          sizes="100vw"
          priority
          unoptimized
          className="object-contain"
        />
        <div className="absolute inset-x-0 bottom-0 h-[19%]" aria-label="온라인 서점 구매 링크">
          {bookstores.map((bookstore, index) => (
            <a
              key={bookstore.name}
              href={bookstore.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${bookstore.name}에서 시집 구매하기`}
              className="absolute bottom-[28%] top-[18%] z-20 rounded-sm bg-[#f7f4ec] outline-offset-2 transition-colors hover:bg-[#f7f4ec] focus-visible:bg-[#f7f4ec] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#9b4d2d]"
              style={{ left: `${index * 21.2 + 11.5}%`, width: "14.5%" }}
            />
          ))}
        </div>
      </div>
    </main>
  );
}