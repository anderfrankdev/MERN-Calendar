
export const LoadingPage = (
    <div className="fixed top-0 bg-gray-50 py-8 dark:bg-gray-900 dark:bg-gradient-to-bl  dark:from-slate-900 dark:via-purple-900 dark:to-slate-900 bg-gradient-to-bl from-rose-100 to-teal-100 left-0 right-0 bottom-0 w-full h-screen z-50 overflow-hidden flex flex-col items-center justify-center">
        <div className={`loader dark:border-t-blue-500 border-t-blue-600 ease-linear rounded-full border-4 border-t-4 border-gray-950 dark:border-gray-200 h-12 w-12 mb-4`}></div>
        <h2 className="text-center text-black dark:text-white text-xl font-bold">Loading...</h2>
        <p className="w-1/3 text-center text-black font-medium dark:text-white">This may take a few seconds, please don't close this page.</p>
    </div>
)