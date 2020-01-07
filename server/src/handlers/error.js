exports.notFound = (req, res, next) => {
    const err = new Error("Page not found");
    err.status = 404;
    next(err);
}

exports.errorHandler = (err, req, res, next) => {
    const { status, message } = err;
    return res
        .status(status || 500)
        .json({
            error: { message, status }
        })
}