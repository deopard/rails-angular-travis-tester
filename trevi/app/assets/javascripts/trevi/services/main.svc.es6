(() => {
  class MainSvc {
    constructor () {
      this.name = '';
      this.value = 0;
    }

    setName (name='') {
      this.name = name;
    }

    addValue () {
      this.value++;
    }

    subValue () {
      this.value--;
      this.value = this.value < 0 ? 0 : this.value;
    }
  }

  MainSvc.$inject = [];
  angular
    .module('trevi')
    .service('MainSvc', MainSvc);
})();
