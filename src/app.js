import './assets/scss/app.scss';

import 'jquery';
import 'popper.js';
import 'bootstrap';

// https://xdsoft.net/jqplugins/autocomplete/
import 'jquery-autocomplete';

console.log('Its working just fine');

$(function () {
    var states = [
        'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California',
        'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia',
        'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa',
        'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland',
        'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi',
        'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire',
        'New Jersey', 'New Mexico', 'New York', 'North Carolina',
        'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania',
        'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee',
        'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington',
        'West Virginia', 'Wisconsin', 'Wyoming'
    ];

    $("#auto1").autocomplete({
        source: [
            states
            // function (text, add) {
            //     let array = [];
            //     for (let i = 0; i < 10; i++) {
            //         array.push(`${text}-${i}`)
            //     }
            //     add(array);
            // }
        ],
        limit: 10,
        visibleLimit: 10,
    });

    $('button').click(function() {
        $('#auto1').trigger('open');
        $('#auto1').focus();
    });
});