(function () {
  'use strict';
  describe('Main controller', function () {
    var $controller, $rootScope;
    var MainCtrl;

    beforeEach(module('trevi'));
    beforeEach(inject(function ($injector) {
      $controller = $injector.get('$controller');
      $rootScope = $injector.get('$rootScope');

      MainCtrl = $controller('Main', {
        $scope: $rootScope.$new()
      });
    }));

    describe('Simple tests', function () {
      it('should have correct inital value', function () {
        expect(MainCtrl.name).toBe('');
        expect(MainCtrl.value).toBe(0);
      });

      it('should add properly', function () {
        MainCtrl.addValue();
        expect(MainCtrl.value).toBe(1);

        var addCount = 14;
        for (var i=0; i<addCount; i++) {
          MainCtrl.addValue();
        }
        expect(MainCtrl.value).toBe(addCount + 1);
      });

      it('should sub properly', function () {
        MainCtrl.value = 10;

        var subCount = 4;
        for (var i=0; i<subCount; i++) {
          MainCtrl.subValue();
        }

        expect(MainCtrl.value).toBe(10 - subCount);
      });

      it('cant be smaller than 0', function () {
        MainCtrl.addValue();
        expect(MainCtrl.value).toBe(1);

        MainCtrl.subValue();
        expect(MainCtrl.value).toBe(0);
        MainCtrl.subValue();
        expect(MainCtrl.value).toBe(0);
        MainCtrl.subValue();
        expect(MainCtrl.value).toBe(0);
        MainCtrl.subValue();
        expect(MainCtrl.value).toBe(0);
      });
    });
  });
})();
