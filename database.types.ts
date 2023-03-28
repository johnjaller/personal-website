export type Json = string | number | boolean | null | { [key: string]: Json } | Json[];

export interface Database {
	public: {
		Tables: {
			blog: {
				Row: {
					content: string | null;
					created_at: string | null;
					id: number;
					last_updated: string | null;
					thumbnail: string | null;
					title: string | null;
				};
				Insert: {
					content?: string | null;
					created_at?: string | null;
					id?: number;
					last_updated?: string | null;
					thumbnail?: string | null;
					title?: string | null;
				};
				Update: {
					content?: string | null;
					created_at?: string | null;
					id?: number;
					last_updated?: string | null;
					thumbnail?: string | null;
					title?: string | null;
				};
			};
			blog_tag: {
				Row: {
					blog_id: number | null;
					created_at: string | null;
					id: number;
					tag_id: number | null;
				};
				Insert: {
					blog_id?: number | null;
					created_at?: string | null;
					id?: number;
					tag_id?: number | null;
				};
				Update: {
					blog_id?: number | null;
					created_at?: string | null;
					id?: number;
					tag_id?: number | null;
				};
			};
			tags: {
				Row: {
					created_at: string | null;
					id: number;
					introduction: string | null;
					name: string | null;
				};
				Insert: {
					created_at?: string | null;
					id?: number;
					introduction?: string | null;
					name?: string | null;
				};
				Update: {
					created_at?: string | null;
					id?: number;
					introduction?: string | null;
					name?: string | null;
				};
			};
		};
		Views: {
			[_ in never]: never;
		};
		Functions: {
			get_all_blogs: {
				Args: Record<PropertyKey, never>;
				Returns: {
					id: number;
					title: string;
					content: string;
					thumbnail: string;
					tags: { id: string; name: string; introduction: string }[];
				}[];
			};
			hello_world: {
				Args: Record<PropertyKey, never>;
				Returns: string;
			};
		};
		Enums: {
			[_ in never]: never;
		};
		CompositeTypes: {
			[_ in never]: never;
		};
	};
}
