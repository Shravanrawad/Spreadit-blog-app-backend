'use strict';

/**
 * savepost service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::savepost.savepost');
