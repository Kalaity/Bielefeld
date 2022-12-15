const date = (req, res, next) => {
  const date = new Date();
  const day = date.getDay();
  const hour = date.getHours();

  if (!(day >= 1 && day <= 5 && hour >= 9 && hour <= 12)) {
    res.send("<h1>Page not Found !<h1>");
  }

  next();
};

module.exports = date;