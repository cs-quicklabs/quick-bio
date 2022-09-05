import { Listbox,Dialog, Transition } from '@headlessui/react'
import { XIcon } from '@heroicons/react/outline'
import { Fragment, useState } from 'react'
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid'
import { RadioGroup } from '@headlessui/react'
import { Switch } from '@headlessui/react'
import AddMoreSpotlightLink from './AddMoreSpotlightLink'

const colors = [
  { name: 'Red', bgColor: 'bg-red-600', selectedColor: 'ring-red-600' },
  { name: 'Yellow', bgColor: 'bg-yellow-300', selectedColor: 'ring-yellow-300' },
  { name: 'Orange', bgColor: 'bg-orange-500', selectedColor: 'ring-orange-500' },
  { name: 'Green', bgColor: 'bg-green-500', selectedColor: 'ring-green-500' },
  { name: 'Blue', bgColor: 'bg-blue-500', selectedColor: 'ring-blue-500' },
  { name: 'Gray', bgColor: 'bg-gray-600', selectedColor: 'ring-gray-600' },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

const people = [
  { id: 1, name: 'Accept Payments' },
  { id: 2, name: 'Redirect to another URL' },
  { id: 3, name: 'Let people email me' },
  { id: 4, name: 'Download a File' },
  { id: 5, name: 'Let People call me' },
  { id: 6, name: 'Capture lead in google sheet' },
  { id: 7, name: 'Allow people to book an appointment' },
]

// function classNames(...classes: string[]) {
//   return classes.filter(Boolean).join(' ')
// }

export default function CreateSpotlight({showSpotlight, setShowSpotlight, loaderData, mode, setmode}:any) {
  const [selectedColor, setSelectedColor] = useState('')

  
  const [enabled, setEnabled] = useState(false)
  const [selected, setSelected] = useState(people[3])

  const Onclose = (e:any) => {
    
    if(mode === 'desktop'){
      setShowSpotlight(false)
    }
    if(mode === 'mobile'){
     
    }
  };

const handleChange = ()=>{
  setSelected
}

const OnCancel = ()=>{
  setShowSpotlight(false);
  setmode('desktop')
}


  return (
    <Transition.Root show={true} as={Fragment}>
      <Dialog as="div" className="relative z-20" onClose={()=>{}}>
        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className={`pointer-events-none fixed inset-y-0 left-0 flex `}>
              <Transition.Child
                as={Fragment}
                enter=""
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave=""
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                  <form  action="account/add/spotlight" method='POST' className='h-screen'>
                    
                    <div className={`flex h-[95%] flex-col mt-12 divide-y divide-gray-200 bg-white font-inter border-r border-gray-200 ${mode === 'mobile' ? 'lg:ml-[16rem] xl:ml-[24rem] w-[16rem] xl:w-96' : 'md:w-[20rem] lg:w-96'} `}>
                    
                      <div className="h-0 flex-1 overflow-y-auto">
                        <div className="py-6 px-4 sm:px-6 bg-gray-50">
                          <div className="flex items-center justify-between">
                            <Dialog.Title className="text-lg font-medium text-gray-900 leading-7"> 
                              Add Spotlight Button to your profile
                            </Dialog.Title>
                            <div className="ml-3 flex h-7 items-center">
                              <form action="">
                              <button
                                type="button"
                                className="rounded-md bg-white text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-white leading-3 text-sm"
                                onClick={Onclose}
                              >
                                <span className="sr-only">Close panel</span>
                              
                                <XIcon onClick={OnCancel} className="h-6 w-6" aria-hidden="true" />
                                
                              </button></form>
                            </div>
                          </div>
                          <div className="mt-1">
                            <p className="text-sm text-gray-500 leading-5 font-normal">
                              A spotlight button is an action button on your public profile
                            </p>
                          </div>
                        </div>

                        <div className="flex flex-1 flex-col justify-between">
                          <div className="divide-y divide-gray-200 px-4 sm:px-6">
                            <div className="space-y-6 pt-6 pb-5">

                            <div>
                              <label htmlFor="project-name" className="block text-sm font-medium text-gray-700">
                                {' '}
                                What do you want your spotlight button to say?{' '}
                              </label>
                              <div className="mt-1">
                                <input
                                  type="text"
                                  // value={input.location}
                                  name="buttonText"
                                  id="project-name"
                                  
                    //               onChange={(event) => {
                    //   setinput({
                    //     ...input,
                    //     [event.target.name]: event.target.value,
                    //   })
                    // }}
                                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                />
                              </div>
                            </div>
                            
                            <div className='flex justify-between'>
                              <div className="">
                              <RadioGroup value={selectedColor} onChange={setSelectedColor} name='buttonColor'>
                                <RadioGroup.Label className="block text-sm font-medium text-gray-700">
                                  Select Color For Button
                                </RadioGroup.Label>
                                <div className="mt-4 flex items-center space-x-2">
                                  {colors.map((color) => (
                                    <RadioGroup.Option
                                      key={color.name}
                                      value={color.bgColor}
                                      
                                      className={({ active, checked }) =>
                                        classNames(
                                          color.selectedColor,
                                          active && checked ? 'ring ring-offset-1' : '',
                                          !active && checked ? 'ring-2' : '',
                                          '-m-0.5 relative  rounded-full flex items-center justify-center cursor-pointer focus:outline-none'
                                        )
                                      }
                                    >
                                      <RadioGroup.Label as="span" className="sr-only">
                                        {color.name}
                                      </RadioGroup.Label>
                                      <span
                                        aria-hidden="true"
                                        className={classNames(color.bgColor, 'h-5 w-5 border border-black border-opacity-10 rounded-full')}
                                      />
                                    </RadioGroup.Option>
                                  ))}
                                </div>
                              </RadioGroup>
                              </div>

                              <div className='w-[7.813rem]'>
                              <label htmlFor="project-name" className="block text-sm font-medium text-gray-700">
                                {' '}
                                Or enter Hex Code{' '}
                              </label>
                              <div className="mt-1 p-1">
                                <input
                                  type="text"
                                  // value={input.location}
                                  name='hexcode'
                                  id="project-name"
                    //               onChange={(event) => {
                    //   setinput({
                    //     ...input,
                    //     [event.target.name]: event.target.value,
                    //   })
                    // }}
                                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                />
                              </div>
                            </div>
                            </div>

                            <div>
                              <label htmlFor="project-name" className="block text-sm font-medium text-gray-700">
                                {' '}
                                Select an icon for spotlight button (optional){' '}
                              </label>
                              <div className="mt-1">
                                <input
                                  type="text"
                                  // value={input.location}
                                  name="spotlightIcon"
                                  id="project-name"
                                  
                    //               onChange={(event) => {
                    //   setinput({
                    //     ...input,
                    //     [event.target.name]: event.target.value,
                    //   })
                    // }}
                                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                />
                                <p className='text-xs leading-5 font-normal text-gray-500 mt-1'>You can select any Hero icon to add to your button.  Please go <a target='_blank' className='text-blue-800 underline' href='https://heroicons.com/'>here</a> to find name of icon</p>
                              </div>
                            </div>

                            <div>
                            <Listbox value={selected.name}
                               //ts-ignore 
                             onChange={setSelected}
                              name='buttonAction'>
                              {({ open }) => (
                                <>
                                  <Listbox.Label className="block text-sm font-medium text-gray-700">
                                    What do you want button to do?
                                  </Listbox.Label>
                                  <div className="relative mt-1">
                                    <Listbox.Button className="relative w-full cursor-default rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-left shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm">
                                      <span className="block truncate">{selected.name}</span>
                                      <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                        <SelectorIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                                      </span>
                                    </Listbox.Button>

                                    <Transition
                                      show={open}
                                      as={Fragment}
                                      leave="transition ease-in duration-100"
                                      leaveFrom="opacity-100"
                                      leaveTo="opacity-0"
                                    >
                                      <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                        {people.map((person) => (
                                          <Listbox.Option
                                            key={person.id}
                                            className={({ active }) =>
                                              classNames(
                                                active ? 'text-white bg-indigo-600' : 'text-gray-900',
                                                'relative cursor-default select-none py-2 pl-3 pr-9'
                                              )
                                            }
                                            value={person}
                                          >
                                            {({ selected, active }) => (
                                              <>
                                                <span className={classNames(selected ? 'font-semibold' : 'font-normal', 'block truncate')}>
                                                  {person.name}
                                                </span>

                                                {selected ? (
                                                  <span
                                                    className={classNames(
                                                      active ? 'text-white' : 'text-indigo-600',
                                                      'absolute inset-y-0 right-0 flex items-center pr-4'
                                                    )}
                                                  >
                                                    <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                                  </span>
                                                ) : null}
                                              </>
                                            )}
                                          </Listbox.Option>
                                        ))}
                                      </Listbox.Options>
                                    </Transition>
                                  </div>
                                </>
                              )}
                            </Listbox>
                            </div>
                            
                            <div>
                              <label htmlFor="project-name" className="block text-sm font-medium text-gray-700">
                                {' '}
                                Please provide download path of file which you want visiter to download{' '}
                              </label>
                              <div className="mt-1">
                                <input
                                  type="text"
                                  // value={input.location}
                                  name="buttonActionlink"
                                  id="project-name"
                                  
                    //               onChange={(event) => {
                    //   setinput({
                    //     ...input,
                    //     [event.target.name]: event.target.value,
                    //   })
                    // }}
                                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                />
                              </div>
                            </div>

                            <div className=''>
                              <label htmlFor="project-name" className="block text-sm font-medium text-gray-700">
                                  {' '}
                                  Show spotlight button{' '}
                              </label>

                              <div className='flex'>
                                <p className='text-sm leading-5 font-normal text-gray-500'>
                                Switching it off will not show spotlight button to visitor.
                                Although all settings of button will be saved.
                                </p>
                                
                                <Switch name='toggleSpotlight'
                                  checked={enabled}
                                  value={enabled ? 'true' : 'false'}
                                  onChange={setEnabled}
                                  className={classNames(
                                    enabled ? 'bg-indigo-600' : 'bg-gray-200',
                                    'relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
                                  )}
                                >
                                  <span className="sr-only">Use setting</span>
                                  <span
                                    aria-hidden="true"
                                    className={classNames(
                                      enabled ? 'translate-x-5' : 'translate-x-0',
                                      'pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out'
                                    )}
                                  />
                                </Switch>
                              </div>
                              
                            </div>

                            <div className="flex flex-shrink-0 justify-end mt-7">
                    
                              <button
                                data-cy="addTestimonialButton"
                                type="submit"
                                className="ml-4 mb-4 leading-5 inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700" 
                                // disabled={error || !inputTestimonial.testimonialText || error1 || !inputTestimonial.testimonialBy ? true : false}
                              >
                                Add Spotlight Button
                              </button>
                            </div>
    
                            </div>
                          </div>
                        </div> 
                      
                        
                      </div>
{/* 
                      <AddMoreSpotlightLink showSpotlight={showSpotlight} setShowSpotlight={setShowSpotlight} loaderData={loaderData} mode={mode} setmode={setmode} /> */}
                    </div>
                    
                    
                    
                  </form>
                  
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}