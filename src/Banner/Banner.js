import React from "react";

function Banner() {
  return (

    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 justify-center flex flex-col mt-8 md:mt-0 reponsiveHeight">
        <div className="grid md:grid-cols-2 gap-8">
      <div className="bg-orange-300 py-4 px-10 rounded-xl flex flex-col items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          class="w-10 h-10"
        >
          <path d="M8.25 10.875a2.625 2.625 0 1 1 5.25 0 2.625 2.625 0 0 1-5.25 0Z" />
          <path
            fill-rule="evenodd"
            d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.125 4.5a4.125 4.125 0 1 0 2.338 7.524l2.007 2.006a.75.75 0 1 0 1.06-1.06l-2.006-2.007a4.125 4.125 0 0 0-3.399-6.463Z"
            clip-rule="evenodd"
          />
        </svg>
        <p className="my-4 text-[20px]">
          Find the best answer to your technical question, help others answer
          theirs
        </p>
        <button type="button" class="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Join the community</button>
      </div>
      <div className="bg-stone-400 py-4 px-10 rounded-xl flex flex-col items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          class="w-10 h-10"
        >
          <path d="M18 1.5c2.9 0 5.25 2.35 5.25 5.25v3.75a.75.75 0 0 1-1.5 0V6.75a3.75 3.75 0 1 0-7.5 0v3a3 3 0 0 1 3 3v6.75a3 3 0 0 1-3 3H3.75a3 3 0 0 1-3-3v-6.75a3 3 0 0 1 3-3h9v-3c0-2.9 2.35-5.25 5.25-5.25Z" />
        </svg>
        <p className="my-4 text-[20px]">
          Find the best answer to your technical question, help others answer
          theirs
        </p>
        <button type="button" class="text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Disocover Teams</button>
      </div>
      </div>
      <h1 className="text-[30px] md:text-[50px] font-medium md:px-10 text-center mt-5 md:mt-10 mb-5 md:mb-10">Every Developer has a tab open to a stack overflow</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
        <div className="flex flex-col items-center text-center px-5">
            <h1 className="font-medium text-[20px] mb-2">100+ million</h1>
            <p className="text-stone-500">monthly visitors to Stack Overflow & Stack Exchange</p>
        </div>
        <div className="flex flex-col items-center text-center px-5">
            <h1 className="font-medium text-[20px] mb-2">100+ million</h1>
            <p className="text-stone-500">monthly visitors to Stack Overflow & Stack Exchange</p>
        </div>
        <div className="flex flex-col items-center text-center px-5">
            <h1 className="font-medium text-[20px] mb-2">100+ million</h1>
            <p className="text-stone-500">monthly visitors to Stack Overflow & Stack Exchange</p>
        </div>
        <div className="flex flex-col items-center text-center px-5">
            <h1 className="font-medium text-[20px] mb-2">100+ million</h1>
            <p className="text-stone-500">monthly visitors to Stack Overflow & Stack Exchange</p>
        </div>
      </div>
    </div>
  );
}

export default Banner;
