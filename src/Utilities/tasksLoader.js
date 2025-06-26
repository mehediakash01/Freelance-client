export const tasksLoader = async ({ request }) => {
  const url = new URL(request.url);

  const search = url.searchParams.get("search") || "";
  const sort = url.searchParams.get("sort") || "latest";

  const res = await fetch(
    `https://freelance-task-marketplace-server-ruddy.vercel.app/allTasks?search=${search}&sort=${sort}`
  );

  if (!res.ok) throw new Error("Failed to fetch tasks");

  const data = await res.json();
  return data;
};
