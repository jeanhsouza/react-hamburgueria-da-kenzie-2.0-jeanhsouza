import React, { createContext, useState, useEffect } from "react";
import { SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { iLoginFormData } from "../../pages/Login";
import { iRegisterFormData } from "../../pages/Register";
import { api } from "../../services/api";

interface iAuthContextProps {
	children: React.ReactNode;
}

interface iAuthContextValue {
	loading: boolean;
	RegisterLink: () => void;
	submitLogin: SubmitHandler<iLoginFormData>;
	submitRegister: SubmitHandler<iRegisterFormData>;
	Logout: () => void;
}

export const AuthContext = createContext({} as iAuthContextValue);

export function AuthProvider({ children }: iAuthContextProps) {
	const [loading, setLoading] = useState(false);
	const navigate = useNavigate();

	useEffect(() => {
		if (localStorage.getItem("@kenzieBurger:token")) {
			navigate("/dashboard");
		}
	}, [navigate]);

	function RegisterLink() {
		navigate("/register");
	}

	const submitLogin: SubmitHandler<iLoginFormData> = async (data) => {
		loginUser(data);
	};

	async function loginUser(data: iLoginFormData) {
		try {
			setLoading(true);
			const request = await api.post("login", data);
			const response = await request.data;

			const { accessToken, user } = response;

			localStorage.setItem("@kenzieBurger:token", accessToken);
			localStorage.setItem("@kenzieBurger:userID", JSON.stringify(user));
			navigate("/dashboard");
		} catch (error) {
			console.log(error);
		} finally {
			setLoading(false);
		}
	}

	const submitRegister: SubmitHandler<iRegisterFormData> = async (data) => {
		delete data.samePassword;
		registerUser(data);
	};

	async function registerUser(data: iRegisterFormData) {
		try {
			setLoading(true);
			const request = await api.post("users", data);
			if (request) {
				navigate("/login");
			}
		} catch (error) {
			console.log(error);
		} finally {
			setLoading(false);
		}
	}

	function Logout() {
		localStorage.clear();
		navigate("/login");
	}

	return (
		<AuthContext.Provider
			value={{ loading, RegisterLink, submitLogin, submitRegister, Logout }}
		>
			{children}
		</AuthContext.Provider>
	);
}
