'use strict';
 

   angular.module('confusionApp')

         .controller('MenuController', ['$scope', 'menuFactory', function($scope, menuFactory) {
            

            $scope.tab = 1;
            $scope.filtText = '';
            $scope.showDetails = true;

            $scope.dishes= [];
            menuFactory.getDishes()
            .then(
                function(response) {
                    $scope.dishes = response.data;
                }
            );
                        
            $scope.select = function(setTab) {
                $scope.tab = setTab;
                
                if (setTab === 2) {
                    $scope.filtText = "appetizer";
                }
                else if (setTab === 3) {
                    $scope.filtText = "mains";
                }
                else if (setTab === 4) {
                    $scope.filtText = "dessert";
                }
                else {
                    $scope.filtText = "";
                }
            };

            $scope.isSelected = function (checkTab) {
                return ($scope.tab === checkTab);
            };
    
            $scope.toggleDetails = function() {
                $scope.showDetails = !$scope.showDetails;
            };
        }])



        .controller('ContactController', ['$scope', function($scope) {

            $scope.feedback = {mychannel:"", firstName:"", lastName:"", agree:false, email:"" };
            
            var channels = [{value:"tel", label:"Tel."}, {value:"Email",label:"Email"}];
            
            $scope.channels = channels;
            $scope.invalidChannelSelection = false;
                        
        }])

        .controller('FeedbackController', ['$scope', function($scope) {
            
            $scope.sendFeedback = function() {
                
                console.log($scope.feedback);
                
                if ($scope.feedback.agree && ($scope.feedback.mychannel == "")) {
                    $scope.invalidChannelSelection = true;
                    console.log('incorrect');
                }
                else {

                    $scope.invalidChannelSelection = false;
                    $scope.feedback = {mychannel:"", firstName:"", lastName:"", agree:false, email:"" };
                    $scope.feedback.mychannel="";
                    $scope.feedbackForm.$setPristine();
                    console.log($scope.feedback);
                }
            };
        }])



        // #####################- Repalacing routeParams with stateParams this is how we supply parameters to controllers.

        // .controller('dishDetailController', ['$scope','$routeParams', 'menuFactory', function($scope,$routeParams, menuFactory) {

        //     $scope.dish = [menuFactory.getDish(parseInt($routeParams.id,10))];
        //     $scope.filtext = '';

           
        // }])

            .controller('dishDetailController', ['$scope','$stateParams', 'menuFactory', function($scope,$stateParams, menuFactory) {

             $scope.dish = [];

             menuFactory.getDish(parseInt($stateParams.id,10))
            .then(
                function(response){
                    $scope.dish = [response.data];
                    $scope.showDish=true;
                }
            );

            $scope.filtext = '';

           
        }])




        .controller('FeedbackController_1', ['$scope', function($scope) {
            
            //Step 1: Create a JavaScript object to hold the comment from the form

            $scope.feedback = {rating:"5" , comment:"", author:"",  date:""};
 
           
            $scope.submitComment = function () {
            

                $scope.feedback.date = new Date().toISOString();
               
                $scope.dish[0].comments.push($scope.feedback)

                $scope.feedbackForm_1.$setPristine();

                $scope.feedback = {rating:"5" , comment:"", author:"",  date:""};
                
            }
        }])


        .controller('AboutController', ['$scope', 'corporateFactory', function($scope,corporateFactory) {

                $scope.leaders_details = corporateFactory.getLeaders();

            
        }])

        // .controller('IndexController', ['$scope','menuFactory', function ($scope,menuFactory) {
        .controller('IndexController',['$scope','corporateFactory','menuFactory',function($scope,corporateFactory,menuFactory){
            
                $scope.month_pro = [menuFactory.getpromotion(0)];

                $scope.featured = [];

                menuFactory.getDish(0)
                .then(
                    function(response){
                        $scope.featured = [response.data];
                        $scope.showDish = true;
                    }
                );

                $scope.leader_details  = [corporateFactory.getLeader(3)];
        }])


;
