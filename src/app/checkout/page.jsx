// "use client";

// import { useForm } from "react-hook-form";
// import { useMutation } from "@tanstack/react-query";
// import { useState } from "react";

// export default function CheckoutPage() {
//   const [success, setSuccess] = useState(false);

//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//     reset,
//   } = useForm();

//   const mutation = useMutation({
//     mutationFn: async (data) => {
//       // Fake API call (no backend)
//       return new Promise((resolve) =>
//         setTimeout(() => resolve(data), 1000)
//       );
//     },
//     onSuccess: () => {
//       setSuccess(true);
//       reset();
//     },
//   });

//   const onSubmit = (data) => {
//     mutation.mutate(data);
//   };

//   return (
//     <div style={{ maxWidth: "400px", margin: "50px auto" }}>
//       <h2>Checkout</h2>

//       {success && (
//         <p style={{ color: "green" }}>
//           ✅ Order placed successfully!
//         </p>
//       )}

//       <form onSubmit={handleSubmit(onSubmit)}>
//         {/* Name */}
//         <div>
//           <input
//             placeholder="Name"
//             {...register("name", { required: "Name is required" })}
//           />
//           {errors.name && <p>{errors.name.message}</p>}
//         </div>

//         {/* Email */}
//         <div>
//           <input
//             placeholder="Email"
//             {...register("email", {
//               required: "Email is required",
//               pattern: {
//                 value: /^\S+@\S+$/i,
//                 message: "Invalid email",
//               },
//             })}
//           />
//           {errors.email && <p>{errors.email.message}</p>}
//         </div>

//         {/* Address */}
//         <div>
//           <textarea
//             placeholder="Address"
//             {...register("address", {
//               required: "Address is required",
//             })}
//           />
//           {errors.address && <p>{errors.address.message}</p>}
//         </div>

//         <button type="submit" disabled={mutation.isPending}>
//           {mutation.isPending ? "Submitting..." : "Submit"}
//         </button>
//       </form>
//     </div>
//   );
// }


"use client";

import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";

export default function CheckoutPage() {
  const [success, setSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const mutation = useMutation({
    mutationFn: async (data) => {
      return new Promise((resolve) =>
        setTimeout(() => resolve(data), 1200)
      );
    },
    onSuccess: () => {
      setSuccess(true);
      reset();
    },
  });

  const onSubmit = (data) => {
    setSuccess(false);
    mutation.mutate(data);
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-8">

        <h2 className="text-3xl font-bold text-center mb-6">
          Checkout
        </h2>

        {success && (
          <div className="mb-6 p-4 bg-green-100 text-green-700 rounded-lg text-sm text-center">
            ✅ Order placed successfully!
          </div>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">

          {/* Name */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              {...register("name", { required: "Name is required" })}
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 transition
              ${errors.name 
                ? "border-red-500 focus:ring-red-300" 
                : "border-gray-300 focus:ring-black"}`}
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">
                {errors.name.message}
              </p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Invalid email",
                },
              })}
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 transition
              ${errors.email 
                ? "border-red-500 focus:ring-red-300" 
                : "border-gray-300 focus:ring-black"}`}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Address */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Address
            </label>
            <textarea
              rows="3"
              placeholder="Enter your address"
              {...register("address", {
                required: "Address is required",
              })}
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 transition resize-none
              ${errors.address 
                ? "border-red-500 focus:ring-red-300" 
                : "border-gray-300 focus:ring-black"}`}
            />
            {errors.address && (
              <p className="text-red-500 text-sm mt-1">
                {errors.address.message}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={mutation.isPending}
            className="w-full bg-green-700 text-white py-3 rounded-lg font-medium hover:bg-green-800 transition disabled:opacity-60"
          >
            {mutation.isPending ? "Processing..." : "Place Order →"}
          </button>

        </form>
      </div>
    </div>
  );
}
