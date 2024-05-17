import { Tabs, TabItem } from "flowbite-react";
import BookOverview from "./BookOverview";
import Reviews from "./reviews/Reviews";
import Lists from "./lists/Lists";
import Books from "./relatedBooks/RelatedBooks";

export default function BookTabs({
  book,
}: {
  book: {
    id: number;
    description: string;
    publishedYear: number;
    publishedPlatform: string;
    lang: string;
    parts: number;
  };
}) {
  const tabItems = [
    {
      title: "Overview",
      isActive: true,
      component: <BookOverview book={book} />,
    },
    {
      title: "Reviews",
      isActive: false,
      component: <Reviews book={book} />,
    },
    {
      title: "Lists",
      isActive: false,
      component: <Lists bookId={book.id} />,
    },
    // {
    //   title: "Related Books",
    //   isActive: false,
    //   component: <Books />,
    // },
  ];

  return (
    <Tabs
      style="underline"
      className="w-full gap-y-2 max-h-[465px]"
      theme={{
        tablist: {
          base: "flex flex-wrap -mb-px gap-x-10 bg-[#F8FAE5] border border-gray-200 rounded-lg shadow p-4 py-1",
          tabitem: {
            base: "inline-block font-semibold border-b-2 py-1 px-2 text-sm cursor-pointer ",
            styles: {
              underline: {
                active: {
                  on: "text-cyan-600 text-[#76453B] border-[#76453B] border-b-2 active",
                  off: "border-b-2 border-transparent text-[#B19470]  hover:border-[#76453B] hover:text-[#76453B]",
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
