import { LoaderCircle } from "lucide-react";
import React from "react";

const Loading = () => {
  return (
    <div>
      <div className="max-w-5xl mx-auto">
        <div className="text-4xl md:text-5xl font-semibold mb-4 text-center">
          Loading...
        </div>
        <div className="text-muted-foreground mb-6 max-w-sm mx-auto text-center">
          <LoaderCircle className="animate-spin mx-auto size-24 text-muted-foreground" />
        </div>
      </div>
    </div>
  );
};

export default Loading;
