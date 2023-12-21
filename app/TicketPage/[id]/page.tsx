import TicketForm from './../../(components)/TicketForm';
interface PageParams {
    id: string;
  }
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
  
const getTicketById = async (id: string) => {
    try {
      const response = await fetch(`http://localhost:3000/api/Tickets/${id}`, {
        cache: "no-cache",
      });
  
      if (!response.ok) {
        throw new Error("Failed to fetch tickets");
      }
  
      const data: Ticket = await response.json();
      return data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  const page = async ({ params }: { params: PageParams }) => {
   const editMode = params.id === 'new' ? false : true; 

   let updateTicketsData = {}
    if(editMode) {
      updateTicketsData = await getTicketById(params.id);
      updateTicketsData = (updateTicketsData as { ticket: Ticket }).ticket;
    }else{
      updateTicketsData = {
        _id: 'new',
        title: '',
        description: '',
        status: '',
        category: '',
        priority: -1,
        progress: -1,  
        createdAt: '',
        updatedAt: ''
      }
    }
    return (
      <div>
        <TicketForm ticketNew={updateTicketsData}/>
      </div>
    );
  };
  
  export default page;
  