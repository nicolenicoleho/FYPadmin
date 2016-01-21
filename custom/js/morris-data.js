$(function() {

    var offerRequestData = [
        {"Date": "18/10", "Offer": 34, "Request": 66},
        {"Date": "19/10", "Offer": 23, "Request": 49},
        {"Date": "20/10", "Offer": 38, "Request": 53},
        {"Date": "21/10", "Offer": 42, "Request": 48},
        {"Date": "22/10", "Offer": 38, "Request": 52},
        {"Date": "23/10", "Offer": 27, "Request": 36},
        {"Date": "24/10", "Offer": 34, "Request": 51},
    ];

    Morris.Bar({
        element: 'offerRequestChart',
        data: offerRequestData,
        xkey: 'Date',
        ykeys: ['Offer', 'Request'],
        labels: ['Offer', 'Request'],
        hideHover: 'auto',
        smooth: false,
        resize: true
    });

    var usersData = [
        {value: 125, label: "Drivers"},
        {value: 256, label: "Passengers"},
    ];

    Morris.Donut({
        element: 'usersChart',
        data: usersData,
        colors: ['#0ba462', '#337ab7'],
        resize: true
    }).select(0);

    var users2Data = [
        {value: 220, label: "Male"},
        {value: 161, label: "Female"},
    ];

    Morris.Donut({
        element: 'users2Chart',
        data: users2Data,
        colors: ['#337ab7', '#d9534f'],
        resize: true
    });

});
