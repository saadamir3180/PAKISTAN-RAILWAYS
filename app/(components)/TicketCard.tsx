import React from "react";
import DeleteBlock from "./DeleteBlock";
import PriorityDisplay from "./PriorityDisplay";
import ProgressBar from "./ProgressBar";
import Link from "next/link";

interface Ticket {
  _id: string;
  title: string;
  description: string;
  status: string;
  category: string;
  priority: number;
  progress: number;
  createdAt: string; 
  updatedAt: string; 
}


const TicketCard = ({ticket}: { ticket : Ticket }) => {
  return (
    // 
    <div className="ticketCard">
      <div className="head">
        <DeleteBlock id={ticket._id} />
        <PriorityDisplay priority={ticket.priority}/>
      </div>
      <h3>
        {ticket.title}
      </h3>
      <hr />
      <p>
          {ticket.description}
      </p>
      <p>
          {ticket.createdAt}
      </p>
      <ProgressBar progress={ticket.progress}/>
      <Link href={`/TicketPage/${ticket._id}`} className="linkTag done allowed">Update</Link>
      <span className={`done ${ticket.status == 'completed' ? 'allowed' : ''}`}>{ticket.status}</span>
    </div>
    // 
  );
};

export default TicketCard;
