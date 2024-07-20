'use strict';

/**
 * sub-cat service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::sub-cat.sub-cat');
