import type { Metadata, Viewport } from 'next';
import './globals.css';

const siteOrigin = 'https://renatoryu.github.io/portfolio';
const title = 'Renato Caetité Cruz | Desenvolvedor Full-Stack C# & .NET';
const description = 'Desenvolvedor Full-Stack em São Paulo com 4+ anos de experiência e especialização em C#, .NET, ASP.NET Core, APIs REST, SQL Server e React.';

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Renato Caetité Cruz',
  url: siteOrigin,
  image: `${siteOrigin}/og.png`,
  email: 'mailto:renatocaetite@gmail.com',
  jobTitle: 'Desenvolvedor Full-Stack',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'São Paulo',
    addressRegion: 'SP',
    addressCountry: 'BR',
  },
  alumniOf: [
    { '@type': 'CollegeOrUniversity', name: 'FATEC São Paulo' },
    { '@type': 'EducationalOrganization', name: 'ETEC Jardim Ângela' },
  ],
  knowsAbout: ['C#', '.NET 10', 'ASP.NET Core', 'Entity Framework Core', 'Clean Architecture', 'REST APIs', 'SQL Server', 'React', 'TypeScript', 'Docker', 'GitHub Actions'],
  sameAs: ['https://www.linkedin.com/in/renatocaetite', 'https://github.com/renatoryu'],
};

export const metadata: Metadata = {
  metadataBase: new URL(siteOrigin),
  title,
  description,
  applicationName: 'Portfólio de Renato Caetité Cruz',
  authors: [{ name: 'Renato Caetité Cruz', url: siteOrigin }],
  creator: 'Renato Caetité Cruz',
  keywords: ['Desenvolvedor Full-Stack', 'Desenvolvedor .NET', 'C#', '.NET 10', 'ASP.NET Core', 'Entity Framework Core', 'Clean Architecture', 'APIs REST', 'SQL Server', 'React', 'São Paulo'],
  alternates: { canonical: siteOrigin },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    siteName: 'Portfólio de Renato Caetité Cruz',
    title,
    description,
    url: siteOrigin,
    images: [{ url: `${siteOrigin}/og.png`, width: 1200, height: 630, type: 'image/png', alt: 'Renato Caetité Cruz — Desenvolvedor Full-Stack' }],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: [`${siteOrigin}/og.png`],
  },
};

export const viewport: Viewport = {
  themeColor: '#071a31',
  colorScheme: 'light',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="me" href="https://www.linkedin.com/in/renatocaetite" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
