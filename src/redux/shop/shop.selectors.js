import { createSelector } from 'reselect';

const COLLECTION_ID_MAP = new Map();
COLLECTION_ID_MAP.set('hats', 1);
COLLECTION_ID_MAP.set('sneakers', 2);
COLLECTION_ID_MAP.set('jackets', 3);
COLLECTION_ID_MAP.set('mens', 4);
COLLECTION_ID_MAP.set('womens', 5);

const shopSelector = (state) => state.shop;

export const selectCollections = createSelector(
  [shopSelector],
  (shop) => shop.collections
);

export const selectCollection = (collectionUrlParam) =>
  createSelector([selectCollections], (collections) =>
    collections.get(collectionUrlParam)
  );
