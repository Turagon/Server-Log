function serverLog (req, res, next) {
  const method = req.method
  const url = req.originalUrl
  const host = req.headers.host
  req.time = new Date()
  const timeDifference = function () {
    const resTime = new Date()
    console.log(req.time.toLocaleString('zh-TW', { timeZone: 'Asia/Taipei', hour12: false }), " | ", method, "from", host + url, " | ", "total time : ", resTime.getTime() - req.time.getTime(), "ms")
  }
  res.once('finish', timeDifference)
  res.once('close', timeDifference)
  return next()
}

module.exports = serverLog