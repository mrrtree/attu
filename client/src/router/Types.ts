export enum ALL_ROUTER_TYPES {
  // '/'
  OVERVIEW = 'overview',
  // '/collections'
  COLLECTIONS = 'collections',
  // '/collections/:collectionId'
  COLLECTION_DETAIL = 'collection_detail',
  // 'search'
  SEARCH = 'search',
  // 'system'
  SYSTEM = 'system',
  // plugins
  PLUGIN = 'plugin',
  USER = 'user',
  DATABASES = 'databases',
}

export type NavInfo = {
  navTitle: string;
  backPath: string;
  showDatabaseSelector: boolean;
};
