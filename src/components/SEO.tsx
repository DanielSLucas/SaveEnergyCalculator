import Head from 'next/head';

interface SEOProps {
  title: string;
  description?: string;
  image?: string;
  shouldExludeTitleSuffix?: boolean;
  shoulIndexPage?: boolean;
}

export default function SEO({
  title,
  description,
  image,
  shouldExludeTitleSuffix = false,
  shoulIndexPage = true
}: SEOProps) {
  const pageTitle = `${title} ${!shouldExludeTitleSuffix ? '| SaveEneryCalculator' : ''}`
  const pageImage = image ? `${process.env.NEXT_PUBLIC_SITE_URL}/${image}` : null;

  return (
    <Head>
      <title>{pageTitle}</title>

      { description && <meta name="description" content={description} /> }
      { image && <meta name="image" content={pageImage} /> }

      { !shoulIndexPage && <meta name="robots" content="noindex,nofollow" /> }

      <meta httpEquiv="x-ua-compatible" content="IE=edge,chrome=1" />
      <meta name="MobileOptimized" content="320" />
      <meta name="HandheldFriendly" content="True" />
      <meta name="theme-color" content="#00A88F" />
      <meta name="msapplication-TileColor" content="#00A88F" />
      <meta name="referrer" content="no-referrer-when-downgrade" />
      <meta name="google" content="notranslate" />
    </Head>
  )
}