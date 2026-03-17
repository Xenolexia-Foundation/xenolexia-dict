/**
 * Copyright (C) 2016-2026 Husain Alamri (H4n) and Xenolexia Foundation.
 * Licensed under the GNU Affero General Public License v3.0 (AGPL-3.0). See LICENSE.
 */
/**
 * Core types for minimal-pair data (e.g. Listening Discrimination Trainer).
 */
/** A single minimal pair: two options (syllables, words, or phonemes). */
export interface MinimalPair {
    id: string;
    optionA: string;
    optionB: string;
    /** BCP 47 language code (e.g. "zh-CN", "es-ES", "en-US"). */
    language?: string;
    /** Optional category for filtering (e.g. "consonants", "vowels", "tones"). */
    category?: string;
}
/** A list of minimal pairs. */
export type MinimalPairSet = MinimalPair[];
