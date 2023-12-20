import React from "react";
import DeleteBlock from "./DeleteBlock";
import PriorityDisplay from "./PriorityDisplay";
import ProgressBar from "./ProgressBar";

const TicketCard = () => {
  return (
    <div className="ticketCard">
      <div className="head">
        <DeleteBlock />
        <PriorityDisplay />
      </div>
      <h3>
        Title Card
      </h3>
      <hr />
      <p>
          This is a ticket description
      </p>
      <p>
          08.08.2021 10:01 PM
      </p>
      <ProgressBar />
      <button className="done">Done</button>
    </div>
  );
};

export default TicketCard;
