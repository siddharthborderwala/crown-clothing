import { createSelector } from 'reselect';

const shopSelector = (state) => state.shop;

export const selectCollections = createSelector([shopSelector], (shop) => shop.collections);

export const selectCollectionsForPreview = createSelector([selectCollections], (collections) =>
  collections ? Object.keys(collections).map((key) => collections[key]) : []
);

export const selectCollection = (collectionUrlParam) =>
  createSelector([selectCollections], (collections) =>
    collections ? collections[collectionUrlParam] : null
  );

export const selectIsCollectionFetching = createSelector([shopSelector], (shop) => shop.isFetching);

export const selectIsCollectionLoaded = createSelector(
  [shopSelector],
  (shop) => !!shop.collections
);
