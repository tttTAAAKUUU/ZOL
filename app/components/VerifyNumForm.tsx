'use client'

const VerifyNumForm = () => {

const onSubmit = (e:React.FormEvent) => {
    e.preventDefault
    console.log('Register!')
}

  return (
    <div>
        <form  className="px-7 py-4 flex flex-col gap-2">
            <p>Enter the code we just sent via SMS</p>
            <input id="Phone_verification"
            autoComplete="off"
            placeholder=""
            className={`border border-black disabled:border-slate-100 w-full block outline-none py-2 px-1 transition-all text-xs lg:text-sm xl:text-base  bg-slate-50 focus:shadow focus:shadow-green-500 rounded-md`}/>
            <button className={`border border-black disabled:border-slate-100 w-full block outline-none py-2 px-1 transition-all text-xs lg:text-sm xl:text-base  bg-black focus:shadow text-white rounded-md mt-3`}>Continue</button>
            
        </form>
    </div>
  )
}

export default VerifyNumForm