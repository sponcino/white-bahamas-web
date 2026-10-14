import React from 'react';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Link from 'next/link';
import { ALL_PRODUCTS, getProductBySlug, getProductsByCategory } from '@/data/products';
import ProductDetailClient from './ProductDetailClient';

interface ProductPageProps {
  params: Promise<{
    category: string;
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return ALL_PRODUCTS.map((prod) => ({
    category: prod.category,
    slug: prod.slug,
  }));
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { category, slug } = await params;
  const product = getProductBySlug(category, slug);

  if (!product) {
    return {
      title: 'Producto no encontrado | White Bahamas Argentina',
    };
  }

  const title = product.seo.title || `${product.displayName} | White Bahamas Argentina`;
  const description =
    product.seo.description ||
    `Conocé las especificaciones y opciones de equipamiento del modelo ${product.displayName}. Presupuesto oficial directo de fábrica.`;

  const primaryImage = product.images[0]?.url || '/images/product-01.jpg';

  return {
    title,
    description,
    alternates: {
      canonical: product.seo.canonical || `https://whitebahamas.com.ar/${product.category}/${product.slug}`,
    },
    openGraph: {
      title,
      description,
      images: [
        {
          url: primaryImage,
          alt: product.displayName,
        },
      ],
    },
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { category, slug } = await params;
  const product = getProductBySlug(category, slug);

  if (!product) {
    notFound();
  }

  const relatedProducts = getProductsByCategory(product.category)
    .filter((p) => p.id !== product.id)
    .slice(0, 3);

  // Schema.org Product JSON-LD estructurado
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.displayName,
    image: product.images.map((img) => `https://whitebahamas.com.ar${img.url}`),
    description: product.description || product.shortDescription,
    brand: {
      '@type': 'Brand',
      name: 'White Bahamas',
    },
    category: product.categoryName,
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'ARS',
      availability: 'https://schema.org/InStock',
      price: '0.00',
      priceValidUntil: '2026-12-31',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ProductDetailClient product={product} relatedProducts={relatedProducts} />
    </>
  );
}
