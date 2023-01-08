import React from "react";
import Content from "../components/Content";
import Sidebar from "../components/Sidebar";

const HomePage = () => {
  return (
    <div className="relative flex bg-gradient-to-br from-[#222] to-black dark:from-[white] dark:to-white/90">
      <Sidebar />
      <div className="flex-1 flex flex-col bg-gradient-to-br from-[#222] to-black overflow-x-hidden">
        <div />
        <div className="px-6 h-screen  overflow-y-scroll overflow-x-hidden scrollbar-hide flex xl:flex-row flex-col-reverse">
          <div className="flex-1 h-fit  pb-40">
            <Content />
            {/* <Routes>
                <Route path="/" element={<Content />} />
                
                <Route path="/movies/:movieId" element={<MovieDetails />} />
                <Route path="/trending" element={<Trending />} />
                <Route path="/top-rated" element={<TopRated />} />
                <Route path="/search" element={<Search />} />
              </Routes> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
