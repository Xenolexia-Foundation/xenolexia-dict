/**
 * Copyright (C) 2016-2026 Husain Alamri (H4n) and Xenolexia Foundation.
 * Licensed under the GNU Affero General Public License v3.0 (AGPL-3.0). See LICENSE.
 */
import { z } from 'zod';
export const minimalPairSchema = z.object({
    id: z.string().min(1),
    optionA: z.string(),
    optionB: z.string(),
    language: z.string().optional(),
    category: z.string().optional(),
});
export function parseMinimalPair(data) {
    return minimalPairSchema.parse(data);
}
export function parseMinimalPairs(data) {
    return z.array(minimalPairSchema).parse(data);
}
