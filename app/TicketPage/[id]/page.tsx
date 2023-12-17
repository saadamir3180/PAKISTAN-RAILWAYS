interface PageParams {
    id: string;
  }
  
  const page = ({ params }: { params: PageParams }) => {
    return (
      <div>page {params.id}</div>
    );
  };
  
  export default page;
  