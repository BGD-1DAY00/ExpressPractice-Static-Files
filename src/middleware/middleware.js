
const logger = (req, res, next)=>{
    req.hello = 'always'
    req.be = 'be'
    req.here = 'my'
    req.not = 'maybe'
    next()
}
module.exports = {logger}