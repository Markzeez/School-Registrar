import { useState } from 'react';
import Select from 'react-select';
import { IoMdArrowForward } from "react-icons/io";
import { GoTrash } from "react-icons/go";
import { HiOutlineFlag } from "react-icons/hi2";

// Sorting options
const options = [
  { value: 'newest', label: 'Newest' },
  { value: 'oldest', label: 'Oldest' },
];

// Sample registrar data
const sampleLogs = [
  {
    name: 'Adeola Samson',
    activity: "Registered for 2024/2025 session",
    date: 'Today at 10:00 AM',
    imgSrc: 'https://res.cloudinary.com/dyjo2mvqb/image/upload/v1718970029/user-01.jpg_cxdqkx.svg',
  },
  {
    name: 'Grace Ibeh',
    activity: "Checked results for 1st semester",
    date: 'Today at 09:30 AM',
    imgSrc: 'https://res.cloudinary.com/dyjo2mvqb/image/upload/v1718970028/user-03.jpg_s3xwc2.svg',
  },
  {
    name: 'Tolu Martins',
    activity: "Updated Contact information",
    date: 'Today at 09:10 AM',
    imgSrc: 'https://res.cloudinary.com/dyjo2mvqb/image/upload/v1718970028/user-04.jpg_vh1g5p.svg',
  },
   {
    name: 'Tolu Martins',
    activity: "Updated Contact information",
    date: 'Today at 09:10 AM',
    imgSrc: 'https://res.cloudinary.com/dyjo2mvqb/image/upload/v1718970028/user-04.jpg_vh1g5p.svg',
  },
   {
    name: 'Tolu Martins',
    activity: "Updated Contact information",
    date: 'Today at 09:10 AM',
    imgSrc: 'https://res.cloudinary.com/dyjo2mvqb/image/upload/v1718970028/user-04.jpg_vh1g5p.svg',
  },
   {
    name: 'Tolu Martins',
    activity: "Updated Contact information",
    date: 'Today at 09:10 AM',
    imgSrc: 'https://res.cloudinary.com/dyjo2mvqb/image/upload/v1718970028/user-04.jpg_vh1g5p.svg',
  }
  // Add more log entries as needed
];

const itemsPerPage = 5;

const RegistrarActivity = () => {
  const [selectedOption, setSelectedOption] = useState<{ value: string; label: string } | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchKeyword, setSearchKeyword] = useState("");

  const filteredLogs = sampleLogs.filter((item) =>
    item.name.toLowerCase().includes(searchKeyword.toLowerCase())
  );

  const totalPages = Math.ceil(filteredLogs.length / itemsPerPage);

  const getCurrentData = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return filteredLogs.slice(startIndex, startIndex + itemsPerPage);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };

  const handlePrevious = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  const renderPageNumbers = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) pages.push(i);
    return pages;
  };

  return (
    <div className="w-3/4 h-auto mt-5 bg-white">
      <h1 className="text-[24px] font-semibold ml-2">Registrar Activity Log</h1>

      <div className="mx-auto w-full md:w-[842px] mt-4">
        <div className="flex items-center justify-between px-4">
          <h2 className="text-[16px]">Total Entries: {sampleLogs.length}</h2>
          <input
            type="text"
            placeholder="Search by name..."
            className="px-3 py-1 border border-gray-300 rounded-md text-sm focus:outline-none"
            value={searchKeyword}
            onChange={(e) => {
              setSearchKeyword(e.target.value);
              setCurrentPage(1);
            }}
          />
          <Select
            className="w-40"
            defaultValue={selectedOption}
            onChange={setSelectedOption}
            options={options}
          />
        </div>
      </div>

      <div className="mt-4 px-4">
        {getCurrentData().map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-between py-3 border-b hover:bg-blue-100"
          >
            <img src={item.imgSrc} alt={item.name} className="w-10 h-10 rounded-full" />
            <p className="w-1/4 text-[15px] font-medium truncate">{item.name}</p>
            <p className="w-2/5 text-[14px] truncate">{item.activity}</p>
            <p className="w-1/5 text-[14px] text-gray-500">{item.date}</p>
            <div className="flex items-center gap-3 text-gray-600 cursor-pointer">
              <HiOutlineFlag />
              <GoTrash />
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-6 gap-2 items-center">
        <button
          disabled={currentPage === 1}
          onClick={handlePrevious}
          className={`px-3 py-1 rounded-md ${currentPage === 1 ? "bg-gray-300" : "bg-blue-400 text-white"}`}
        >
          Previous
        </button>

        {renderPageNumbers().map((page, index) => (
          <button
            key={index}
            onClick={() => setCurrentPage(page)}
            className={`px-3 py-1 rounded-md ${
              currentPage === page ? "bg-blue-400 text-white" : "bg-gray-200"
            }`}
          >
            {page}
          </button>
        ))}

        <button
          disabled={currentPage === totalPages}
          onClick={handleNext}
          className={`px-3 py-1 rounded-md ${currentPage === totalPages ? "bg-gray-300" : "bg-blue-400 text-white"}`}
        >
          Next <IoMdArrowForward className="inline ml-1" />
        </button>
      </div>
    </div>
  );
};

export default RegistrarActivity;
