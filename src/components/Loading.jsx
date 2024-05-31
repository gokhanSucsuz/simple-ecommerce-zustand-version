
const Loading = () => {
    return (
        <div className="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
            <div className="animate-pulse flex space-x-4">
                <div className="rounded-lg bg-slate-400 h-50 w-40" />
                <div className="flex-1 space-y-6 py-1">
                    <div className="h-6 bg-slate-400 rounded-lg" />
                    <div className="space-y-3">
                        <div className="grid grid-cols-3 gap-4">
                            <div className="h-6 bg-slate-400 rounded-lg col-span-2" />
                            <div className="h-6 bg-slate-400 rounded-lg col-span-1" />
                        </div>
                        <div className="h-6 bg-slate-400 rounded-lg" />
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Loading