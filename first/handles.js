module.exports = {
    serverHandle: function (req, res) { 
        const url = require('url')
        const qs = require('querystring')
        const route = url.parse(req.url)
        const path = route.pathname 
        const params = qs.parse(route.query)

        res.writeHead(200, {'Content-Type': 'text/html'});
        if (path === '/') {
            res.write('Hello anonymous')
        }

        if (path === '/hello' && 'name' in params) {
            if (params['name'] === 'Cedric') {
                res.write('Je suis '+ params['name']+' et je suis en 2eme annee cycle ingenieur a l ecole Centrale Supelec a Paris.')
            }
            else{  
                res.write('Hello ' + params['name'])
            }
        } 
        else {
            res.writeHead(404, {'Content-Type': 'text/html'});
        }
        res.end();
    }
}