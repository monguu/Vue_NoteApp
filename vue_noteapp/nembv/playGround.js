const Company = require("./models/Companis");
const Group = require("./models/groups");
exports.test = {
  model: () => {
    console.log("모델 테스트");

    Company.findOne({ name: "테스트" })
      .then(cp => {
        if (!cp) throw new Error("회사가 존재하지 않음");
        const gr = new Group({
          name: "소속2",
          cp_id: cp._id,
        });
        return gr.save();
      })
      .then(gr => {
        return Company.findOneAndUpdate(
          { _id: gr.cp_id },
          { $addToSet: { gr_ids: gr._id } },
          { new: true },
        ).populate("gr_ids");
      })
      .then(r => {
        console.log(r);
      })
      .catch(err => console.error(err));
  },
};
