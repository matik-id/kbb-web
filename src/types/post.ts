// Interface for individual donation records
interface PostRecord {
    id: number;
    title: string;
    image: string;
    content: string;
    type: string;
    date_start: string;
    date_end: string;
    link: string | null;
    text_sharing: string;
    viewer: number;
    is_publish: boolean;
    created_at: string;
    updated_at: string;
    deleted_at: string | null;
    admin_id: number | null;
    category_id: number;
    province_id: number;
    regency_id: number;
    category: Category;
}

interface Category {
    id: number;
    name: string;
}
  
  
  // Interface for metadata
  interface Metadata {
    page: number;
    per_page: number;
    page_count: number;
    total_count: number;
  }
  
  // Interface for the data object containing records and metadata
  interface DataPosts {
    records: PostRecord[];
    metadata: Metadata;
  }
  
  // Interface for the full API response
  interface ApiResponsePosts {
    status: number;
    message: string;
    data: DataPosts;
    timestamp: string;
    path: string;
  }
  