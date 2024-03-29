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
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/Tickets`, {
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

  if(!process.env.NEXT_PUBLIC_API_URL){
    return <div>API URL not found</div>;
  }
  const { tickets } = await getTickets();

  const uniqueCategories: string[] = tickets?.reduce((acc: string[], { category }: { category: string }) => {
    if (!acc.includes(category)) {
      acc.push(category);
    }
    return acc;
  }, []) || [];
  

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