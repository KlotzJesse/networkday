import { ErrorMessage, Field, Form, Formik, FormikErrors } from "formik";
import { signIn } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface AuthFormValues {
  name: string;
  company: string;
  email: string;
}

export default function Auth() {
  const initialValues: AuthFormValues = { name: "", company: "", email: "" };
  return (
    <section>
      <div className="flex max-h-screen">
        <div
          className="h-screen md:w-2/6 md:p-10"
          style={{ backgroundColor: "#F8F5ED" }}
        >
          <div className="flex flex-col justify-center h-full p-10 bg-white rounded-xl">
            <Link href={"/"} passHref>
              <a
                aria-label="Zur Startseite"
                title="#NetworkDay"
                className="inline-flex items-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    className="text-pink-500"
                    d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z"
                  />
                  <path
                    className="text-blue-900"
                    d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z"
                  />
                </svg>
                <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                  #NetworkDay
                </span>
              </a>
            </Link>
            <div className="flex items-center py-8">
              <h1 className="text-2xl font-bold">
                👋 Willkommen beim #NetworkDay
              </h1>
            </div>
            <div className="flex-1">
              <Formik
                initialValues={initialValues}
                validate={(values: AuthFormValues) => {
                  const errors: FormikErrors<AuthFormValues> = {};
                  if (!values.email) {
                    errors.email = "E-Mail darf nicht leer sein.";
                  } else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                      values.email
                    )
                  ) {
                    errors.email =
                      "Ungültige E-Mail Adresse. Benötigt: name@domain.de";
                  }
                  if (!values.name) {
                    errors.name = "Name darf nicht leer sein.";
                  }
                  if (!values.company) {
                    errors.company = "Firmenname darf nicht leer sein.";
                  }
                  return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {
                  signIn("credentials", {
                    username: values.name,
                    company: values.company,
                    mail: values.email,
                    callbackUrl: "/app/conference",
                  });
                  setSubmitting(false);
                }}
              >
                {({ isSubmitting, errors, touched }) => (
                  <Form className="flex flex-col flex-1 w-full h-full">
                    <div className="flex flex-col justify-end flex-1 md:justify-center">
                      <label
                        htmlFor="name"
                        className="text-xs leading-tight text-gray-600 "
                      >
                        Name
                      </label>
                      <Field
                        className={`w-full px-5 py-3 my-2 ${
                          errors.name && touched.name ? "border" : ""
                        } border-red-700 rounded-xl bg-gray-50 hover:bg-gray-100`}
                        type="text"
                        name="name"
                        placeholder="Max Mustermann"
                      />
                      <ErrorMessage
                        className="mb-4 text-xs text-red-700"
                        name="name"
                        component="div"
                      />
                      <label
                        htmlFor="company"
                        className="text-xs leading-tight text-gray-600 "
                      >
                        Firma
                      </label>
                      <Field
                        className={`w-full px-5 py-3 my-2 ${
                          errors.company && touched.company ? "border" : ""
                        } border-red-700 rounded-xl bg-gray-50 hover:bg-gray-100`}
                        type="text"
                        name="company"
                        placeholder="Hotel Krone"
                      />
                      <ErrorMessage
                        className="mb-4 text-xs text-red-700"
                        name="company"
                        component="div"
                      />
                      <label
                        htmlFor="email"
                        className="text-xs leading-tight text-gray-600 "
                      >
                        E-Mail
                      </label>
                      <Field
                        className={`w-full px-5 py-3 my-2 ${
                          errors.email && touched.email ? "border" : ""
                        } border-red-700 rounded-xl bg-gray-50 hover:bg-gray-100`}
                        type="email"
                        name="email"
                        placeholder="muster@hotel.de"
                      />
                      <ErrorMessage
                        className="mb-4 text-xs text-red-700"
                        name="email"
                        component="div"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3 my-5 text-white bg-gray-500 rounded-xl"
                      disabled={isSubmitting}
                    >
                      Als Gast beitreten
                    </button>
                  </Form>
                )}
              </Formik>
            </div>

            <p className="text-xs text-center text-gray-400">
              Mit der Anmeldung bestätigen Sie unsere{" "}
              <Link href="/privacy" passHref>
                <a className="underline decoration-yellow-500 hover:decoration-yellow-500/40 focus:decoration-yellow-500/40 motion-safe:transition-all motion-safe:duration-200">
                  Datenschutzrichtlinien
                </a>
              </Link>
              .
            </p>
          </div>
        </div>
        <div
          className="relative flex-1 hidden md:block h-100"
          style={{ backgroundColor: "#F8F5ED" }}
        >
          <Image
            alt="BackgroundImage"
            layout="fill"
            src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/d32e3f70396087.5ba22dac2c486.gif"
          ></Image>
        </div>
      </div>
    </section>
  );
}
