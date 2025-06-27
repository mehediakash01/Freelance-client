// BrowseTask.jsx
import React, { useEffect, useState } from "react";

import TaskCard from "./TaskCard";
import axios from "axios";
import Loading from "./Loading";
import Empty from "./Empty";

const BrowseTask = () => {
  // const allTasks = useLoaderData();
  const [search, setSearch] = useState("");
  const [taskData, setTaskData] = useState([]);
  const [loading, setLoading] = useState(false);
const [sortOrder, setSortOrder] = useState("latest");
  useEffect(() => {
    setLoading(true);
console.log(search);
    axios
      .get("http://localhost:3000/allTasks", {
        params: { search, sort: sortOrder },
      })
      .then((res) => {
       
        setTaskData(res.data);
      })
      .catch((err) => {
        console.error("Error fetching:", err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [search,sortOrder]);

  return (
    <div className="bg-[#F5F5F5] my-12 w-11/12 mx-auto">
      <div className="text-center py-8 space-y-2">
        <h1 className="text-primary text-4xl font-bold">
          Find Tasks That Match Your Skills
        </h1>
        <p className="text-gray-400">
          Browse tasks in Web Development, Design, Writing, and more.
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-end items-center mb-8 gap-4">
       
          <input
            type="text"
            name="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by task title"
            className="input input-bordered w-fit"
          />
       

        <select value={sortOrder} onChange={e=>setSortOrder(e.target.value)} className="select select-bordered w-fit mr-3">
          <option value="latest">Latest</option>
          <option value="budget_asc">Budget: Low to High</option>
          <option value="budget_desc">Budget: High to Low</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-8  ">
        {loading ? (
          <Loading />
        ) : taskData.length === 0 ? (
        <div className="col-span-full flex justify-center items-center my-12">
      <Empty setSearch={setSearch} />
    </div>
        ) : (
          taskData.map((task) => <TaskCard key={task._id} task={task} />)
        )}
      </div>
    </div>
  );
};

export default BrowseTask;
