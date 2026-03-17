/**
 * Copyright (C) 2016-2026 Husain Alamri (H4n) and Xenolexia Foundation.
 * Licensed under the GNU Affero General Public License v3.0 (AGPL-3.0). See LICENSE.
 */
export { MINIMAL_PAIRS, LANGUAGES, CATEGORIES, getMinimalPairs, } from './minimal-pairs.js';
export { WORD_CHOICE_MAP } from './word-choice.js';
export { minimalPairSchema, parseMinimalPair, parseMinimalPairs, } from './schemas/minimal-pair.js';
export { wordChoiceMapSchema, parseWordChoiceMap } from './schemas/word-choice.js';
export { PHRASE_CATEGORIES, phraseSchema, parsePhrase, parsePhrases, } from './schemas/phrase.js';
export { dictionaryEntrySchema, dictionarySchema, parseDictionaryEntry, parseDictionary, } from './schemas/dictionary.js';
