import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '404: This page could not be found',
  robots: {
    index: false,
    follow: false,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0, backgroundColor: '#fff', color: '#000' }}>
        {children}
      </body>
    </html>
  );
}
