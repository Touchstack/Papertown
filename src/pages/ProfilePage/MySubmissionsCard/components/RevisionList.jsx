import { IoIosArrowBack } from "react-icons/io";
import { colorCheck } from "@/utils/colorCheck";
import { useState } from "react";
import SubmitRevisionUpload from "./SubmitRevisionUpload";
import SubmitRevisionWrite from "./SubmitRevisionWrite";

const RevisionList = ({ onBackClick }) => {
  const [onView, setOnView] = useState(false);
  const dummyData = [
    {
      submissionDate: "15/07/24",
      reviewDate: "20/07/24",
      status: "Published",
    },
    {
      submissionDate: "01/08/24",
      reviewDate: "05/08/24",
      status: "Pending review",
    },
    {
      submissionDate: "22/06/24",
      reviewDate: "28/06/24",
      status: "Reviewed",
    },
  ];

  const columns = [
    {
      field: "submissionDate",
      headerName: "Submission date",
    },
    {
      field: "reviewDate",
      headerName: "Review date",
    },
    {
      field: "status",
      headerName: "Status",
    },
  ];

  const handleClick = () => {
    onBackClick(false);
  };

  const handleView = () => {
    setOnView(true);
  };

  return (
    <>
      {!onView ? (
        <div className="lg:p-10 p-5 md:p-10 flex flex-col gap-y-[40px] rounded-xl lg:w-[973px]  w-[90vw]">
          <div className="flex flex-col gap-y-2">
            <div
              onClick={handleClick}
              className="flex gap-x-2 items-center hover:cursor-pointer"
            >
              <IoIosArrowBack size={30} />
              <h1 className="sm:text-[36px] text-2xl font-Bold">Revisions</h1>
            </div>

            <p className="ml-10">
              Here are all the revisions you've made to your submission.
            </p>
          </div>
          <div className="flex justify-end">
            <button className="py-2 px-4 border border-[#52B4AE] text-[#52B4AE] font-SemiBold rounded-[30px]">
              Submit revision
            </button>
          </div>
          <div className="bg-white shadow-xl mb-[15%] rounded-xl lg:w-[973px]  lg:p-10 p-5 md:p-10  w-[90vw]">
            <div className="md:w-[70%]  ">
              <ul className="flex items-center font-Bold justify-between">
                <li>Submission date</li>
                <li>Review date</li>
                <li>Status</li>
                <li>Actions</li>
              </ul>
              <div className="flex flex-col gap-y-[23px] items-center font-VarelaRegular justify-between">
                {dummyData.map((data) => {
                  return (
                    <div className="w-full flex  item-center justify-between">
                      {columns.map((column) => {
                        const color = colorCheck(data.status.toLowerCase());
                        const statusStyle =
                          data[column.field] === data?.status &&
                          ` ${color.color} ${color.background}  font-extrabold px-4 rounded-[50px] text-[13px] `;

                        console.log("color: ", color);

                        return (
                          <div
                            className={`flex item-center ${statusStyle} justify-between `}
                          >
                            <div className="flex font-VarelaRegular items-center justify-between">
                              {data[column.field]}
                            </div>
                          </div>
                        );
                      })}
                      <button
                        onClick={handleView}
                        className="py-2 px-4 border border-[#52B4AE] text-[#52B4AE] font-Bold rounded-[30px]"
                      >
                        View
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      ) : (
        // <SubmitRevisionUpload onBackClick={setOnView} />
        <SubmitRevisionWrite onBackClick={setOnView}/>
      )}
    </>
  );
};

export default RevisionList;
