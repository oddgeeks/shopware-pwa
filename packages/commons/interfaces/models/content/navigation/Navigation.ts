import { Product } from "@shopware-pwa/commons/interfaces/models/content/product/Product";
import { Media } from "@shopware-pwa/commons/interfaces/models/content/media/Media";

/**
 * @alpha
 */
export interface NavigationResponse {
  count: number;
  children: NavigationElement[];
}

/**
 * @alpha
 */
export interface NavigationElement {
  id: string;
  name: string;
  route: {
    path: string;
    resourceType: string;
  };
  children: NavigationElement[] | null;
  count: number;
  level: number;
  extensions: any[];
  translated: any;
}

/**
 * @beta
 */
export interface SeoUrl {
  salesChannelId: string;
  languageId: string;
  routeName: string;
  foreignKey: string;
  pathInfo: string;
  seoPathInfo: string;
  isCanonical: boolean;
  isModified: boolean;
  isDeleted: boolean;
  isValid: null | boolean;
  language: null | boolean;
  url: null | string;
  customFields: null | any;
  error: null | any;
  _uniqueIdentifier: string;
  versionId: null | string;
  translated: [];
  createdAt: Date;
  updatedAt: null | Date;
  extensions: any;
  id: string;
  apiAlias: string;
}

/**
 * @beta
 */
export interface StoreNavigationElement {
  seoUrls: SeoUrl[];
  parentId: string | null;
  autoIncrement: number;
  mediaId: string | null;
  name: string;
  breadcrumb: string[];
  path: string;
  level: number;
  active: boolean;
  childCount: number;
  displayNestedProducts: boolean;
  parent: StoreNavigationElement;
  children: null | any[];
  translations: any;
  media: Media | null;
  products: null | Product[];
  nestedProducts: null | Product[];
  afterCategoryId: null | string;
  customFields: null;
  tags: null;
  cmsPageId: string;
  cmsPage: null;
  slotConfig: null;
  externalLink: null;
  visible: true;
  type: string;
  description: string;
  metaTitle: string | null;
  metaDescription: string | null;
  keywords: string | null;
  _uniqueIdentifier: string;
  versionId: string;
  translated: any;
  createdAt: Date;
  updatedAt: Date;
  extensions: any;
  id: string;
  parentVersionId: string | null;
  afterCategoryVersionId: string | null;
  apiAlias: string;
}
