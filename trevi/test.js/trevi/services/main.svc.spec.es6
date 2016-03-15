(() => {
  'use strict';
  describe('Main Service', function () {
    var MainSvc;

    beforeEach(module('trevi'));
    beforeEach(inject(function (_MainSvc_) {
      MainSvc = _MainSvc_;
    }));

    describe('Simple tests', function () {
      it('should have correct inital value', function () {
        expect(MainSvc.name).toBe('');
        expect(MainSvc.value).toBe(0);
      });

      it('should add properly', function () {
        MainSvc.addValue();
        expect(MainSvc.value).toBe(1);

        var addCount = 14;
        for (var i=0; i<addCount; i++) {
          MainSvc.addValue();
        }
        expect(MainSvc.value).toBe(addCount + 1);
      });

      it('should sub properly', function () {
        MainSvc.value = 10;

        var subCount = 4;
        for (var i=0; i<subCount; i++) {
          MainSvc.subValue();
        }

        expect(MainSvc.value).toBe(10 - subCount);
      });

      it('cant be smaller than 0', function () {
        MainSvc.addValue();
        expect(MainSvc.value).toBe(1);

        MainSvc.subValue();
        expect(MainSvc.value).toBe(0);
        MainSvc.subValue();
        expect(MainSvc.value).toBe(0);
        MainSvc.subValue();
        expect(MainSvc.value).toBe(0);
        MainSvc.subValue();
        expect(MainSvc.value).toBe(0);
      });
    });
  });
})();
