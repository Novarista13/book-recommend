"use client";


const Quote = () => {
  return (
    <a
      href="#"
      style={{
        backgroundImage:
          "linear-gradient(40deg, hsl(66deg 68% 94%) 0%, hsl(58deg 40% 87%) 8%, hsl(51deg 34% 81%) 15%, hsl(46deg 32% 75%) 23%, hsl(42deg 31% 70%) 31%, hsl(38deg 30% 64%) 38%, hsl(35deg 30% 59%) 46%, hsl(31deg 29% 55%) 54%, hsl(28deg 27% 51%) 62%, hsl(25deg 27% 48%) 69%, hsl(21deg 29% 45%) 77%, hsl(18deg 31% 41%) 85%, hsl(14deg 32% 38%) 92%, hsl(10deg 33% 35%) 100%)",
      }}
      className="block max-w-sm bg-white 0 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700v border-[1.5px] border-[#F8FAE5] p-[19px]"
    >
      <div className="flex flex-col gap-y-3">
        <h5 className="text-xl font-bold tracking-tight text-[#F8FAE5]">
          Today’s Quote
        </h5>
        <p className="font-normal text-[#3f241f] gray-700 dark:text-gray-400">
          “There is more treasure in books than in all the pirate’s loot on
          Treasure Island.”
        </p>
        <p className="font-normal text-[#3f241f]">
          <span className="ml-[68%]">-Walt Disney</span>
        </p>
      </div>
    </a>
  );
};

export default Quote;
