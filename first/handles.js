module.exports = {
    serverHandle: function (req, res) { 
        const url = require('url')
        const qs = require('querystring')
        const route = url.parse(req.url)
        const path = route.pathname 
        const params = qs.parse(route.query)

        res.writeHead(200, {'Content-Type': 'text/html'});
        if (path === '/') {
            res.write('Hello anonymous! To see how it works, type "hello?name=" in your search bar following "localhost:8080/".')
            res.write('After the =, write either Mathieu or Iandraina. And test it with another different name to see what happens.')
        }

        else if (path === '/hello' && 'name' in params) {
            if (params['name'] === 'Iandraina' || params['name'] === 'Mathieu') {
                res.write('My name is '+ params['name']+'. Currently, I am studying at ECE Paris, an engineering school. I am following a classic cursus in 2nd year of engineering cycle specialized in Information System.')
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