import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { X } from 'lucide-react';
import { submitToGoogleSheet } from '../utils/formSubmission';
import { theme } from '../theme';

interface OrderFormProps {
  isOpen: boolean;
  onClose: () => void;
  selectedPlan?: 'Standard' | 'Pro';
}

interface FormInputs {
  fullName: string;
  companyName: string;
  email: string;
  phone: string;
  country: string;
  deviceCount: number;
  plan: 'Standard' | 'Pro';
  notes: string;
}

const schema = yup.object({
  fullName: yup.string().required('Full name is required'),
  companyName: yup.string().required('Company name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  phone: yup.string().required('Phone number is required'),
  country: yup.string().required('Country is required'),
  deviceCount: yup.number().required('Number of devices is required').positive('Must be a positive number'),
  plan: yup.string().oneOf(['Standard', 'Pro']).required('Please select a plan'),
  notes: yup.string().required('Notes are required'),
}).required();

const OrderForm = ({ isOpen, onClose, selectedPlan = 'Standard' }: OrderFormProps) => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormInputs>({
    resolver: yupResolver(schema),
    defaultValues: {
      plan: selectedPlan,
    }
  });

  const onSubmit: SubmitHandler<FormInputs> = async (data) => {
    const success = await submitToGoogleSheet(data);
    if (success) {
      setIsSubmitted(true);
      reset();
    } else {
      alert("There was a problem submitting your form. Please try again later.");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
      <div className="bg-[#222222] rounded-lg shadow-lg max-w-md w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl text-white font-bold" style={{ fontFamily: theme.fonts.heading }}>
              {isSubmitted ? "Thank You!" : "Order Now"}
            </h2>
            <button onClick={onClose} className="text-gray-400 hover:text-white">
              <X size={24} />
            </button>
          </div>

          {isSubmitted ? (
            <div className="text-center py-6">
              <div className="text-green-500 text-5xl mb-4">✓</div>
              <p className="text-white text-lg mb-6">
                Thank you for your request. Our team will reach out shortly to confirm and activate your order.
              </p>
              <p className="text-white mb-4">Want to fast-track your onboarding?</p>
              <a 
                href="https://calendly.com/nilesh-pay2power/subscribe" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 bg-[#FF3333] text-white rounded-md hover:bg-[#FF5555] transition-colors"
              >
                Schedule a Meeting
              </a>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div>
                <label className="block text-white mb-2">Full Name</label>
                <input 
                  {...register('fullName')} 
                  className="w-full p-2 bg-[#333333] text-white rounded border border-[#444444] focus:border-[#FF3333] focus:outline-none"
                />
                {errors.fullName && <p className="text-[#FF3333] mt-1">{errors.fullName.message}</p>}
              </div>

              <div>
                <label className="block text-white mb-2">Company Name</label>
                <input 
                  {...register('companyName')} 
                  className="w-full p-2 bg-[#333333] text-white rounded border border-[#444444] focus:border-[#FF3333] focus:outline-none"
                />
                {errors.companyName && <p className="text-[#FF3333] mt-1">{errors.companyName.message}</p>}
              </div>

              <div>
                <label className="block text-white mb-2">Email Address</label>
                <input 
                  {...register('email')} 
                  type="email" 
                  className="w-full p-2 bg-[#333333] text-white rounded border border-[#444444] focus:border-[#FF3333] focus:outline-none"
                />
                {errors.email && <p className="text-[#FF3333] mt-1">{errors.email.message}</p>}
              </div>

              <div>
                <label className="block text-white mb-2">Phone Number</label>
                <input 
                  {...register('phone')} 
                  className="w-full p-2 bg-[#333333] text-white rounded border border-[#444444] focus:border-[#FF3333] focus:outline-none"
                />
                {errors.phone && <p className="text-[#FF3333] mt-1">{errors.phone.message}</p>}
              </div>

              <div>
                <label className="block text-white mb-2">Country</label>
                <input 
                  {...register('country')} 
                  className="w-full p-2 bg-[#333333] text-white rounded border border-[#444444] focus:border-[#FF3333] focus:outline-none"
                />
                {errors.country && <p className="text-[#FF3333] mt-1">{errors.country.message}</p>}
              </div>

              <div>
                <label className="block text-white mb-2">Number of Devices</label>
                <input 
                  {...register('deviceCount', { valueAsNumber: true })} 
                  type="number" 
                  className="w-full p-2 bg-[#333333] text-white rounded border border-[#444444] focus:border-[#FF3333] focus:outline-none"
                />
                {errors.deviceCount && <p className="text-[#FF3333] mt-1">{errors.deviceCount.message}</p>}
              </div>

              <div>
                <label className="block text-white mb-2">Select Plan</label>
                <select 
                  {...register('plan')} 
                  className="w-full p-2 bg-[#333333] text-white rounded border border-[#444444] focus:border-[#FF3333] focus:outline-none"
                >
                  <option value="Standard">Standard</option>
                  <option value="Pro">Pro</option>
                </select>
                {errors.plan && <p className="text-[#FF3333] mt-1">{errors.plan.message}</p>}
              </div>

              <div>
                <label className="block text-white mb-2">Additional Notes</label>
                <textarea 
                  {...register('notes')} 
                  className="w-full p-2 bg-[#333333] text-white rounded border border-[#444444] focus:border-[#FF3333] focus:outline-none"
                  rows={4}
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="w-full py-3 bg-[#FF3333] text-white rounded-md hover:bg-[#FF5555] transition-colors font-bold"
              >
                Submit Order
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default OrderForm;
