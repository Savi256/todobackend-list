const Tododocument = require("../model/todoModal");

exports.createTododocument = (req, res) => {
  try {
    const customlist = new Tododocument({
      list: req.body.list,
    });
    customlist.save(customlist);
    console.log(customlist);

    res.send({
      status: 200,
      message: customlist,
    });
    return;
  } catch (error) {
    res.json(error.message);
    console.log("error");
  }
};

exports.getTodolist = async (req, res) => {
  try {
    const user = await Tododocument.find({}).lean();

    let chat = "";
    for (i = user.length - 1; i >= 0; i--) {
      chat = chat + user[i];
    }
    // returnchat.split('').slice(0,3)

    // res.send(user);
    console.log(user.slice(0, 3));

    res.send({
      display: user,
      user: user.reverse().slice(0, 3),
      message: user.length,
    });
  } catch (error) {
    res.json(error.message);
  }
};
exports.getspecificlist = async (req, res) => {
  try {
    const id = req.params.id;
    // const option={new:true}
    const users = await Tododocument.findById(id).lean();

    res.send(users);
  } catch (error) {
    console.log(error.message);
    res.json(error.message);
  }
};
exports.deletefromlist = async (req, res) => {
  try {
    const id = req.params.id;
    const deletedlist = await Tododocument.findByIdAndDelete(id).lean();

    res.json(deletedlist);
  } catch (error) {
    res.json(error.message);
  }
};
