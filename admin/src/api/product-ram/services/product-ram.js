'use strict';

/**
 * product-ram service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::product-ram.product-ram');
