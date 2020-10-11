import React from "react";
import { useDispatch } from "react-redux";
import { setChannelInfo } from "./features/appSlice";
import "./SidebarChannel.css";
function SidebarChannel({ id, channelName }) {
  const dispacth = useDispatch();
  return (
    <div
      className="sidebarChannel"
      onClick={() =>
        dispacth(
          setChannelInfo({
            channelID: id,
            channelName: channelName,
          })
        )
      }
    >
      <h4>
        <span className="sidebarChannel__hash">#</span>
        {channelName}
      </h4>
    </div>
  );
}

export default SidebarChannel;
