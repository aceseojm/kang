import type { Metadata } from "next";
import { Noto_Serif_KR } from "next/font/google";
import "./globals.css";

const notoSerifKR = Noto_Serif_KR({
  variable: "--font-noto-serif-kr",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "《四季로 읽는 詩》 | 염창 강길원",
  description: "강길원 시인, 기업인에서 이제는 시로 마음을 전합니다.",
  keywords: [
    "강길원",
    "염창 강길원",
    "시인 강길원",
    "강길원 시인",
    "서진인스텍",
    "와이엠케이",
    "소금창고",
    "나의 四季",
  ],
  openGraph: {
    title: "《四季로 읽는 詩》 | 염창 강길원",
    description: "강길원 시인, 기업인에서 이제는 시로 마음을 전합니다.",
    url: "https://www.kanggilwon.com",
    type: "website",
    images: [
      {
        url: "https://www.kanggilwon.com/images/back3.png",
        width: 1672,
        height: 941,
        alt: "강길원 시인 홈페이지 영상 대표 이미지",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "《四季로 읽는 詩》 | 염창 강길원",
    description: "강길원 시인, 기업인에서 이제는 시로 마음을 전합니다.",
    images: ["https://www.kanggilwon.com/images/back3.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${notoSerifKR.variable} h-full antialiased`}>
      <head>
        <meta
          name="naver-site-verification"
          content="d37841ba4d97065650346b89910b601191582f0d"
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
