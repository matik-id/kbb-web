// Interface for individual donation records
interface DonationRecord {
    id: number;
    title: string;
    type: string;
    location: string;
    image: string;
    content: string;
    target_balance: number;
    balance_collected: number;
    date_start: string;
    date_end: string;
    link_youtube: string | null;
    text_sharing: string | null;
    viewer: number;
    is_urgent: boolean;
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
  interface Data {
    records: DonationRecord[];
    metadata: Metadata;
  }
  
  // Interface for the full API response
  interface ApiResponseDonations {
    status: number;
    message: string;
    data: Data;
    timestamp: string;
    path: string;
  }
  