export interface IconMetadata {
	name: string;
	version: number;
	popularity: number;
	codepoint: number;
	unsupported_families: Array<string>;
	categories: Array<string>;
	tags: Array<string>;
	sizes_px: Array<number>;
}

export interface FontMetadata {
	host: string;
	asset_url_pattern: string;
	families: Array<string>;
	icons: Array<IconMetadata>;
}
