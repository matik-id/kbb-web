// Interface for individual donation records
interface DestinationRecord {
    id: number;
    name: string;
    coordinate: string;
    thumbnail: string;
    image1: string;
    image2: string;
    image3: string;
    video: string;
    address: string;
    content: string;
    text_sharing: string | null;
    viewer: number;
    is_publish: boolean;
    created_at: string;
    updated_at: string;
    deleted_at: string | null;
    admin_id: number | null;
    category_id: number | null;
    province_id: number | null;
    regency_id: number | null;
    category: string | null;
  }
  
  // Interface for metadata
  interface Metadata {
    page: number;
    per_page: number;
    page_count: number;
    total_count: number;
  }
  
  // Interface for the data object containing records and metadata
  interface DataDestinations {
    records: DestinationRecord[];
    metadata: Metadata;
  }
  
  // Interface for the full API response
  interface ApiResponseDestinations {
    status: number;
    message: string;
    data: DataDestinations;
    timestamp: string;
    path: string;
  }
  