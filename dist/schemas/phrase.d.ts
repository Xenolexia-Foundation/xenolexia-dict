/**
 * Copyright (C) 2016-2026 Husain Alamri (H4n) and Xenolexia Foundation.
 * Licensed under the GNU Affero General Public License v3.0 (AGPL-3.0). See LICENSE.
 */
import { z } from 'zod';
export declare const PHRASE_CATEGORIES: readonly ["travel", "food", "emergencies", "greetings", "numbers", "directions", "shopping", "accommodation", "transport", "health", "other"];
export type PhraseCategory = (typeof PHRASE_CATEGORIES)[number];
export declare const phraseSchema: z.ZodObject<{
    id: z.ZodString;
    source: z.ZodString;
    target: z.ZodString;
    tags: z.ZodArray<z.ZodString, "many">;
    category: z.ZodEnum<["travel", "food", "emergencies", "greetings", "numbers", "directions", "shopping", "accommodation", "transport", "health", "other"]>;
    pronunciation: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    category: "travel" | "food" | "emergencies" | "greetings" | "numbers" | "directions" | "shopping" | "accommodation" | "transport" | "health" | "other";
    id: string;
    source: string;
    target: string;
    tags: string[];
    pronunciation?: string | undefined;
}, {
    category: "travel" | "food" | "emergencies" | "greetings" | "numbers" | "directions" | "shopping" | "accommodation" | "transport" | "health" | "other";
    id: string;
    source: string;
    target: string;
    tags: string[];
    pronunciation?: string | undefined;
}>;
export type PhraseSchemaType = z.infer<typeof phraseSchema>;
export declare function parsePhrase(data: unknown): PhraseSchemaType;
export declare function parsePhrases(data: unknown): PhraseSchemaType[];
