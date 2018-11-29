const url = require('url');
const handler = require('./handler');

const router = (request, response) => {
	const { pathname } = url.parse(request.url);

	if (pathname === '/') {
		handler.homeHandler(request, response);
	} else if (pathname.includes('.')) {
		handler.publicHandler(request, response);
	} else if (pathname.includes('/search/')) {
		handler.searchHandler(request, response);
	} else {
		handler.notFoundHandler(request, response);
	}
};
module.exports = router;
