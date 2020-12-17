'use strict';

const DigitalOcean = require('../dist/do-wrapper').default,
      should = require('chai').should();

describe('do-wrapper', function () {
  const testSize = 10;
  const testToken = 'a-test-token';

  var api;
  beforeEach(function () {
    api = new DigitalOcean(testToken, testSize);
  });

  describe('On instantiation of a new DigitalOcean class', function () {
    it('should bind the correct modules', function () {
      const expectedModules = [
        'account',
        'actions',
        'cdn',
        'certificates',
        'databases',
        'domains',
        'droplets',
        'firewalls',
        'floatingIPs',
        'keys',
        'kubernetes',
        'images',
        'loadBalancers',
        'projects',
        'regions',
        'reports',
        'sizes',
        'snapshots',
        'tags',
        'volumes'
      ];

      expectedModules.should.have.members(Object.keys(api));
    });

    describe('each module', function () {
      it('should have the correct page size set', function () {
        Object.keys(api).forEach((m) => {
          const modulePageSize = api[m].pageSize;
          modulePageSize.should.equal(testSize);
        });
      });
  
      it('should have a requestHelper injected', function () {
        Object.keys(api).forEach((m) => {
          const module = api[m];
          module.should.have.property('requestHelper');
        });
      });
    })
  });
});
