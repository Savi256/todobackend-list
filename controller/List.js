const Tododocument = require("../model/todoModal");

exports.createTododocument = (req, res) => {
  try {
    const customlist = new Tododocument({
      // owner:req.user.id,
      title: req.body.title,
      Note: req.body.Note,
    });
    // console.log(customlist.owner)
    customlist.save(customlist);
    console.log(customlist);

    res.send({
      // timed,
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
    const user = await Tododocument.find({
      // owner: req.user,
    });
    // .exec((err,bit)=>{
    //   bit.timeda()
    // });

    let chat = "";
    for (i = user.length - 1; i >= 0; i--) {
      chat = chat + user[i];
    }

    console.log(user.slice(0, 3));
    // const bit=user.map((all)=>{return all.timeda()})
    // console.log(bit)
    res.send({
      // bit,
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
    const userz = await Tododocument.findOne({ _id: id });
    const we = userz.timeda();
    res.send({
      users: users,
      we,
    });
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
exports.updatelist = async (req, res) => {
  const id = req.params.id;
  try {
    const update = await Tododocument.findByIdAndUpdate(id, req.body);
    res.json(update);
    console.log(update);
  } catch (error) {
    res.json(error.message);
  }
};
