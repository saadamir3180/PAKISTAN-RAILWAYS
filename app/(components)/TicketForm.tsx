"use client";
import { useState, ChangeEvent } from "react";

interface TicketNew {
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
interface Ticket {
  title: string;
  description: string;
  status: string;
  category: string;
  priority: number;
  progress: number;
}

const TicketForm = ({ ticketNew }: any) => {
  const editPermission = ticketNew._id === "new" ? false : true;

  const TicketData: Ticket = {
    title: "",
    description: "",
    status: "Not started",
    category: "Hardware Issue",
    priority: 1,
    progress: 0,
  };
  if (editPermission) {
    TicketData["title"] = ticketNew.title;
    TicketData["description"] = ticketNew.description;
    TicketData["status"] = ticketNew.status;
    TicketData["category"] = ticketNew.category;
    TicketData["priority"] = ticketNew.priority;
    TicketData["progress"] = ticketNew.progress;
  }

  const [ticket, setTicket] = useState<Ticket>(TicketData);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setTicket({ ...ticket, [name]: value });
  };

  const handleSubmit = async (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (editPermission) {
      const res = await fetch(`/api/Tickets/${ticketNew._id}`, {
        method: "PUT",
        body: JSON.stringify({ ticket }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!res.ok) {
        throw new Error(res.statusText);
      }

    } else {
        const res = await fetch("/api/Tickets", {
          method: "POST",
          body: JSON.stringify({ ticket }),
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (!res.ok) {
          throw new Error(res.statusText);
        }
    }
  };

  return (
    <div className="formContainer">
      <form className="ticketForm" onSubmit={handleSubmit}>
        <div className="inputsContainer">
          <div className="input-container">
            <input
              type="text"
              name="title"
              value={ticket.title}
              onChange={handleChange}
            />
            <label className="label-n">Title</label>
          </div>

          <div className="input-container">
            <input
              type="text"
              name="description"
              value={ticket.description}
              onChange={handleChange}
            />
            <label className="label-n">Description</label>
          </div>

          <div className="input-container">
            <label className="select">
              Status:
              <select
                name="status"
                value={ticket.status}
                onChange={handleChange}
              >
                <option value="not started">Not Started</option>
                <option value="in progress">In Progress</option>
                <option value="completed">Completed</option>
              </select>
            </label>
          </div>

          <div className="input-container">
            <input
              type="text"
              name="category"
              value={ticket.category}
              onChange={handleChange}
            />
            <label className="label-n">Category</label>
          </div>

          <div className="input-container">
            <input
              type="number"
              name="priority"
              value={ticket.priority}
              onChange={handleChange}
            />
            <label className="label-n">Priority</label>
          </div>

          <div className="input-container">
            <input
              type="number"
              name="progress"
              value={ticket.progress}
              onChange={handleChange}
            />
            <label className="label-n">Progress</label>
          </div>
        </div>
        <span className="buttonsContainer">
          <button type="submit" className="submitButton">
            {editPermission ? "Update" : "Create"}
          </button>
        </span>
      </form>
    </div>
  );
};

export default TicketForm;
