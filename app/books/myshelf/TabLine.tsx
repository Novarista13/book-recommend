import Brand from "@/app/components/brand";
import { Tabs, TabItem } from "flowbite-react";
import NotesPage from "./NotesPage";
import Books from "./books";
import Lists from "./Lists";

export default function TabLine() {
  const tabItems = [
    {
      title: "All Books",
      isActive: true,
      component: <Books />,
    },
    {
      title: "Favourite",
      isActive: false,
      component: <NotesPage />,
    },
    {
      title: "Lists",
      isActive: false,
      component: <Lists />,
    },
    {
      title: "E-Books",
      isActive: false,
      component: (
        <>
          <h1>other books</h1>
        </>
      ),
    },
    {
      title: "Audio Books",
      isActive: false,
      component: (
        <>
          <h1>other books</h1>
        </>
      ),
    },
    {
      title: "Articles & Journals",
      isActive: false,
      component: (
        <>
          <h1>other books</h1>
        </>
      ),
    },
  ];
  return (
    <Tabs
      style="underline"
      className="w-full mt-2"
      theme={{
        tablist: {
          base: "flex flex-wrap -mb-px flex-row border-none gap-x-10",
          tabitem: {
            base: "inline-block cursor-pointer p-2  hover:text-[burlywood] ",
            styles: {
              underline: {
                active: {
                  on: " text-[burlywood] border-[burlywood] border-b-2 active",
                  off: "border-b-2 border-transparent text-white hover:border-[burlywood]  hover:text-[burlywood]",
                },
              },
            },
          },
        },
      }}
    >
      {tabItems.map((tab) => (
        <TabItem key={tab.title} active={tab.isActive} title={tab.title}>
          {tab.component}
        </TabItem>
      ))}
    </Tabs>
  );
}
