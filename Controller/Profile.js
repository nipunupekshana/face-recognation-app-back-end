
const profilehandler=(req, res,db) => {
  const { id } = req.params;
  db.select("*")
    .from("users")
    .where({
      id: id
    })
    .then(user => {
      if (user.length) {
        res.json(user[0]);
      } else {
        res.json("empty array");
      }
    })
    .catch(err => res.status(404).json(err));
};

module.exports = {
    profilehandler : profilehandler
}