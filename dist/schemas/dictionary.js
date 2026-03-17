/**
 * Copyright (C) 2016-2026 Husain Alamri (H4n) and Xenolexia Foundation.
 * Licensed under the GNU Affero General Public License v3.0 (AGPL-3.0). See LICENSE.
 */
import { z } from 'zod';
export const dictionaryEntrySchema = z.object({
    word: z.string().min(1),
    translation: z.string(),
    example: z.string().optional(),
});
export const dictionarySchema = z.array(dictionaryEntrySchema);
export function parseDictionaryEntry(data) {
    return dictionaryEntrySchema.parse(data);
}
export function parseDictionary(data) {
    return dictionarySchema.parse(data);
}
