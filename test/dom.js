var { JSDOM } = require('jsdom');

global.document = new JSDOM('');
global.window = document.window;
