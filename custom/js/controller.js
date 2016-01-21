angular.module('usersApp', []).controller('usersCtrl', function($scope) {
    $scope.users = [
        {id:'0', username:'admin', password:'adminpwd', phone:'1234 5678', gender:'M', status:'Authorized', regdate:'2015/09/24 12:08'},
        {id:'1', username:'user', password:'userpwd', phone:'1234 5678', gender:'F', status:'Authorized', regdate:'2015/10/16 23:47'},
        {id:'2', username:'user1', password:'userpwd1', phone:'1234 5678', gender:'M', status:'Authorized', regdate:'2015/10/16 23:47'},
        {id:'3', username:'user2', password:'userpwd2', phone:'1234 5678', gender:'M', status:'Authorized', regdate:'2015/10/17 13:45'},
        {id:'4', username:'user3', password:'userpwd3', phone:'1234 5678', gender:'F', status:'Unauthorized', regdate:'2015/10/18 22:47'},
        {id:'5', username:'user4', password:'userpwd4', phone:'1234 5678', gender:'M', status:'Authorized', regdate:'2015/10/19 23:37'},
        {id:'6', username:'user5', password:'userpwd5', phone:'1234 5678', gender:'M', status:'Unauthorized', regdate:'2015/10/20 20:44'},
        {id:'7', username:'user6', password:'userpwd6', phone:'1234 5678', gender:'F', status:'Authorized', regdate:'2015/10/21 23:47'},
        {id:'8', username:'user7', password:'userpwd7', phone:'1234 5678', gender:'F', status:'Authorized', regdate:'2015/10/22 15:46'},
        {id:'9', username:'user8', password:'userpwd8', phone:'1234 5678', gender:'F', status:'Authorized', regdate:'2015/10/23 23:48'},
        {id:'10', username:'user9', password:'userpwd9', phone:'1234 5678', gender:'M', status:'Authorized', regdate:'2015/10/24 14:27'},
        {id:'11', username:'user10', password:'userpwd10', phone:'1234 5678', gender:'M', status:'Authorized', regdate:'2015/10/25 23:17'},
        {id:'12', username:'user11', password:'userpwd11', phone:'1234 5678', gender:'F', status:'Authorized', regdate:'2015/10/26 18:47'},
		{id:'13', username:'user12', password:'userpwd12', phone:'1234 5678', gender:'F', status:'Authorized', regdate:'2015/10/27 06:14'},
        {id:'14', username:'user13', password:'userpwd13', phone:'1234 5678', gender:'M', status:'Authorized', regdate:'2015/10/28 02:05'},
    ];
	
	/*Member.validationandregister({name:'ken'}, function(value, responseheader){
		
	}, function(error){
		
	});*/
	
	$scope.cars = [
		{id:'2',license_number:'GG404', color:'blue', maker:'Benz'},
		{id:'5',license_number:'GG504', color:'red', maker:'Benz'},
		{id:'7',license_number:'GG604', color:'grey', maker:'Benz'},
		{id:'10',license_number:'GG704', color:'black', maker:'Benz'},
		{id:'7',license_number:'GG404', color:'black', maker:'Benz'},
	];
	
	$scope.editingData = {};
    
    for (var i = 0, length = $scope.users.length; i < length; i++) {
      $scope.editingData[$scope.users[i].id] = false;
    }
	
    $scope.modify = function(user){
        $scope.editingData[user.id] = true;
    };


    $scope.update = function(user){
        $scope.editingData[user.id] = false;
    };
	
});

angular.module('timelineApp', []).controller('timelineCtrl', function($scope) {
    $scope.events = [
        {type:'Offer', username:'user4', time:'11 mins ago', from:'HKUST', to:'Choi Hung'},
        {type:'Request', username:'user7', time:'23 mins ago', from:'Hang Hau', to:'HKUST'},
        {type:'Request', username:'user12', time:'47 mins ago', from:'HKUST', to:'Choi Hung'},
        {type:'Offer', username:'user2', time:'1 hour ago', from:'HKUST', to:'Hang Hau'},
        {type:'Request', username:'user5', time:'1 hour ago', from:'Sai Kung', to:'HKUST'},
    ];
});

var rideApp = angular.module('rideApp', []);
rideApp.controller('rideOfferCtrl', function($scope) {
    $scope.offers = [
        {id:'4', username:'user4', initLoc:'HKUST', destination:'Choi Hung', availableSeats: '3', genderPref:'-', timestamp:'2015/10/25 06:48'},
        {id:'2', username:'user2', initLoc:'HKUST', destination:'Hang Hau', availableSeats: '2', genderPref:'F', timestamp:'2015/10/26 13:24'},
    ];
});
rideApp.controller('rideRequestCtrl', function($scope) {
    $scope.requests = [
        {id:'7', username:'user7', initLoc:'Hang Hau', destination:'HKUST', genderPref:'-', timestamp:'2015/10/25 07:08'},
        {id:'12', username:'user12', initLoc:'HKUST', destination:'Choi Hung', genderPref:'F', timestamp:'2015/10/27 12:54'},
        {id:'5', username:'user5', initLoc:'Sai Kung', destination:'HKUST', genderPref:'M', timestamp:'2015/10/29 09:23'},
    ];
});
rideApp.controller('joinCtrl', function($scope) {
    $scope.joins = [
        {driverId:'7', memberId:'1', timestamp:'2015/10/25 07:08', match_icon:'icon_001.png', finished:'Y'},
        {driverId:'3', memberId:'2', timestamp:'2015/10/27 12:54', match_icon:'icon_002.png', finished:'Y'},
    ];
});

var vehicleApp = angular.module('vehicleApp', []);

vehicleApp.controller('vehicleRegCtrl', function($scope) {
    $scope.registers = [
		{license_number:'GG404', color:'blue', maker:'Benz'},
		{license_number:'GG504', color:'red', maker:'Benz'},
		{license_number:'GG604', color:'grey', maker:'Benz'},
		{license_number:'GG704', color:'black', maker:'Benz'},
    ];
	
	$scope.editingData = {};
    
    for (var i = 0, length = $scope.registers.length; i < length; i++) {
      $scope.editingData[$scope.registers[i].license_number] = false;
    }
	
    $scope.modify = function(register){
        $scope.editingData[register.license_number] = true;
    };


    $scope.update = function(register){
        $scope.editingData[register.license_number] = false;
    };
	
});

vehicleApp.controller('vehicleOwnCtrl', function($scope) {
    $scope.owns = [
        {id:'7', license_number:'GG404'},
        {id:'12', license_number:'GG504'},
        {id:'5', license_number:'GG604'},
		{id:'5', license_number:'GG704'},
    ];
	
	$scope.editingData = {};
    
    for (var i = 0, length = $scope.owns.length; i < length; i++) {
      $scope.editingData[$scope.owns[i].id] = false;
    }
	
    $scope.modify = function(own){
        $scope.editingData[own.id] = true;
    };


    $scope.update = function(own){
        $scope.editingData[own.id] = false;
    };
});