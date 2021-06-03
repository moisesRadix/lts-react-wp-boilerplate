// react plugin for creating notifications over the dashboard
// import React from 'react';
import { toast } from "react-toastify";

export const RadixAlertify = (message = "", type = "info") => {
  switch (type) {
    case "success":
      toast.success(message, {
        className: "bg-success",
      });
      break;
    case "error":
      toast.success(message, {
        className: "bg-danger",
      });
      break;
    case "info":
      toast.success(message, {
        className: "bg-info",
      });
      break;
    case "warn":
      toast.success(message, {
        className: "bg-warning",
      });
      break;
    default:
      toast.success(message, {
        className: "bg-primary",
      });
      break;
  }
};
