import { Cart } from "../interfaces/models/checkout/cart/Cart";
import {
  getCheckoutCartEndpoint,
  getCheckoutCartProductEndpoint,
  getCheckoutPromotionCodeEndpoint,
  getCheckoutCartLineItemEndpoint
} from "../endpoints";
import { apiService } from "../apiService";
import { ContextTokenResponse } from "../interfaces/response/ContextTokenResponse";
import { update } from "..";
import { CartLineItemType } from "../interfaces/cart/CartLineItemType";

/**
 * When no sw-context-token given then this method return an empty cart with the new sw-context-token.
 *
 * When sw-context-token given then this method simply returns the current state of the cart.
 *
 * As the purpose of this method is not clear we recommend to use getCart() method because its behaviour seems to be the same.
 */
export async function createCart(): Promise<ContextTokenResponse> {
  const resp = await apiService.post(getCheckoutCartEndpoint());
  let contextToken = resp.data["sw-context-token"];
  update({ contextToken });
  return { contextToken };
}

/**
 * Get the current cart for the sw-context-token.
 */
export async function getCart(): Promise<Cart> {
  const resp = await apiService.get(getCheckoutCartEndpoint());

  return resp.data;
}

/**
 * Add specific quantity of the product to the cart by productId.
 *
 * Warning: This method does not change the state of the cart in any way if productId already exists in a cart. For changing the quantity use addQuantityToCartLineItem or changeCartLineItemQuantity methods.
 */
export async function addProductToCart(
  productId: string,
  quantity: number
): Promise<Cart> {
  let params = { quantity: quantity };
  const resp = await apiService.post(
    getCheckoutCartProductEndpoint(productId),
    params
  );

  return resp.data;
}

/**
 * Increase the current quantity in specific cart line item by given quantity.
 *
 * Example: If current quantity is 3 and you pass 2 as quantity parameter, you will get a new cart's state with quantity 5.
 */
export async function addQuantityToCartLineItem(
  itemId: string,
  quantity: number
): Promise<Cart> {
  let params = { type: CartLineItemType.PRODUCT, quantity: quantity };
  const resp = await apiService.post(
    getCheckoutCartLineItemEndpoint(itemId),
    params
  );

  return resp.data;
}

/**
 * Change the current quantity in specific cart line item to given quantity.
 *
 * Example: If current quantity is 3 and you pass 2 as quantity parameter, you will get a new cart's state with quantity 2.
 */
export async function changeCartLineItemQuantity(
  itemId: string,
  newQuantity: number
): Promise<Cart> {
  let params = { quantity: newQuantity };
  const resp = await apiService.patch(
    getCheckoutCartLineItemEndpoint(itemId),
    params
  );

  return resp.data;
}

/**
 * Delete the cart line item by id.
 *
 * This method may be used for deleting "product" type item lines as well as "promotion" type item lines.
 */
export async function removeCartLineItem(itemId: string): Promise<Cart> {
  const resp = await apiService.delete(getCheckoutCartLineItemEndpoint(itemId));

  return resp.data;
}

/**
 * Add new promotion code to the cart by its code.
 *
 */
export async function addPromotionCode(promotionCode: string): Promise<Cart> {
  const resp = await apiService.post(
    getCheckoutPromotionCodeEndpoint(promotionCode)
  );

  return resp.data;
}
