import TicketCard from "./(components)/TicketCard";

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

interface TicketsResponse {
  tickets: Ticket[];
}

const getTickets = async (): Promise<TicketsResponse> => {
  try {
    const response = await fetch("http://localhost:3000/api/Tickets", {
      cache: "no-cache",
    });

    if (!response.ok) {
      throw new Error("Failed to fetch tickets");
    }

    const data: TicketsResponse = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export default async function Dashboard() {
  const { tickets } = await getTickets();

  const uniqueCategories = [
    ...new Set(tickets?.map(({ category }: { category: string }) => category)),
  ];

  return (
    <>
      {
        tickets &&
          uniqueCategories.map((category: string, categoryIndex: number) => (
            <div className="categoryContainer" key={categoryIndex}>
              <h2>{category}</h2>
                  <div className="cardContainer" >
              {tickets
                .filter((ticket: Ticket) => ticket.category === category)
                .map((ticket: Ticket, _ticketIndex: number) => 
                    <TicketCard key={_ticketIndex} ticket={ticket}/>
                )}
                </div>
            </div>
          ))
      }
    </>
  );
}