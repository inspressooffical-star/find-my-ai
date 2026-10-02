import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '나한테 딱 맞는 AI는?',
  description: 'AI 궁합 테스트: ChatGPT, Claude, Gemini, Manus 등 내 사용 스타일에 맞는 AI를 찾아보세요.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
