import './assets/scss/app.scss';

import $ from 'jquery';

import handleIndexPage from './index';
import handleAboutPage from './about';

switch($('html').data('page')) {
    case 'index': {
        handleIndexPage();
        break;
    }
    case 'about': {
        handleAboutPage();
        break;
    }
}

console.log('Its working just fine');
