'use client'

const RegForm = () => {

const onSubmit = (e:React.FormEvent) => {
    e.preventDefault
    console.log('Register!')
}

  return (
    <div>
        <form  className="px-7 py-4 flex flex-col gap-2">
            <p>Email</p>
            <input id="email"
            autoComplete="off"
            placeholder="Enter your email address"
            className={`border border-black disabled:border-slate-100 w-full block outline-none py-2 px-1 transition-all text-xs lg:text-sm xl:text-base  bg-slate-50 focus:shadow focus:shadow-green-500 rounded-md`}/>
            <button className={`border border-black disabled:border-slate-100 w-full block outline-none py-2 px-1 transition-all text-xs lg:text-sm xl:text-base  bg-black focus:shadow text-white rounded-md mt-3`}>Continue</button>
            <div className="flex-1 border-t border-gray-300"/>
            <div>
            <p className="text-gray-500 mx-4 flex items-center justify-center">OR</p>
            </div>
            <button className={`border border-black disabled:border-slate-100 w-full block outline-none py-2 px-1 transition-all text-xs lg:text-sm xl:text-base  bg-black focus:shadow text-white rounded-md mt-3`}>Continue with Google</button>
            <button className={`border border-black disabled:border-slate-100 w-full block outline-none py-2 px-1 transition-all text-xs lg:text-sm xl:text-base  bg-blue-500 focus:shadow text-white rounded-md mt-3`}>Continue with Facebook</button>
              <div className="flex-1 border-t border-gray-300"/>
        </form>
    </div>
  )
}

export default RegForm