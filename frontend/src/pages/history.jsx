import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, Typography, IconButton, Box } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import server from "../environment";

export default function History() {
  const { getHistoryOfUser } = useContext(AuthContext);
  const [meetings, setMeetings] = useState([]);
  const routeTo = useNavigate();

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const history = await getHistoryOfUser();
        console.log(history);
        setMeetings(history);
      } catch {
        console.log("Error fetching history");
      }
    };
    fetchHistory();
  }, []);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-GB");
  };

  const hanldeMeetingEnd = async (e) => {
    try {
      const res = await fetch(`${server}/api/v1/meetings/cancel`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ meetingId: e.meetingCode }),
      });
      const data = await res.json();
      if (data.status === 200) {
        alert("Meeting Ended Successfully");
        const updatedMeetings = meetings.map((meeting) => {
          if (meeting.meetingCode === e.meetingCode) {
            return { ...meeting, IsLiveNow: false };
          }
          return meeting;
        });
        setMeetings(updatedMeetings);
      } else {
        alert("Error ending meeting");
      }
      // console.log(e);
    } catch (error) {
      throw new Error("Error ending meeting");
    }
  };

  return (
    <Box sx={{ p: 3, maxWidth: 900, mx: "auto" }}>
      {/* Header */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 3,
        }}
      >
        <div onClick={() => routeTo("/home")}>
          <img
            src="./Logo.png"
            alt="logo"
            title="Return To Home"
            className="w-32 h-14 cursor-pointer  object-cover"
          />
        </div>
        <Typography variant="h5" fontWeight={600}>
          Meeting History
        </Typography>
      </Box>

      {/* Content */}
      {meetings.length > 0 ? (
        <Box sx={{ display: "grid", gap: 2 }}>
          {meetings.map((e, i) => (
            <Card
              key={i}
              variant="outlined"
              sx={{
                borderRadius: 2,
                transition: "0.2s",
                display: "flex",
                justifyContent: "space-between",
                paddingLeft: 10,
                paddingRight: 10,
                alignItems: "center",
                "&:hover": {
                  boxShadow: 3,
                },
              }}
            >
              <CardContent>
                <Typography
                  variant="subtitle2"
                  color="text.secondary"
                  gutterBottom
                >
                  Meeting Code
                </Typography>

                <Typography variant="h6" fontWeight={500}>
                  {e.meetingCode}
                </Typography>

                <Typography
                  sx={{ mt: 1 }}
                  variant="body2"
                  color="text.secondary"
                >
                  Date: {formatDate(e.date)}
                </Typography>
              </CardContent>
              <div className="text-center">
                Meeting Is {e.IsLiveNow ? "Live" : "Ended"} <br />
                <div className="flex my-3 gap-4 items-center">
                  {e.IsLiveNow && (
                    <button
                      className="py-1 px-4 rounded-xl bg-blue-600"
                      onClick={() => routeTo(`/${e.meetingCode}`)}
                    >
                      Join
                    </button>
                  )}
                  {e.IsLiveNow && (
                    <button
                      onClick={() => hanldeMeetingEnd(e)}
                      className="py-1 px-4 rounded-xl bg-red-600"
                    >
                      End Metting
                    </button>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </Box>
      ) : (
        <Box
          sx={{
            textAlign: "center",
            mt: 8,
            color: "text.secondary",
          }}
        >
          <Typography variant="h6">No meetings yet</Typography>
          <Typography variant="body2">
            Your meeting history will appear here
          </Typography>
        </Box>
      )}
    </Box>
  );
}
