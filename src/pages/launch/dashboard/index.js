import React from "react";
import { LandingTemplate } from "layout";
import Tabs from "components/common/tabs-dashboard";
function Dashboard() {
  return (
    <LandingTemplate>
      <div className="w-full pt-20 text-white xl:px-14 md:px-9 px-4 pb-10 lg:pb-7 bg-gray-200 overflow-hidden">
        {/* <div className="absolute h-30vh grid grid-cols-2 top-28 left-0 w-full lg:px-14 md:px-9 px-2">
          <div className="bg-left md:bg-auto"></div>
          <div className="bg-right md:bg-auto"></div>
        </div> */}
        <div className="flex flex-col items-center justify-center py-10 space-y-6">
          <h1 className="text-primary md:text-4xl pb-10 text-3xl font-extrabold">
            WSUM Dashboards
          </h1>
          {/* <Button
            endIcon={
              <div className="w-6 transform -rotate-45">
                <ArrowCircleRightIcon />
              </div>
            }
            variant="contained"
            classes={{
              root: "rounded-xl tracking-wide py-3 px-6 md:text-xl text-lg",
            }}
            color="primary"
          >
            Data Methodology
          </Button> <Tabs />*/}
          
        </div>
      </div>
      <div className="w-full mx-auto xl:px-14 md:px-9 px-4 pt-6 pb-16 bg-gray-200">
       <iframe src="https://ramlogics.com/create-token/dodo-dashboard.php" title="Ramlogics" height="1900px" width="100%"></iframe>
      </div>
    </LandingTemplate>
  );
}

export default Dashboard;
