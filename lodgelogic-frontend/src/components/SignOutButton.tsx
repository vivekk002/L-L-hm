import { useQueryClient } from "react-query";
import { useMutationWithLoading } from "../hooks/useLoadingHooks";
import * as apiClient from "../api-client";
import useAppContext from "../hooks/useAppContext";
import { useNavigate } from "react-router-dom";
import { LogOut, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

const SignOutButton = () => {
  const queryClient = useQueryClient();
  const { showToast } = useAppContext();
  const navigate = useNavigate();

  const mutation = useMutationWithLoading(apiClient.signOut, {
    onSuccess: async () => {
      await queryClient.invalidateQueries("validateToken");
      showToast({
        title: "Successfully Signed Out",
        description:
          "You have been logged out of your account. Redirecting to sign-in page...",
        type: "SUCCESS",
      });
      navigate("/sign-in");
      window.location.reload();
    },
    onError: (error: Error) => {
      showToast({
        title: "Sign Out Failed",
        description: error.message,
        type: "ERROR",
      });
    },
    loadingMessage: "Signing out...",
  });

  const handleSignOut = () => {
    mutation.mutate(undefined);
  };

  return (
    <DropdownMenu>
      <div className="flex items-center">
        <button
          onClick={handleSignOut}
          className="flex items-center bg-white text-primary-600 px-6 py-2 rounded-l-lg font-semibold hover:bg-primary-50 hover:shadow-medium transition-all duration-200 group border-r border-primary-100"
        >
          <LogOut className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
          Sign Out
        </button>
        <DropdownMenuTrigger asChild>
          <button className="flex items-center bg-white text-primary-600 px-3 py-2 rounded-r-lg font-semibold hover:bg-primary-50 transition-all duration-200">
            <ChevronDown className="w-4 h-4" />
          </button>
        </DropdownMenuTrigger>
      </div>
      <DropdownMenuContent className="w-56 bg-white" align="end">
        <DropdownMenuItem onClick={handleSignOut} className="text-primary-600">
          <LogOut className="w-4 h-4 mr-2" />
          Sign Out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default SignOutButton;
