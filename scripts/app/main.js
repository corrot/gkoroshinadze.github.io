var myApp = angular.module('myApp', []);

myApp.controller('myCtrl', [
    '$scope',
    function($scope) {
        $scope.skills = [{
            id: 0,
            title: 'HTML/CSS',
            qTitle: 'Expert',
            progress: 90
        }, {
            id: 1,
            title: 'Responsive Design',
            qTitle: 'Expert',
            progress: 90
        }, {
            id: 2,
            title: 'Bootstrap',
            qTitle: 'Expert',
            progress: 90
        }, {
            id: 3,
            title: 'Js',
            qTitle: 'Professional',
            progress: 80
        }, {
            id: 4,
            title: 'Ts',
            qTitle: 'Intermediate',
            progress: 50
        }, {
            id: 5,
            title: 'jQuery',
            qTitle: 'Professional',
            progress: 80
        }, {
            id: 6,
            title: 'AngularJS',
            qTitle: 'Professional',
            progress: 80
        }, {
            id: 7,
            title: 'C#',
            qTitle: 'Beginner',
            progress: 30
        }, {
            id: 8,
            title: 'SQL',
            qTitle: 'Beginner',
            progress: 30
        }, {
            id: 9,
            title: 'MVC',
            qTitle: 'Intermediate',
            progress: 50
        }, ];

        $scope.education = [{
            id: 0,
            title: 'Informatics, Bachelor',
            school: 'St. Andrew the First-Called Georgian University of the Patriarchate of Georgia',
            time: 'June, 2014'
        }, {
            id: 1,
            title: 'Primary Education',
            school: 'Tbilisi Physics – Mathematics state school #199 (Komarovi)',
            time: 'June, 2010'
        }];

        $scope.experience = [{
            id: 0,
            position: 'Front-End Developer',
            company: 'Lambda Games',
            time: 'March, 2017 - now',
            job: 'Creating UX and responsive Front-End for gambling websites',
            projects: [{
                id: 0,
                link: 'http://Jokerstars.ge',
                title: 'Joker'
            }, {
                id: 1,
                link: 'https://ljoker.lider-bet.com/Home/Index',
                title: 'Leader-Bet Joker'
            }, {
                id: 2,
                link: 'https://spinpoker.lider-bet.com/',
                title: 'Spin Poker'
            }, {
                id: 3,
                link: '#',
                title: 'Belote game for adjarabet.com and adjarabet.am'
            }, ]
        }, {
            id: 0,
            position: 'Junior Web Developer',
            company: 'Lambda Technologies',
            time: 'November, 2014 - March, 2017',
            job: 'Creating websites and games for gambling websites',
            projects: [{
                id: 0,
                link: 'http://lambda.ge',
                title: 'lambda.ge'
            }, {
                id: 1,
                link: 'https://mymeme.ge',
                title: 'mymeme.ge'
            }, {
                id: 2,
                link: 'https://play.google.com/store/apps/details?id=ge.lambda.Domeny',
                title: 'Domenty App'
            }, {
                id: 3,
                link: 'http://irenew.ge',
                title: 'irenew.ge'
            }, ]
        }];

        $scope.screens = [
            'images/screens/Belote_Balance.png',
            'images/screens/Belote_Create_Game.png',
            'images/screens/Belote_Main.png',
            'images/screens/Belote_Mobile(Landscape).png',
            'images/screens/Belote_Mobile(Portrait).png',
            'images/screens/JokerStars_Main.png',
            'images/screens/JokerStars_Mobile_Login.png',
            'images/screens/JokerStars_Seated.png',
            'images/screens/JokerStars_With_Password.png',
            'images/screens/LeaderBet_Joker_Mobile.png',
            'images/screens/LeaderBet_Joker_Web.png',
            'images/screens/SpinPoker_Mobile_Main.png',
            'images/screens/SpinPoker_Mobile_Sidebar.png',
            'images/screens/SpinPoker_Web.png'
        ]
    }
]);

window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0; // For Chrome, Safari and Opera 
    document.documentElement.scrollTop = 0; // For IE and Firefox
}