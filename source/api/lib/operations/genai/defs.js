// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

const {
  IABTaxonomy,
  ApiOps: {
    Genre,
    Sentiment,
    Summarize,
    Taxonomy,
    Theme,
    TVRatings,
    Custom,
  },
} = require('core-lib');

const TASK = {
  Genre: Genre.split('/')[1],
  Sentiment: Sentiment.split('/')[1],
  Summarize: Summarize.split('/')[1],
  Taxonomy: Taxonomy.split('/')[1],
  Theme: Theme.split('/')[1],
  TVRatings: TVRatings.split('/')[1],
  Custom: Custom.split('/')[1],
};

const LIST_OF_GENRES = [
  'Comedy',
  'Action',
  'Horror',
  'Thriller',
  'Western film',
  'Drama',
  'Adventure',
  'Historical Fiction',
  'Fantasy',
  'Romance',
  'Fiction',
  'Narrative',
  'Science fiction',
  'Mystery',
  'Satire',
  'Speculative fiction',
  'Action fiction',
  'Adventure fiction',
  'Isekai',
  'Humor',
  'Hybrid genre',
  'Melodrama',
  'Mystery',
  'Historical drama',
  'Crime fiction',
  'Romantic comedy',
  'Dark comedy',
  'History',
  'Fantasy',
  'Slapstick',
  'Magical Realism',
  'Comedy horror',
  'Coming-of-age story',
  'Psychological thriller',
  'Psychological horror',
  'High fantasy',
  'Fairy tale',
  'Suspense',
  'Farce',
  'Psychology',
  'Supernatural',
  'Detective fiction',
  'Conspiracy fiction',
  'Biography',
  'Wuxia',
  'Legal drama',
  'Religious',
  'Non-determined',
];

const LIST_OF_RATINGS = [
  'G',
  'PG',
  'PG-13',
  'R',
  'NC-17',
];

const LIST_OF_THEMES = [
  'Love',
  'Good versus evil',
  'Justice',
  'Coming-of-age story',
  'Death',
  'Humanity vs technology',
  'Man vs nature',
  'Reason vs faith',
  'Revenge',
  'Sacrifice',
  'Family',
  'Society',
  'War',
  'Action',
  'Comedy',
  'Drama',
  'Innocence',
  'Overcoming adversity',
  'Perseverance',
  'Philosophical',
  'Power',
  'Survival',
  'Virtue',
  'Non-determined',
];

const LIST_OF_SENTIMENTS = [
  'Neural',
  'Positive',
  'Negative',
];

module.exports = {
  TASK,
  LIST_OF_GENRES,
  LIST_OF_RATINGS,
  LIST_OF_SENTIMENTS,
  LIST_OF_THEMES,
  LIST_OF_TAXONOMY: IABTaxonomy,
};