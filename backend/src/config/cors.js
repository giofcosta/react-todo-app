module.exports = function(req, res, next) {
    res.header('Acces-Control-Allow-Origin', '*')
	res.header('Acces-Control-Allow-Methods', 'GET', 'POST','OPTION','PUT', 'PATCH', 'DELETE')
	res.header('Acces-Control-Allow-Headers', 'Origin', 'X-Requested-With', 'Content-Type', 'Accept')
	next()
}