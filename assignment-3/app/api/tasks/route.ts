const tasks = [
  {
    id: 1,
    title: "Review Route Handlers",
    completed: false,
  },
];

export async function GET() {
  return Response.json({
    data: tasks,
  });
}

export async function POST(request: Request) {
  const body = await request.json();

  if (!body.title || body.title.trim() === "") {
    return Response.json(
      {
        error: "Title is required",
      },
      {
        status: 400,
      }
    );
  }

  const newTask = {
    id: tasks.length + 1,
    title: body.title,
    completed: false,
  };

  tasks.push(newTask);

  return Response.json(
    {
      data: newTask,
    },
    {
      status: 201,
    }
  );
}