import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
  } from "@/components/ui/pagination"

const Paginate = () => {
  return (
   <div className="p-10">
   <Pagination>
    <PaginationContent>
      <PaginationItem>
        <PaginationPrevious href="" />
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="">1</PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="" isActive>
          2
        </PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="">3</PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationEllipsis />
      </PaginationItem>
      <PaginationItem>
        <PaginationNext href="" />
      </PaginationItem>
    </PaginationContent>
  </Pagination>
   </div>
  )
}

export default Paginate