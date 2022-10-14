import {MdCancel} from 'react-icons/md'

function SuccessAlert({message}) {
  return (
    <div className="rounded-md bg-[#33e218] p-4">
      <div className="flex">
        <div className="flex-shrink-0">
        </div>
        <div className="ml-3">
          <p className='text-sm font-medium text-white'>{message}</p>
        </div>
        <div className="ml-auto pl-3">
          <div className="-mx-1.5 -my-1.5">
          </div>
        </div>
      </div>
    </div>
  )
}

function ErrorAlert({message}) {
    return (
        <div className="rounded-md bg-[#e41515] p-4">
          <div className="flex">
            <div className="flex-shrink-0">
            </div>
            <div className="ml-3">
              <p className='text-sm font-medium text-white'>{message}</p>
            </div>
            <div className="ml-auto pl-3">
              <div className="-mx-1.5 -my-1.5">
              </div>
            </div>
          </div>
        </div>
      )
}


export {SuccessAlert, ErrorAlert}