export default function Loading() {
    return (
        <div className="flex flex-col items-center justify-center min-h-[60vh] w-full space-y-6 text-text-secondary">
            <svg 
                className="w-12 h-12 text-orange-strong animate-[spin-soft_3s_linear_infinite]" 
                fill="currentColor" 
                viewBox="0 0 20 20"
            >
                <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4.22 2.32a1 1 0 011.415 0l.707.707a1 1 0 01-1.414 1.414l-.707-.707a1 1 0 010-1.414zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zm-3.1 4.606a1 1 0 010 1.415l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 0zM10 16a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zm-4.22-2.32a1 1 0 01-1.415 0l-.707-.707a1 1 0 011.414-1.414l.707.707a1 1 0 010 1.414zM2 10a1 1 0 011-1h1a1 1 0 110 2H3a1 1 0 01-1-1zm3.1-4.606a1 1 0 010-1.415l.707-.707a1 1 0 011.414 1.414l-.707.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
            <p className="text-sm font-bold tracking-widest text-text-secondary uppercase animate-pulse">
                Loading...
            </p>
        </div>
    );
}
