// Interface for individual donation records
interface ProductRecord {
    id: number;
  title: string;
  owner: string;
  phone: string;
  thumbnail: string;
  image1: string;
  image2: string;
  image3: string;
  price: number;
  price_promo: number;
  content: string;
  address: string | null;
  link_youtube: string | null;
  text_sharing: string | null;
  viewer: number;
  is_terlaris: boolean;
  is_publish: boolean;
  created_at: string;
  updated_at: string;
  deleted_at: string | null;
  category_id: number | null;
  province_id: number | null;
  regency_id: number | null;
  category: Category | null;

  }
  
  // Interface for metadata
  interface Metadata {
    page: number;
    per_page: number;
    page_count: number;
    total_count: number;
  }
  
  // Interface for the data object containing records and metadata
  interface DataResponse {
    records: ProductRecord[];
    metadata: Metadata;
  }
  
  // Interface for the full API response
  interface ApiResponseProducts {
    status: number;
    message: string;
    data: DataResponse;
    timestamp: string;
    path: string;
  }
  
  interface Category {
    id: number;
    name: string;
  }