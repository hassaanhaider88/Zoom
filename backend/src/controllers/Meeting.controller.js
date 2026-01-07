import { Meeting } from "../models/meeting.model.js";

const CheckMeetingExists = async (req, res) => {
  try {
    const { meetingId } = req.body;
    if (!meetingId || meetingId.trim() === "") {
      return res.status(400).json({ message: "Meeting ID is required" });
    }
    const meetingExists = await Meeting.findOne({ meetingCode: meetingId });
    console.log(meetingExists);
    if (meetingExists) {
      return res.json({
        status: 200,
        message: "Meeting exists",
        meetingExists,
      });
    } else {
      return res.json({
        status: 400,
        message: "Meeting does not exist",
        meetingExists: null,
      });
    }
  } catch (error) {
    return res.json({
      status: 500,
      message: "Internal server error",
      error: error.message,
    });
  }
};

const CencelMeetingAvailability = async (req, res) => {
  try {
    const { meetingId } = req.body;
    if (!meetingId || meetingId.trim() === "") {
      return res.status(400).json({ message: "Meeting ID is required" });
    }
    const meeting = await Meeting.findOne({ meetingCode: meetingId });
    if (meeting) {
      await Meeting.updateOne({ meetingCode: meetingId }, { IsLiveNow: false });
      return res.json({
        status: 200,
        message: "Meeting availability canceled",
      });
    } else {
      return res.json({
        status: 404,
        message: "Meeting not found",
      });
    }
  } catch (error) {}
};

export { CheckMeetingExists,CencelMeetingAvailability };
