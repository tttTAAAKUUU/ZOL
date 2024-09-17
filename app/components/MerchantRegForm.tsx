'use client'

const MerchantRegForm = () => {

const onSubmit = (e:React.FormEvent) => {
    e.preventDefault
    console.log('Register!')
}

  return (
    <div className="flex-1">
        <form  className="px-7 pt-40 flex flex-col gap-2 bg-white rounded-xl">
            <p className=" m-3 text-black">Merchant Registration</p>

            <input id="number"
            autoComplete="off"
            placeholder="Enter your phone number"
            className={` m-3 border border-black disabled:border-slate-100 w-full block outline-none py-2 px-1 transition-all text-xs lg:text-sm xl:text-base  bg-slate-50 focus:shadow focus:shadow-green-500 rounded-md`}/>

            <input id="number"
            autoComplete="off"
            placeholder="Enter your phone number"
            className={`m-3 border border-black disabled:border-slate-100 w-full block outline-none py-2 px-1 transition-all text-xs lg:text-sm xl:text-base  bg-slate-50 focus:shadow focus:shadow-green-500 rounded-md`}/>

            <input id="number"
            autoComplete="off"
            placeholder="Enter your phone number"
            className={`m-5 border border-black disabled:border-slate-100 w-full block outline-none py-2 px-1 transition-all text-xs lg:text-sm xl:text-base  bg-slate-50 focus:shadow focus:shadow-green-500 rounded-md`}/>
            
            <div className=" m-3 flex row-auto">
                <input id="fName"
                 autoComplete="off"
                 placeholder="Enter your firstname"
                 className={` m-2 border border-black disabled:border-slate-100 w-full block outline-none py-2 px-1 transition-all text-xs lg:text-sm xl:text-base  bg-slate-50 focus:shadow focus:shadow-green-500 rounded-md`}/>

                <input id="lName"
                 autoComplete="off"
                 placeholder="Enter your lastname"
                 className={` m-2 border border-black disabled:border-slate-100 w-full block outline-none py-2 px-1 transition-all text-xs lg:text-sm xl:text-base  bg-slate-50 focus:shadow focus:shadow-green-500 rounded-md`}/>
            </div>

            <input id="number"
            autoComplete="off"
            placeholder="Enter your phone number"
            className={`m-3 border border-black disabled:border-slate-100 w-full block outline-none py-2 px-1 transition-all text-xs lg:text-sm xl:text-base  bg-slate-50 focus:shadow focus:shadow-green-500 rounded-md`}/>

            <input id="number"
            autoComplete="off"
            placeholder="Enter your phone number"
            className={`m-3 border border-black disabled:border-slate-100 w-full block outline-none py-2 px-1 transition-all text-xs lg:text-sm xl:text-base  bg-slate-50 focus:shadow focus:shadow-green-500 rounded-md`}/>
            <button className={`m-3 border border-black disabled:border-slate-100 w-full block outline-none py-2 px-1 transition-all text-xs lg:text-sm xl:text-base  bg-black focus:shadow text-white rounded-md mt-3`}>Continue</button>
            
        </form>
    </div>
  )
}

export default MerchantRegForm