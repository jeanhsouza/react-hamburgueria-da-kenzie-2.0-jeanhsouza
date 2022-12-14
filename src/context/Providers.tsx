import { AuthProvider } from "./AuthContext/AuthContext";

interface iProviderProps{
    children: React.ReactNode;
}

export function Providers({ children }: iProviderProps) {
	return (
		<AuthProvider>
			{children}
		</AuthProvider>
	);
}
