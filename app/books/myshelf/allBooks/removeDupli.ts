import { bookType } from "@/types/bookTypes";

export async function removeDuplicates(books: bookType[]) {
  // i made this tempBooks because this function is mutating the original array
  let tempBooks = books.map((object) => ({ ...object }));

  const listTypes = await findDuplicateListTypes(tempBooks);
  const ids = tempBooks.map(({ book: { id } }) => id);

  const filtered = tempBooks.filter(({ book: { id }, listType }, index) => {
    tempBooks[index].listType = id in listTypes ? listTypes[id] : listType;
    return !ids.includes(id, index + 1);
  });
  return filtered;
}

async function findDuplicateListTypes(books: bookType[]) {
  const duplicates = await findDuplicates(books);

  let listTypes: {
    [id: number]: string[];
  } = {};

  duplicates?.map((d) => {
    if (!listTypes[d.book.id]) {
      listTypes[d.book.id] = [];
    }
    if (typeof d.listType === "string") listTypes[d.book.id].push(d.listType);
  });

  return listTypes;
}

async function findDuplicates(books: bookType[]) {
  let duplicates: bookType[] = [];
  for (let i in books) {
    for (let j in books) {
      if (books[i].book.id === books[j].book.id && i !== j) {
        if (!duplicates.includes(books[i])) {
          duplicates.push(books[i]);
          break;
        }
      }
    }
  }
  return duplicates;
}
