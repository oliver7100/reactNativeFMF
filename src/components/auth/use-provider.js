import { useContext } from "react";
import { AuthContext } from "./provider";

function useAuthProvider() {
    return useContext(AuthContext)
}

export default useAuthProvider;