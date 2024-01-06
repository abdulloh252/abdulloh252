import Link from "next/link";

async function getData(id) {
  const req = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
    next: { revalidate: 3600 },
  });
  const data = await req.json();
  return data;
}

export default async function Page({ params }) {
  const data = await getData(params.id);

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="card w-[700px]  bg-gray-800
      text-white shadow-xl">
    <figure><img src="https://www.mbofselma.com/wp-content/themes/DealerInspireDealerTheme/images/service-bg.jpg" alt="" /></figure>
        <ul className="card-body">
          <li className="">
            <h1 className="card-title mb-[14px] uppercase">{data.title}</h1>
            <p> completed: {data.completed ? "✅" : "❌"}</p>
            <div className="card-actions justify-end">
              <Link href="/" className="btn glass">
                Back
              </Link>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
