/**
 * Copyright (C) 2016-2026 Husain Alamri (H4n) and Xenolexia Foundation.
 * Licensed under the GNU Affero General Public License v3.0 (AGPL-3.0). See LICENSE.
 */

import { z } from 'zod';
import type { WordChoiceMap } from '../types/word-choice.js';

export const wordChoiceMapSchema = z.record(z.string(), z.string());

export function parseWordChoiceMap(data: unknown): WordChoiceMap {
  return wordChoiceMapSchema.parse(data) as WordChoiceMap;
}
