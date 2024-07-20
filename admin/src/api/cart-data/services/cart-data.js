'use strict';

/**
 * cart-data service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::cart-data.cart-data');
