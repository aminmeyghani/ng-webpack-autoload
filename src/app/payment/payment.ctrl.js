export default ngModule => {
  ngModule.controller('paymentCtrl', function($scope, paymentSvc) {
    $scope.paymentData = `Data: 123, ${paymentSvc.data()}`;
    $scope.testData = 5;
    this.name = 'paymentCtrl';
  });
};
