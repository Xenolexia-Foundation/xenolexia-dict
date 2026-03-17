/**
 * Copyright (C) 2016-2026 Husain Alamri (H4n) and Xenolexia Foundation.
 * Licensed under the GNU Affero General Public License v3.0 (AGPL-3.0). See LICENSE.
 */
import { z } from 'zod';
export declare const dictionaryEntrySchema: z.ZodObject<{
    word: z.ZodString;
    translation: z.ZodString;
    example: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    word: string;
    translation: string;
    example?: string | undefined;
}, {
    word: string;
    translation: string;
    example?: string | undefined;
}>;
export type DictionaryEntrySchemaType = z.infer<typeof dictionaryEntrySchema>;
export declare const dictionarySchema: z.ZodArray<z.ZodObject<{
    word: z.ZodString;
    translation: z.ZodString;
    example: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    word: string;
    translation: string;
    example?: string | undefined;
}, {
    word: string;
    translation: string;
    example?: string | undefined;
}>, "many">;
export declare function parseDictionaryEntry(data: unknown): DictionaryEntrySchemaType;
export declare function parseDictionary(data: unknown): DictionaryEntrySchemaType[];
