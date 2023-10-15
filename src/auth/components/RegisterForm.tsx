import { memo, useRef, useState } from "react";
import { useAuthStore } from "../../hooks/useAuthStore";
import { useMutation } from "@apollo/client";
import { LoadingPage } from "../../pages/LoadingPage";
import { REGISTER_USER } from "../../graphql/mutations";
import validator from "validator";
import { ErrorAlert } from "./errorAlert";
const {isStrongPassword,isEmail} = validator

export const RegisterForm = memo(({ setAction }: any) => {
  const { startSignup } = useAuthStore();
  const passwordRef = useRef<HTMLInputElement>(null)
  const passwordConfirmRef = useRef<HTMLInputElement>(null)
  const fullnameRef = useRef<HTMLInputElement>(null)
  const emailRef = useRef<HTMLInputElement>(null)
  const acceptTermsRef = useRef<HTMLInputElement>(null)
  const [isTermsAccepted, setIsTermsAccepted] = useState(false);

  const [createUser, { loading, data }] = useMutation(REGISTER_USER);
  if(loading) return LoadingPage
  return (
    <>
    {data?.createUser.ok===false && <ErrorAlert message={data?.createUser.message}/>}
    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
      <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
          Create and account
        </h1>
        <form className="space-y-4 md:space-y-6">
          <div>
            <label
              htmlFor="fullname"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your fullname
            </label>
            <input
              onChange={()=>setIsTermsAccepted(
                emailRef.current!?.value.length > 0 && 
                fullnameRef.current!?.value.length > 0 && 
                (passwordRef.current!?.value === passwordConfirmRef.current!?.value) && 
                acceptTermsRef.current!?.checked 
              )}
              ref={fullnameRef}
              type="text"
              name="fullname"
              id="fullname"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Ander Frank Carrasco"
              required
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your email
            </label>
            <input
              onChange={()=>setIsTermsAccepted(
                emailRef.current!?.value.length > 0 && 
                fullnameRef.current!?.value.length > 0 && 
                (passwordRef.current!?.value === passwordConfirmRef.current!?.value) && 
                acceptTermsRef.current!?.checked 
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
              onChange={()=>setIsTermsAccepted(
                emailRef.current!?.value.length > 0 && 
                fullnameRef.current!?.value.length > 0 && 
                (passwordRef.current!?.value === passwordConfirmRef.current!?.value) && 
                acceptTermsRef.current!?.checked 
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
          <div>
            <label
              htmlFor="confirm-password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Confirm password
            </label>
            <input
              onChange={()=>setIsTermsAccepted(
                fullnameRef.current!?.value.length > 0 && 
                (passwordRef.current!?.value === passwordConfirmRef.current!?.value) && 
                acceptTermsRef.current!?.checked &&
                isStrongPassword(passwordRef.current!?.value,{
                  minLength: 6,
                  minLowercase: 1,
                  minUppercase: 1,
                  minSymbols:1,
                  minNumbers:1
                }) && 
                isEmail(emailRef.current!?.value)
              )}
              ref={passwordConfirmRef}
              type="password"
              name="confirm-password"
              id="confirm-password"
              placeholder="••••••••"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>
          <div className="flex items-start">
            <div className="flex items-center h-5">
              <input
                onChange={()=>setIsTermsAccepted(
                    fullnameRef.current!?.value.length > 0 && 
                    (passwordRef.current!?.value === passwordConfirmRef.current!?.value) && 
                    acceptTermsRef.current!?.checked &&
                    isStrongPassword(passwordRef.current!?.value,{
                      minLength: 6,
                      minLowercase: 1,
                      minUppercase: 1,
                      minSymbols:1,
                      minNumbers:1
                    }) && 
                    isEmail(emailRef.current!?.value)
                  )}
                ref={acceptTermsRef}
                id="terms"
                aria-describedby="terms"
                type="checkbox"
                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                required={true}
              />
            </div>
            <div className="ml-3 text-sm">
              <label
                htmlFor="terms"
                className="font-light text-gray-500 dark:text-gray-300"
              >
                I accept the{" "}
                <a
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                  href="#"
                >
                  Terms and Conditions
                </a>
              </label>
            </div>
          </div>
          <button
            onClick={(e) => {
              e.preventDefault();
              const password = passwordRef.current!.value,
                email = emailRef.current!.value,
                fullname = fullnameRef.current!.value;
                setIsTermsAccepted(false)
                if(isTermsAccepted) startSignup({ email, password,fullname}, createUser);
            }}
            disabled={!isTermsAccepted}
            type="submit"
            className="w-full disabled:bg-blue-400 bg-blue-700 text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
          >
            Create an account
          </button>
          <p className="text-sm font-light text-gray-500 dark:text-gray-400">
            Already have an account?{" "}
            <span
              onClick={() => setAction("login")}
              className="cursor-pointer text-red-600 dark:text-blue-400 text-primary-600 font-bold hover:underline dark:text-primary-500"
            >
              Login here
            </span>
          </p>
        </form>
      </div>
    </div>
    </>
  );
});
