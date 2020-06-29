import { Product } from "@shopware-pwa/commons/interfaces/models/content/product/Product";

/**
 * Get product free shipping property
 *
 * @alpha
 */
export function getProductFreeShipping(product?: Product): boolean {
  return product?.shippingFree || false;
}
