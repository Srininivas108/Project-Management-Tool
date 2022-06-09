const mongoose = require("mongoose");

const ProjectSchema = new mongoose.Schema(
  {
    category: {
      type: String,
      require: [true, "Project category is Required"],
    },
    manager: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
      
    },
    status:{
      type:String,
      required:true,
    },
  createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Project =mongoose.model('Project', ProjectSchema);

module.exports =Project;
