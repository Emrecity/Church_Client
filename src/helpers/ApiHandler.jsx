import toast from "react-hot-toast";
import { routes } from "./routes";

const apiResponseHandler = (response) => {
  const status = response?.response?.status || response?.status;

  if (status === 200) {
    return response?.data?.data;
  }
  if (status === 400) {
    toast.error("An error occurred. Please try again later.");
  }
  if (status === 401) {
    window.location.href = routes.LOGIN;
    toast.error("User Session Expired. Please login again.");
    localStorage.removeItem("token");
  }
  if (status === 403) {
    window.history.back();
    toast.error("You are not authorized to access this page.");
  }
  if (status === 404) {
    toast.error("Resource not found.");
  }
  if (status === 422) {
    toast.error("Index not found.");
  }
  return null;
};

export { apiResponseHandler };
