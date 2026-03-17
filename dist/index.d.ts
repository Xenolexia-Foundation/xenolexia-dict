/**
 * Copyright (C) 2016-2026 Husain Alamri (H4n) and Xenolexia Foundation.
 * Licensed under the GNU Affero General Public License v3.0 (AGPL-3.0). See LICENSE.
 */
export type { MinimalPair, MinimalPairSet } from './types/minimal-pairs.js';
export type { WordChoiceMap } from './types/word-choice.js';
export { MINIMAL_PAIRS, LANGUAGES, CATEGORIES, getMinimalPairs, } from './minimal-pairs.js';
export { WORD_CHOICE_MAP } from './word-choice.js';
export { minimalPairSchema, parseMinimalPair, parseMinimalPairs, type MinimalPairSchemaType, } from './schemas/minimal-pair.js';
export { wordChoiceMapSchema, parseWordChoiceMap } from './schemas/word-choice.js';
export { PHRASE_CATEGORIES, phraseSchema, parsePhrase, parsePhrases, type PhraseCategory, type PhraseSchemaType, } from './schemas/phrase.js';
export { dictionaryEntrySchema, dictionarySchema, parseDictionaryEntry, parseDictionary, type DictionaryEntrySchemaType, } from './schemas/dictionary.js';
