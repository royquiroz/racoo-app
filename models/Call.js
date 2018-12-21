const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const callSchema = new Schema(
  {
    commentary: {
      type: String,
      required: "El campo de comentario es obligatorio"
    },
    status: {
      type: String,
      enum: ["PENDING", "FINALIZED"],
      default: "PENDING"
    },
    kind: {
      type: String,
      enum: ["CALL", "SOS", "REVERSE"],
      default: "CALL"
    },
    ending: {
      type: String,
      enum: ["PRODUCTIVE", "UNPRODUCTIVE"],
      default: "PRODUCTIVE"
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User"
    },
    client: {
      type: Schema.Types.ObjectId,
      ref: "Client"
    }
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at"
    }
  }
);

module.exports = mongoose.model("Call", callSchema);
