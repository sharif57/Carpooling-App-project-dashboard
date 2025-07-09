"use client";

import baseApi from "../api/baseApi";

export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
  

    login: builder.mutation({
      query: (credentials) => ({
        url: "/auth/login/",
        method: "POST",
        body: credentials,
      }),
      invalidatesTags: ["User"],
    }),

    changePassword: builder.mutation({
      query: (data) => ({
        url: "/accounts/change_password/",
        method: "POST",
        body: data,
      }),
    }),

    forgotPassword: builder.mutation({
      query: (data) => ({
        url: "/auth/send_otp/",
        method: "POST",
        body: data,
      }),
    }),

    verifyEmail: builder.mutation({
      query: (data) => ({
        url: "/auth/verify_email/",
        method: "POST",
        body: data,
      }),
    }),

    resetPassword: builder.mutation({
      query: (data) => {
        return {
          url: "/auth/forgot_password/",
          method: "POST",
          body: data,
          headers: {
            Authorization: `Bearer ${localStorage.getItem("verify")}`,
          },
        };
      },
    }),


  }),
});

export const {

  useLoginMutation,
  useChangePasswordMutation,
  useForgotPasswordMutation,
  useVerifyEmailMutation,
  useResetPasswordMutation,

} = authApi;
