(() => {
  'use strict';
  describe('Main Service', () => {
    var MainSvc;

    beforeEach(module('trevi'));
    beforeEach(inject((_MainSvc_) => {
      MainSvc = _MainSvc_;
    }));

    describe('Simple tests', () => {
      it('should have correct inital value', () => {
        expect(MainSvc.name).toBe('');
        expect(MainSvc.value).toBe(0);
      });

      it('should add properly', () => {
        MainSvc.addValue();
        expect(MainSvc.value).toBe(1);

        var addCount = 14;
        for (var i=0; i<addCount; i++) {
          MainSvc.addValue();
        }
        expect(MainSvc.value).toBe(addCount + 1);
      });

      it('should sub properly', () => {
        MainSvc.value = 10;

        var subCount = 4;
        for (var i=0; i<subCount; i++) {
          MainSvc.subValue();
        }

        expect(MainSvc.value).toBe(10 - subCount);
      });

      it('cant be smaller than 0', () => {
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
