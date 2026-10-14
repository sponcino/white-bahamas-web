export type ProductCategory = 
  | 'hidromasajesindividuales'
  | 'hidromasajesdobles'
  | 'hidromasajesesquineros'
  | 'minipiscinas'
  | 'sauna'
  | 'vapor'
  | 'accesorios';

export type VerificationStatus = 'verified' | 'pending' | 'disputed';

export interface ProductDimensions {
  length: number | null;
  width: number | null;
  depth: number | null;
}

export interface ProductImage {
  url: string;
  alt: string;
  isPrimary?: boolean;
  rightsVerified: boolean;
  caption?: string;
}

export interface ConfigurationOption {
  id: string;
  name: string;
  jets: number | null;
  pump: string | null;
  lighting?: string | null;
  features: string[];
  imageUrl?: string;
}

export interface Product {
  id: string;
  slug: string;
  legacyUrl: string;
  displayName: string;
  category: ProductCategory;
  categoryName: string;
  collection: string | null;
  shortDescription?: string;
  description?: string;
  dimensionsCm: ProductDimensions;
  capacityPeople: number | null;
  shape: string | null;
  installation: string[];
  indoorOutdoor: 'interior' | 'exterior' | 'ambos' | null;
  material: string | null;
  images: ProductImage[];
  configurations: ConfigurationOption[];
  compatibleAccessoryIds: string[];
  techPdfUrl: string | null;
  technicalRequirements: string | null;
  warrantyReference: string | null;
  available: boolean | null;
  seo: {
    title: string | null;
    description: string | null;
    canonical: string | null;
  };
  verificationStatus: VerificationStatus;
  verificationSource?: string;
}

export interface QuoteRequest {
  productId?: string;
  productName?: string;
  category?: string;
  configurationId?: string;
  configurationName?: string;
  dimensions?: string;
  customerName: string;
  customerLocation: string;
  customerPhone: string;
  customerEmail?: string;
  notes?: string;
  projectType?: 'particular' | 'arquitecto' | 'desarrollo' | 'hotel' | 'otro';
}
