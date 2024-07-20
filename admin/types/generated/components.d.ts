import type { Schema, Attribute } from '@strapi/strapi';

export interface OrderedItemOrderedItem extends Schema.Component {
  collectionName: 'components_ordered_item_ordered_items';
  info: {
    displayName: 'ordered-item';
  };
  attributes: {
    product: Attribute.Relation<
      'ordered-item.ordered-item',
      'oneToOne',
      'api::product.product'
    >;
    quantity: Attribute.Integer;
    price: Attribute.Decimal;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'ordered-item.ordered-item': OrderedItemOrderedItem;
    }
  }
}
