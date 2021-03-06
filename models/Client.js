const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const clientSchema = new Schema(
  {
    name: {
      type: String,
      required: "Campo de nombre obligatorio"
    },
    last_name: String,
    description: String,
    calls: [
      {
        type: Schema.Types.ObjectId,
        ref: "Call"
      }
    ]
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at"
    }
  }
);

module.exports = mongoose.model("Client", clientSchema);
