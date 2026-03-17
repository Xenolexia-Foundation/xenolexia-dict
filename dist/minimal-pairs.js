/**
 * Copyright (C) 2016-2026 Husain Alamri (H4n) and Xenolexia Foundation.
 * Licensed under the GNU Affero General Public License v3.0 (AGPL-3.0). See LICENSE.
 */
// Vite/tsc will bundle or resolve this; for Node/consumers we need a path that works at runtime.
// Use import with assert or require for JSON depending on environment. For dual use, we inject at build or use a small loader.
const pairsJson = [
    { id: "mandarin-1", optionA: "shi", optionB: "xi", language: "zh-CN", category: "consonants" },
    { id: "mandarin-2", optionA: "ma", optionB: "ba", language: "zh-CN", category: "consonants" },
    { id: "mandarin-3", optionA: "chi", optionB: "qi", language: "zh-CN", category: "consonants" },
    { id: "mandarin-4", optionA: "zhi", optionB: "ji", language: "zh-CN", category: "consonants" },
    { id: "mandarin-5", optionA: "ma", optionB: "mā", language: "zh-CN", category: "tones" },
    { id: "spanish-1", optionA: "b", optionB: "p", language: "es-ES", category: "consonants" },
    { id: "spanish-2", optionA: "casa", optionB: "caza", language: "es-ES", category: "words" },
    { id: "spanish-3", optionA: "pero", optionB: "perro", language: "es-ES", category: "consonants" },
    { id: "spanish-4", optionA: "sí", optionB: "si", language: "es-ES", category: "vowels" },
    { id: "spanish-5", optionA: "caro", optionB: "carro", language: "es-ES", category: "consonants" },
    { id: "en-vowels-1", optionA: "ship", optionB: "sheep", language: "en-US", category: "vowels" },
    { id: "en-vowels-2", optionA: "bit", optionB: "beat", language: "en-US", category: "vowels" },
    { id: "en-vowels-3", optionA: "cot", optionB: "caught", language: "en-US", category: "vowels" },
    { id: "en-vowels-4", optionA: "pool", optionB: "pull", language: "en-US", category: "vowels" },
    { id: "en-vowels-5", optionA: "bed", optionB: "bad", language: "en-US", category: "vowels" },
];
/** Loaded minimal pairs — canonical data shared across apps. */
export const MINIMAL_PAIRS = pairsJson;
/** All unique languages in the minimal-pairs list. */
export const LANGUAGES = [...new Set(MINIMAL_PAIRS.map((p) => p.language).filter(Boolean))];
/** All unique categories in the minimal-pairs list. */
export const CATEGORIES = [...new Set(MINIMAL_PAIRS.map((p) => p.category).filter(Boolean))];
/**
 * Get minimal pairs, optionally filtered by language and/or category.
 */
export function getMinimalPairs(options) {
    if (!options?.language && !options?.category)
        return [...MINIMAL_PAIRS];
    return MINIMAL_PAIRS.filter((p) => {
        if (options.language && p.language !== options.language)
            return false;
        if (options.category && p.category !== options.category)
            return false;
        return true;
    });
}
