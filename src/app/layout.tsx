import type { Metadata } from "next";
import { Noto_Serif_KR } from "next/font/google";
import "./globals.css";

const notoSerifKR = Noto_Serif_KR({
  variable: "--font-noto-serif-kr",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "鹽倉 姜吉遠 | 나의 四季",
  description:
    "강길원, 염창 강길원, 시인 강길원, (주)서진인스텍, (주)와이엠케이 관련 정보를 담은 공식 사이트입니다.",
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
    title: "鹽倉 姜吉遠 | 나의 四季",
    description:
      "강길원, 염창 강길원, 시인 강길원, (주)서진인스텍, (주)와이엠케이 관련 정보를 담은 공식 사이트입니다.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "鹽倉 姜吉遠 | 나의 四季",
    description:
      "강길원, 염창 강길원, 시인 강길원, (주)서진인스텍, (주)와이엠케이 관련 정보를 담은 공식 사이트입니다.",
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
