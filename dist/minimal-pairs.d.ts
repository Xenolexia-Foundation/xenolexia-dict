/**
 * Copyright (C) 2016-2026 Husain Alamri (H4n) and Xenolexia Foundation.
 * Licensed under the GNU Affero General Public License v3.0 (AGPL-3.0). See LICENSE.
 */
import type { MinimalPairSet } from './types/minimal-pairs.js';
/** Loaded minimal pairs — canonical data shared across apps. */
export declare const MINIMAL_PAIRS: MinimalPairSet;
/** All unique languages in the minimal-pairs list. */
export declare const LANGUAGES: string[];
/** All unique categories in the minimal-pairs list. */
export declare const CATEGORIES: string[];
/**
 * Get minimal pairs, optionally filtered by language and/or category.
 */
export declare function getMinimalPairs(options?: {
    language?: string;
    category?: string;
}): MinimalPairSet;
