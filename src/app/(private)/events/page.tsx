import { UserButton } from "@clerk/nextjs";
import React from "react";

const EventsPage = () => {
  return (
    <div>
      <h1>Events</h1>
      <UserButton />
    </div>
  );
};

export default EventsPage;
