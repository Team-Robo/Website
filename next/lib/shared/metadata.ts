export function getMetadata(seo?: any) {
  const defaultImageUrl = `data:image/svg+xml,%3csvg width='1200' height='630' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='1200' height='630' fill='%23000000'/%3e%3ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' fill='%23FFFFFF' font-size='64' font-family='Arial, sans-serif'%3eTeam Robo%3c/text%3e%3c/svg%3e`;

  return {
    title: seo?.metaTitle || 'Team Robo - Building Autonomous Systems', 
    description: seo?.metaDescription || 'Team Robo under NTU EEE, building autonomous systems. 2nd place ICRA BARN 2024, Finalist ICRA BARN 2025.', 
    openGraph: {
      title: seo?.ogTitle || seo?.metaTitle || 'Team Robo - Building Autonomous Systems',
      description: seo?.ogDescription || seo?.metaDescription || 'Team Robo under NTU EEE, building autonomous systems. 2nd place ICRA BARN 2024, Finalist ICRA BARN 2025.',
      images: seo?.ogImage?.url ? [{ url: seo.ogImage.url }] : [{ url: defaultImageUrl }],
      url: seo?.canonicalURL || '',
    },
    twitter: {
      card: seo?.twitterCard || 'summary_large_image',
      title: seo?.twitterTitle || seo?.metaTitle || 'Team Robo - Building Autonomous Systems',
      description: seo?.twitterDescription || seo?.metaDescription || 'Team Robo under NTU EEE, building autonomous systems. 2nd place ICRA BARN 2024, Finalist ICRA BARN 2025.',
      images: seo?.twitterImage?.url ? [{ url: seo.twitterImage.url }] : [{ url: defaultImageUrl }],
    },
  };
}