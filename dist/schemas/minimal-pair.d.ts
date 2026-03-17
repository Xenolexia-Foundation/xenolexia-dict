/**
 * Copyright (C) 2016-2026 Husain Alamri (H4n) and Xenolexia Foundation.
 * Licensed under the GNU Affero General Public License v3.0 (AGPL-3.0). See LICENSE.
 */
import { z } from 'zod';
export declare const minimalPairSchema: z.ZodObject<{
    id: z.ZodString;
    optionA: z.ZodString;
    optionB: z.ZodString;
    language: z.ZodOptional<z.ZodString>;
    category: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    id: string;
    optionA: string;
    optionB: string;
    language?: string | undefined;
    category?: string | undefined;
}, {
    id: string;
    optionA: string;
    optionB: string;
    language?: string | undefined;
    category?: string | undefined;
}>;
export type MinimalPairSchemaType = z.infer<typeof minimalPairSchema>;
export declare function parseMinimalPair(data: unknown): MinimalPairSchemaType;
export declare function parseMinimalPairs(data: unknown): MinimalPairSchemaType[];
