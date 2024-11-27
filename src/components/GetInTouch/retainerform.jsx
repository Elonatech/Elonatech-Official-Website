import { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify'
import { BASEURL } from '../../BaseURL/BaseURL'
import { useNavigate } from 'react-router-dom'
import './retainer.css'

const options = ['2 times a week', '3 times a week', '5 times a week', 'Other']

const Retainerform = () => {
  let navigate = useNavigate()

  const getInitialState = () => {
    const value = 'Retainer Services Required'
    return value
  }

  const getContractState = () => {
    const value = 'Contract Renewable'
    return value
  }

  const getFrequencyState = () => {
    const value = 'Weekly'
    return value
  }

  const [fullname, setFullname] = useState('')
  const [company, setCompany] = useState('')
  const [email, setEmail] = useState('')
  const [number, setNumber] = useState('')
  const [state, setState] = useState('')
  const [address, setAddress] = useState('')
  const [service, setService] = useState(getInitialState)
  const [contract, setContract] = useState(getContractState)
  const [frequency, setFrequency] = useState(getFrequencyState)
  const [selected, setSelected] = useState(null)
  const [isSubmitting, setIsSubmitting] = useState(false)

  function onChange (i) {
    setSelected(prev => (i === prev ? null : i))
  }
  const days = options[selected]

  const handleChangeNumber = e => {
    const value = e.target.value.replace(/\D/g, '')
    setNumber(value)
  }

  const handleSubmit = async e => {
    e.preventDefault()
    setIsSubmitting(true)
    try {
      const newData = {
        fullname,
        company,
        email,
        number,
        address,
        state,
        service,
        contract,
        frequency,
        days
      }

      const response = await axios.post(
        `${BASEURL}/api/v1/email/retainership`,
        newData,
        { headers: { 'Content-Type': 'application/json' } }
      )
      if (response) {
        toast.success(response.data)
        setTimeout(() => {
          navigate(0)
        }, 2000)
      }
    } catch (error) {
      toast.error(error.response.data)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <button
        type='button'
        class='btn btn-danger'
        data-bs-toggle='modal'
        data-bs-target='#exampleModal'
      >
        <h5 className='pt-2'>Need a Retainer?</h5>
      </button>

      {/*   Modal  */}
      <div
        class='modal fade my-modal'
        id='exampleModal'
        tabindex='-1'
        aria-labelledby='exampleModalLabel'
        aria-hidden='true'
      >
        <div class='modal-dialog modal-dialog-centered modal-dialog-scrollable'>
          <div class='modal-content'>
            <div class='modal-header'>
              <h5 class='modal-title text-dark fw-bold' id='exampleModalLabel'>
                Need a Retainer Partnership?
              </h5>
              <button
                type='button'
                class='btn-close'
                data-bs-dismiss='modal'
                aria-label='Close'
              ></button>
            </div>
            <div class='modal-body text-dark'>
              <form>
                <div class='mb-3'>
                  <label for='exampleInput1' class='form-label fw-bold'>
                    Full Name<span className='text-danger'>*</span>
                  </label>
                  <input
                    type='text'
                    class='form-control'
                    onChange={e => setFullname(e.target.value)}
                    id='exampleInput1'
                  />
                </div>
                <div class='mb-3'>
                  <label for='exampleInput1' class='form-label fw-bold'>
                    Company Name<span className='text-danger'>*</span>
                  </label>
                  <input
                    type='text'
                    class='form-control'
                    onChange={e => setCompany(e.target.value)}
                    id='exampleInput1'
                  />
                </div>
                <div class='mb-3'>
                  <label for='exampleInput1' class='form-label fw-bold'>
                    Email<span className='text-danger'>*</span>
                  </label>
                  <input
                    type='email'
                    class='form-control'
                    onChange={e => setEmail(e.target.value)}
                    id='exampleInput1'
                  />
                </div>
                <div class='mb-3'>
                  <label for='exampleInput1' class='form-label fw-bold'>
                    Phone Number<span className='text-danger'>*</span>
                  </label>
                  <input
                    class='form-control'
                    value={number}
                    onChange={handleChangeNumber}
                    id='exampleInput1'
                  />
                </div>

                <div class='mb-3'>
                  <label for='exampleInput1' class='form-label fw-bold'>
                    Retainer Services Required
                    <span className='text-danger'>*</span>
                  </label>
                  <p className='mb-3'>
                    What Retainer Services would you like us to handle for you?
                  </p>
                  <select
                    class='form-select'
                    value={service}
                    onChange={e => setService(e.target.value)}
                    aria-label='Default select example'
                  >
                    <option selected>Retainer Services Required</option>
                    <option value='Technical Support Retainer'>
                      Technical Support Retainer
                    </option>
                    <option value='Graphics and Social Media Marketing'>
                      Graphics and Social Media Marketing
                    </option>
                    <option value='Website and Email Adminstration'>
                      Website and Email Adminstration
                    </option>
                    <option value='Others'>Others</option>
                  </select>
                </div>

                <div class='mb-3'>
                  <label for='exampleInput1' class='form-label fw-bold'>
                    Contract Renewable<span className='text-danger'>*</span>
                  </label>
                  <select
                    class='form-select'
                    value={contract}
                    onChange={e => setContract(e.target.value)}
                    aria-label='Default select example'
                  >
                    <option selected>Contract Renewable</option>
                    <option value='Annually'>Annually</option>
                    <option value='Bi-Annual'>Bi-Annual</option>
                    <option value='Others'>Others</option>
                  </select>
                </div>

                <div class='mb-3'>
                  <label for='exampleInput1' class='form-label fw-bold'>
                    Frequency<span className='text-danger'>*</span>
                  </label>
                  <select
                    class='form-select'
                    value={frequency}
                    onChange={e => setFrequency(e.target.value)}
                    aria-label='Default select example'
                  >
                    <option selected>Weekly</option>
                    <option value='Bi-weekly'>Bi-Weekly</option>
                    <option value='Monthly'>Monthly</option>
                  </select>
                  {/*=======================================================================  */}
                  {frequency === 'Weekly' ? (
                    <>
                      <label
                        for='exampleInput1'
                        class='form-label fw-bold mt-3'
                      >
                        Number of Days<span className='text-danger'>*</span>
                      </label>
                      {options.map((o, i) => {
                        return (
                          <div class='form-check'>
                            <label
                              key={i}
                              class='form-check-label'
                              for='exampleRadios1'
                            >
                              {o}
                            </label>
                            <input
                              class='form-check-input'
                              type='radio'
                              name='exampleRadios'
                              id='exampleRadios1'
                              value='option1'
                              checked={i === selected}
                              onChange={() => onChange(i)}
                            />
                          </div>
                        )
                      })}

                      {days === 'Other' ? (
                        <>
                          <div class='mb-3 mt-3'>
                            <input
                              type='text'
                              class='form-control'
                              id='exampleInput1'
                            />
                          </div>
                        </>
                      ) : (
                        <>
                          <div class='mb-3 mt-3'>
                            <input
                              type='number'
                              class='form-control'
                              id='exampleInput1'
                              disabled
                            />
                          </div>
                        </>
                      )}
                    </>
                  ) : (
                    <></>
                  )}
                </div>

                <div class='mb-3'>
                  <label
                    for='exampleInput1'
                    placeholder='State/Location'
                    class='form-label fw-bold'
                  >
                    State/Location<span className='text-danger'>*</span>
                  </label>
                  <input
                    type='text'
                    class='form-control'
                    onChange={e => setState(e.target.value)}
                    id='exampleInput1'
                  />
                </div>
                <div class='mb-3'>
                  <label
                    for='exampleInput1'
                    placeholder='Address of Company'
                    class='form-label fw-bold'
                  >
                    Address of Company<span className='text-danger'>*</span>
                  </label>
                  <input
                    type='text'
                    class='form-control'
                    onChange={e => setAddress(e.target.value)}
                    id='exampleInput1'
                  />
                </div>
              </form>
            </div>
            <div class='modal-footer'>
              <button
                type='button'
                className='btn btn-primary onliyu'
                onClick={handleSubmit}
                disabled={isSubmitting}
              >
                <h6>{isSubmitting ? 'Submitting...' : 'Submit'}</h6>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Retainerform
