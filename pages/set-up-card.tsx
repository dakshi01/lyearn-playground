import { motion } from "framer-motion";
const SetupCard = function () {
    return (
        <>
        <div className="flex min-h-screen flex-col items-center justify-center py-2 dark:bg-gray-900">
            <div id="setUpCard" className="relative bg-white rounded-2xl border border-gray-100 hover:shadow-sm">
                <div className="relative">
                    <div className="flex gap-3.5 z-10 fixed px-36 py-14 items-center">
                        <motion.svg whileHover={{y: -4, scale: 1.1}} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="0.5" y="0.5" width="23" height="23" rx="5.5" stroke="#BFBFBF"/>
                        </motion.svg>
                        <motion.svg whileHover={{y: -4, scale: 1.1}} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="24" height="24" rx="6" fill="#7278F5"/>
                        <path d="M2 8.4C2 6.15979 2 5.03968 2.43597 4.18404C2.81947 3.43139 3.43139 2.81947 4.18404 2.43597C5.03968 2 6.15979 2 8.4 2H12V22H8.4C6.15979 22 5.03968 22 4.18404 21.564C3.43139 21.1805 2.81947 20.5686 2.43597 19.816C2 18.9603 2 17.8402 2 15.6V8.4Z" fill="white"/>
                        </motion.svg>
                        <motion.svg whileHover={{y: -4, scale: 1.1}} width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="28" height="28" rx="6" fill="#24B264"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M12.3378 18.6653C12.1231 18.6653 11.9178 18.5766 11.7708 18.4203L7.98842 14.3922C7.69364 14.0795 7.70997 13.5872 8.02264 13.2932C8.33609 12.9992 8.82842 13.0147 9.12164 13.3274L12.33 16.7426L18.8695 9.58548C19.1604 9.26737 19.652 9.24637 19.9693 9.53571C20.2859 9.82504 20.3076 10.3174 20.0183 10.6339L12.9118 18.4117C12.7663 18.5719 12.5594 18.6637 12.3432 18.6653H12.3378Z" fill="white" stroke="white" stroke-width="0.25"/>
                        </motion.svg>
                        <motion.svg whileHover={{y: -4, scale: 1.1}} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="24" height="24" rx="6" fill="#FBBF24"/>
                        <path d="M2 10C2 7.19974 2 5.79961 2.54497 4.73005C3.02433 3.78924 3.78924 3.02433 4.73005 2.54497C5.79961 2 7.19974 2 10 2H12V13H2V10Z" fill="white"/>
                        </motion.svg>
                        <motion.svg whileHover={{y: -4, scale: 1.1}} width="26" height="27" viewBox="0 0 26 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M11.75 3H9.6C6.23969 3 4.55953 3 3.27606 3.65396C2.14708 4.2292 1.2292 5.14708 0.653961 6.27606C0 7.55953 0 9.23969 0 12.6V17.4C0 20.7603 0 22.4405 0.653961 23.7239C1.2292 24.8529 2.14708 25.7708 3.27606 26.346C4.55953 27 6.23969 27 9.6 27H14.4C17.7603 27 19.4405 27 20.7239 26.346C21.8529 25.7708 22.7708 24.8529 23.346 23.7239C24 22.4405 24 20.7603 24 17.4V14.75H23V17.4C23 19.0967 22.9992 20.309 22.9216 21.2594C22.8449 22.198 22.6982 22.7927 22.455 23.27C21.9757 24.2108 21.2108 24.9757 20.27 25.455C19.7927 25.6982 19.198 25.8449 18.2594 25.9216C17.309 25.9992 16.0967 26 14.4 26H9.6C7.90334 26 6.69099 25.9992 5.74064 25.9216C4.80197 25.8449 4.20731 25.6982 3.73005 25.455C2.78924 24.9757 2.02433 24.2108 1.54497 23.27C1.30179 22.7927 1.15512 22.198 1.07842 21.2594C1.00078 20.309 1 19.0967 1 17.4V12.6C1 10.9033 1.00078 9.69099 1.07842 8.74064C1.15512 7.80197 1.30179 7.20731 1.54497 6.73005C2.02433 5.78924 2.78924 5.02433 3.73005 4.54497C4.20731 4.30179 4.80197 4.15512 5.74064 4.07842C6.69099 4.00078 7.90334 4 9.6 4H11.75V3Z" fill="#BFBFBF"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M19.7499 0.75C19.3357 0.75 18.9999 1.08579 18.9999 1.5V5.99988H14.5C14.0858 5.99988 13.75 6.33566 13.75 6.74988C13.75 7.16409 14.0858 7.49988 14.5 7.49988H18.9999V12C18.9999 12.4142 19.3357 12.75 19.7499 12.75C20.1641 12.75 20.4999 12.4142 20.4999 12V7.49988H25C25.4142 7.49988 25.75 7.16409 25.75 6.74988C25.75 6.33566 25.4142 5.99988 25 5.99988H20.4999V1.5C20.4999 1.08579 20.1641 0.75 19.7499 0.75Z" fill="#BFBFBF"/>
                        </motion.svg>
                    </div>
                    <img src="/illus-grid.png" alt="background grid"/>
                </div>
                <div className="px-6 pb-6">
                    <h2 className="text-base text-gray-900 font-medium">Set up Tasks</h2>
                    <p className="text-sm text-gray-500">Set up tasks to keep up with your goals</p>
                    <button id="setUpCard" className="text-sm text-gray-900 font-semibold py-3 px-4 bg-gray-100 rounded-full mt-6 w-full">Set up Tasks</button>
                </div>
            </div>
        </div>
        </>
    )
}

export default SetupCard;