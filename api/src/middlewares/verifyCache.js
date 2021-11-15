const NodeCache = require("node-cache");
const cache = new NodeCache({ stdTTL: 30 });
const httpStatus = require('http-status');

const verifyCache = (req, res, next) => {
    try {
        const keyword = req.query.keyword;
        if (cache.has(keyword)) {
            return res.status(httpStatus.OK).json(cache.get(keyword));
        }
        return next();
    } catch (err) {
        throw new Error(err);
    }
};

module.exports = { verifyCache, cache };