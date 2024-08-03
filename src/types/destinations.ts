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

  interface DestinationData {
    status: number;
    message: string;
    data: {
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
      text_sharing: null | string; // Allow null or string for text_sharing
      viewer: number;
      is_publish: boolean;
      created_at: string;
      updated_at: string;
      deleted_at: null | string; // Allow null or string for deleted_at
      admin_id: null | number; // Allow null or number for admin_id
      category_id: null | number; // Allow null or number for category_id
      province_id: null | number; // Allow null or number for province_id
      regency_id: null | number; // Allow null or number for regency_id
      category: null | string; // Allow null or string for category
    };
    timestamp: string;
    path: string;
  }
  