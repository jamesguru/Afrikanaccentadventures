import React, { useState } from "react";
import Footer from "../../components/Footer/Footer";
import { useHistory } from 'react-router-dom';
import Navbar from "../../components/navbar/Navbar";
import { useForm} from 'react-hook-form';
import "./diy.css";
import { publicRequest } from "../../requestMethods";


const DIY = () => {
  const [inputs, setInputs] = useState({});
  const history=useHistory();
  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const onSubmit = async () => {
    const orderid = Math.floor(Math.random() * 100000 + 1);

    const id = `AAA${orderid}`;
    const order = { ...inputs, type: "diy", uid: id };

  
    await publicRequest.post("/orders/", order);

    inputs.firstname=''
    inputs.lastname = ''
    inputs.phone = ''
    inputs.email = ''
    inputs.country = ''
    inputs.days=''
    inputs.arrivaldate=''
    inputs.activities=''
    inputs.children=''
    inputs.adults=''
    inputs.additionalinfo=''
    inputs.budget=''
    history.push('/success')
  };
  const { register, handleSubmit, formState: { errors,isValid } } = useForm();
  return (
    <div className="diy">
      <Navbar />
      
      <form onSubmit={handleSubmit(onSubmit)}>
      <div className="diy-background">
        <span className="diy-name">Design Your Own Safari</span>
      </div>

      <div className="diy-description">
        <span>
          Africa is not a once in a lifetime destination. It is a lifetime
          destination. The so called “the dark continent” the cradle of
          Humankind, is about one quarter bigger than all of the North America.
          The whole Europe continent would fit into its more than three times.
          There are more than 2,000 indigenous African dialects and cultures, a
          diversity reflected by the tremendous cluster of flora and fauna that
          occurs across the expansiveness of the continent from huge mammals,
          the super fauna is unmatched to any place on the planet. Africa plays
          host to more than 1,500 mammal species. Vast intact savannah scenes
          and ecosystems enable herds of elephant, lion and even some of our
          closest relatives chimpanzees and gorillas as well as the deserts,
          off-shore islands and lakes. Therefore, arranging that first safari
          can overwhelm. We can help you get the best out of your experience and
          urge you to consider the underneath focuses while mulling over Africa.
        </span>
      </div>

      <div className="diy-book">
        <label htmlFor=""> First Name</label>
        <input type="text" name="firstname"  id="firstname" {...register('firstname', { required: true })} className={errors.firstname ? 'invalid' : ''} onChange={handleChange} />
        {errors.firstname && <span className="error-message">This field is required</span>}
        <label htmlFor=""> Last Name</label>
        <input type="text" name="lastname" id="lastname" {...register('lastname', { required: true })} className={errors.lastname ? 'invalid' : ''} onChange={handleChange} />
        {errors.lastname && <span className="error-message">This field is required</span>}
        <label htmlFor="">Are You a Travel Agent?</label>

        <select name="agent" id="" onChange={handleChange}>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>

        <label htmlFor="">Phone number we can reach with.</label>
        <input type="text" name="phone" id="phone" {...register('phone', { required: true })} className={errors.name ? 'invalid' : ''} onChange={handleChange} />
        {errors.phone && <span className="error-message">This field is required</span>}

        <label htmlFor="">Email</label>
        <input type="text" name="email" id="email" {...register('email', { required: true, pattern: /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/ })} className={errors.email ? 'invalid' : ''} onChange={handleChange} />
        {errors.email && errors.email.type === 'required' && <span className="error-message">This field is required</span>}
        {errors.email && errors.email.type === 'pattern' && <span className="error-message">Invalid email format</span>}

        <label htmlFor="">Country</label>
        <input type="text" name="country" id="country" {...register('country', { required: true })} className={errors.name ? 'invalid' : ''} onChange={handleChange} />
        {errors.country && <span className="error-message">This field is required</span>}
        <label htmlFor="">No. of Days</label>

        <input type="number" name="days" id="days" {...register('days', { required: true })} className={errors.days ? 'invalid' : ''} onChange={handleChange} />
        {errors.days && <span className="error-message">This field is required</span>}
        <label htmlFor="">Preferred Arrival Date</label>
        <input type="date" name="arrivaldate" id="arrivaldate" {...register('arrivaldate', { required: true })} className={errors.days ? 'invalid' : ''} onChange={handleChange} />
        {errors.arrivaldate && <span className="error-message">This field is required</span>}
        <label htmlFor=" ">No. of Adults*</label>
        <input type="number" name="adults" id="adults" {...register('adults', { required: true })} className={errors.days ? 'invalid' : ''} onChange={handleChange} />
        {errors.adults && <span className="error-message">This field is required</span>}
        <label htmlFor="">Children Under 12yrs *</label>
        <input
          type="number"
          name="children"

          onChange={handleChange}
          placeholder="if applicable"
        />

        <label htmlFor="">Interests / activities to be included *</label>
        <input type="text" name="activities" id="activities" {...register('activities', { required: true })} className={errors.days ? 'invalid' : ''} onChange={handleChange} />
        {errors.activities && <span className="error-message">This field is required</span>}
        <label htmlFor="">Countries / Parks to visit *</label>
        <input type="text" name="parks" id="parks" {...register('parks', { required: true })} className={errors.days ? 'invalid' : ''} onChange={handleChange} />
        {errors.activities && <span className="error-message">This field is required</span>}

        <label htmlFor="">Accommodation preferences </label>
        <select name="accomodation" id="" onChange={handleChange}>
          <option value="camping">Camping</option>
          <option value="lodge">Lodge</option>
          <option value="guest">Guest House</option>
          <option value="hotel">Hotel</option>
          <option value="onboardboat">Onboard Boat</option>
          <option value="mixed">Mixed</option>
        </select>
        <label htmlFor="">Budget TOTAL per person *</label>
        <input type="number" name="budget" id="budget" {...register('budget', { required: true })} className={errors.days ? 'invalid' : ''}  onChange={handleChange} />
        {errors.budget && <span className="error-message">This field is required</span>}
        <label htmlFor="">Currency</label>
        <select name="currency" onChange={handleChange} id="">
          <option value="GBP">GBP</option>
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="ZAR">ZAR</option>
        </select>

        <label htmlFor="">Additional Information *</label>
        <input
          type="text"
          placeholder="wheel chair access, dietary limitation"
          name="additionalinfo"
          id="additionalinfo" {...register('additionalinfo', { required: true })} className={errors.days ? 'invalid' : ''} 
          onChange={handleChange}
        />
         {errors.additionalinfo && <span className="error-message">This field is required</span>}

        <button> Submit </button>
      </div>
      </form>
      <Footer />
    </div>
  );
};

export default DIY;
