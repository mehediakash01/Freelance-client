// BrowseTask.jsx
import React, { useState } from "react";
import { useLoaderData, useSearchParams } from "react-router"; 
import TaskCard from "./TaskCard";

const BrowseTask = () => {
  const allTasks = useLoaderData();
  const [searchParams, setSearchParams] = useSearchParams();

  const initialSearch = searchParams.get("search") || "";
  const initialSort = searchParams.get("sort") || "latest";

  const [search, setSearch] = useState(initialSearch);
  const [sort, setSort] = useState(initialSort);

  const handleSearch = (e) => {
    e.preventDefault();
    const params = new URLSearchParams(searchParams);
    params.set("search", search);
    params.set("sort", sort);
    setSearchParams(params);
  };

  const handleSort = (e) => {
    const newSort = e.target.value;
    setSort(newSort);
    const params = new URLSearchParams(searchParams);
    params.set("search", search);
    params.set("sort", newSort);
    setSearchParams(params);
  };

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
        <form onSubmit={handleSearch} className="w-fit space-x-1">
          <input
            type="text"
            name="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by task title"
            className="input input-bordered w-fit"
          />
          <button className="btn btn-primary" type="submit">
            Search
          </button>
        </form>

        <select
          value={sort}
          onChange={handleSort}
          className="select select-bordered w-fit mr-3"
        >
          <option value="latest">Latest</option>
          <option value="budget_asc">Budget: Low to High</option>
          <option value="budget_desc">Budget: High to Low</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {allTasks.map((task) => (
          <TaskCard key={task._id} task={task} />
        ))}
      </div>
    </div>
  );
};

export default BrowseTask;
