import { useLazyQuery } from "@apollo/client";
import { useAuthStore } from "../../hooks/useAuthStore";
import { LOGIN } from "../../graphql/queries";
import { memo, useEffect, useRef, useState } from "react";
import { LoadingPage } from "../../pages/LoadingPage";
import validator from "validator";
import { ErrorAlert } from "./errorAlert";
const {isStrongPassword,isEmail} = validator
export const LoginForm = memo(({ setAction }: any) => {
  const { startLogin } = useAuthStore();
  const passwordRef = useRef<HTMLInputElement>(null)
  const emailRef = useRef<HTMLInputElement>(null)
  const [login, { loading,data }] = useLazyQuery(LOGIN);
  const [isValidForm, setIsValidForm] = useState(false);
  useEffect(()=>{
    setIsValidForm(
      isStrongPassword(passwordRef.current!?.value,{
        minLength: 6,
        minLowercase: 1,
        minUppercase: 1,
        minSymbols:1,
        minNumbers:1
      }) && 
      isEmail(emailRef.current!?.value)
    )
  },[])
  if(loading) return LoadingPage
  return (
    <>
    {data?.login.ok===false && <ErrorAlert message={data?.login.message}/>}

    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
      <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
          Sign in to your account
        </h1>
        <form className="space-y-4 md:space-y-6" action="#">
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your email
            </label>
            <input
              onChange={()=>setIsValidForm(
                isStrongPassword(passwordRef.current!?.value,{
                  minLength: 6,
                  minLowercase: 1,
                  minUppercase: 1,
                  minSymbols:1,
                  minNumbers:1
                }) && 
                isEmail(emailRef.current!?.value)
              )}
              ref={emailRef}
              type="email"
              name="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="name@company.com"
              required
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Password
            </label>
            <input
              onChange={()=>setIsValidForm(
                isStrongPassword(passwordRef.current!?.value,{
                  minLength: 6,
                  minLowercase: 1,
                  minUppercase: 1,
                  minSymbols:1,
                  minNumbers:1
                }) && 
                isEmail(emailRef.current!?.value)
              )}
              ref={passwordRef}
              type="password"
              name="password"
              id="password"
              placeholder="••••••••"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>
          <div className="flex items-center justify-between">
            {/* <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="remember"
                  aria-describedby="remember"
                  type="checkbox"
                  className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                />
              </div>
              <div className="ml-3 text-sm">
                <label
                  htmlFor="remember"
                  className="text-gray-800 font-bold dark:text-gray-300"
                >
                  Remember me
                </label>
              </div>
            </div> */}
            <a
              href="#"
              className="text-sm dark:text-white font-medium text-primary-600 hover:underline dark:text-primary-500"
            >
              Forgot password?
            </a>
          </div>
          <button
            onClick={(e) => {
              e.preventDefault();
              const password = passwordRef.current!.value,
                email = emailRef.current!.value
              
              startLogin({ email, password }, login);
            }}
            disabled={!isValidForm}
            type="submit"
            className="w-full disabled:bg-blue-400 bg-blue-800 text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
          >
            Sign in
          </button>
          <p className="text-sm font-light text-gray-700 dark:text-gray-400">
            Don’t have an account yet?{" "}
            <span
              onClick={() => setAction("register")}
              className="cursor-pointer text-red-600 dark:text-blue-400 font-medium text-primary-600 hover:underline dark:text-primary-500"
            >
              Sign up
            </span>
          </p>
        </form>
      </div>
    </div>
    </>
  );
});
