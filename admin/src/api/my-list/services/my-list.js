'use strict';

/**
 * my-list service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::my-list.my-list');
