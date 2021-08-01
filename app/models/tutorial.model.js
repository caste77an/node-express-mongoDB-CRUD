// column data modified 20210802
module.exports = (mongoose) => {
  var schema = mongoose.Schema(
    {
      user: String,
      email: String,
      name: String,
      college: String,
      class: String,
      gender: String,
      status: Boolean,
    },
    { timestamps: true }
  );

  schema.method("toJSON", function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const Tutorial = mongoose.model("tutorial", schema);
  return Tutorial;
};
