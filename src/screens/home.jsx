import React from "react";

function home() {
  return (
    <div>
      <div className="text-2xl font-bold text-center my-4">
        Welcome to the Home Screen
      </div>
      <div className="text-lg text-center">
        This is the main screen of the application.
      </div>
      <div className="text-sm text-center mt-2">
        Use the navigation to explore other sections.
      </div>
      <div className="text-xs text-center mt-4">© 2023 Your Company Name</div>
    </div>
  );
}

export default home;
