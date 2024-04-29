import { PrismaClient } from "@prisma/client";
import { Button, Pagination } from "@nextui-org/react";
import Cards from "@/components/Cards/Cards";
import { list } from "postcss";

async function getData() {
  try {
    const prisma = new PrismaClient();
    const res = await prisma.items.findMany();
    return res;
  } catch {
    console.error("Failed");
  }
}

export default async function Home() {
  const datas = await getData();
  let pages = 1;

  return (
    <div className="bg-white h-screen w-screen">
      <div className="flex flex-col justify-center items-center gap-6 p-6">
        {datas &&
          datas.map((data) => {
            return (
              <Cards
                key={data.id}
                id={data.id}
                name={data.name}
                description={data.description}
              />
            );
          })}
      </div>
      <Pagination
        total={pages}
        initialPage={1}
        className="flex flex-col justify-center items-center"
      />
      <div className="flex justify-center items-center gap-6 p-6">
        {/* <Button color="primary">Add User</Button>
        <Button color="default">Click For a Suprise</Button> */}
      </div>
    </div>
  );
}
