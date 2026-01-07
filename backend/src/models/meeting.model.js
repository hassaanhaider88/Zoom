import mongoose, { Schema } from "mongoose";

const meetingSchema = new Schema({
  user_id: { type: String },
  meetingCode: { type: String, required: true },
  IsLiveNow: { type: Boolean, default: false },
  date: { type: Date, default: Date.now, required: true },

});

const Meeting = mongoose.model("Meeting", meetingSchema);

export { Meeting };
