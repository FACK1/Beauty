const handler = require('./handler');
const url = require('url');
const router =(request,response)=>{
const {pathname} = url.parse(request.url)
console.log(pathname)
	if (pathname === '/' ) {
		handler.homeHandler(request,response);
	}
	else if (pathname.includes('/search/')) {
		handler.searchHandler(request,response);
	}
	else
	{
		handler.publicHandler(request,response);
	}
}
module.exports=router;
