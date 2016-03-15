(function () {
  angular
    .module('trevi')
    .controller('Main', Main);

  Main.$inject = [
    '$scope'
  ];

  function Main (
    $scope
  ) {
    var vm = this;

    vm.name = '';

    vm.value = 0;

    vm.addValue = addValue;

    vm.subValue = subValue;

    function setName (name) {
      vm.name = name || '';
    }

    function addValue () {
      vm.value++;
    }

    function subValue () {
      vm.value--;
      vm.value = vm.value < 0 ? 0 : vm.value;
    }
  }
})();
