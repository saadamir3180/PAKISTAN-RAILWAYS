import TicketForm from './../../(components)/TicketForm';
interface PageParams {
    id: string;
  }
  
  const page = ({ params }: { params: PageParams }) => {
    return (
      <div>
        <TicketForm/>
      </div>
    );
  };
  
  export default page;
  