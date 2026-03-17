/**
 * Copyright (C) 2016-2026 Husain Alamri (H4n) and Xenolexia Foundation.
 * Licensed under the GNU Affero General Public License v3.0 (AGPL-3.0). See LICENSE.
 */
import { z } from 'zod';
export const PHRASE_CATEGORIES = [
    'travel',
    'food',
    'emergencies',
    'greetings',
    'numbers',
    'directions',
    'shopping',
    'accommodation',
    'transport',
    'health',
    'other',
];
export const phraseSchema = z.object({
    id: z.string().min(1),
    source: z.string().min(1),
    target: z.string().min(1),
    tags: z.array(z.string()),
    category: z.enum(PHRASE_CATEGORIES),
    pronunciation: z.string().optional(),
});
export function parsePhrase(data) {
    return phraseSchema.parse(data);
}
export function parsePhrases(data) {
    return z.array(phraseSchema).parse(data);
}
