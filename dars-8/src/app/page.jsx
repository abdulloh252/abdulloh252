import Link from "next/link";

async function getData(id) {
  const req = await fetch("https://jsonplaceholder.typicode.com/todos", {
    next: { revalidate: 3600 },
  });
  const data = await req.json();
  return data;
}

export default async function Home() {
  const data = await getData();

  return (
    <div className="flex justify-center ">
      <div className="overflow-x-auto w-3/4 ">
        <div className="">
          <h1 className="text-center text-4xl text-white p-[30px] shadow-2xl">About</h1>
          <ul className="flex flex-col gap-6">
            {data.map((item) => {
              return (
                <div className="">
                 <li key={item.id} className=" flex  items-center shadow-xl bg-gray-800 text-white p-[40px] w-full  mt-[40px] justify-between ">
                <div className="flex items-center gap-3">
                  <span className="  text-3xl "> {item.id}.</span>
                  <h3 className="uppercase  text-2xl ">{item.title}</h3>
                </div>

                <div>
                 <Link href={`about/${item.id}`}  className="btn  glass" >Read More{" "}</Link>
                </div>
              </li></div>
               
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
