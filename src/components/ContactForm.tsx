import { useFormik } from 'formik';
import { t } from 'i18next';
import toast, { Toaster } from 'react-hot-toast';
import { object, string } from 'yup';

import type { ContactMeForm } from '../models/forms/contact-me.model';
import { createForm } from '../services/contact-form/contact-form.service';

const DEFAULT_FORM: ContactMeForm = {
  full_name: '',
  email: '',
  message: '',
};

const validationSchema = object({
  full_name: string()
    .max(60, t('contact.hint.fullname')!)
    .required(t('contact.errors.required.fullname')!),
  email: string()
    .email(t('contact.errors.valid.email')!)
    .required(t('contact.errors.required.email')!),
  message: string()
    .max(1000, t('contact.hint.message')!)
    .required(t('contact.errors.required.message')!),
});

export default function ContactForm() {
  const formik = useFormik({
    initialValues: { ...DEFAULT_FORM },
    validationSchema,
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      try {
        setSubmitting(true);

        const res = createForm({ ...values });
        toast.promise(
          res,
          {
            loading: t('response.sending'),
            success: t((await res).i18n),
            error: t((await res).i18n),
          },
          {
            duration: 4000,
            position: 'top-center',
          }
        );

        res.then((res) => {
          if (res.error) {
            return;
          }

          setSubmitting(false);
          // TODO feedback
          resetForm();
        });
      } catch (error) {
        console.log(error);
      }
    },
  });

  return (
    <form
      className="mt-8 w-full space-y-6 text-start"
      onSubmit={formik.handleSubmit}
      method="post"
    >
      <Toaster />
      <div className="relative">
        <div className="label-container">
          <label htmlFor="full_name" className="input-label">
            {`${t('contact.label.fullname')} *`}
          </label>
        </div>
        <input
          type="text"
          id="full_name"
          name="full_name"
          className={`app-text-input ${
            formik.errors.full_name ? '' : 'is-valid'
          }`}
          placeholder={t('contact.placeholder.fullname')!}
          onChange={formik.handleChange}
          value={formik.values.full_name}
        />
        <small className="text-red-400">{formik.errors.full_name}</small>
      </div>

      <div className="relative">
        <div className="label-container">
          <label htmlFor="email" className="input-label">
            {`${t('contact.label.email')} *`}
          </label>
        </div>
        <input
          type="text"
          id="email"
          name="email"
          className={`app-text-input ${
            formik.values.email == ''
              ? ''
              : formik.errors.email
              ? 'invalid'
              : 'is-valid'
          }`}
          placeholder={t('contact.placeholder.email')!}
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        <small className="text-red-400">{formik.errors.email}</small>
      </div>

      <div className="relative">
        <div className="label-container">
          <label htmlFor="message" className="input-label">
            {`${t('contact.label.message')} *`}
          </label>
        </div>
        <textarea
          id="message"
          name="message"
          className={`app-text-input ${
            formik.values.message == ''
              ? ''
              : formik.errors.message
              ? 'invalid'
              : 'is-valid'
          }`}
          placeholder={t('contact.placeholder.message')!}
          onChange={formik.handleChange}
          value={formik.values.message}
        />
        <small className="text-red-400">{formik.errors.message}</small>
      </div>
      <button
        className="view-more w-full text-2xl text-white lg:text-2xl"
        type="submit"
        disabled={!(formik.isValid && formik.dirty) || formik.isSubmitting}
      >
        {t('contact.buttons.submit') as any}
      </button>
    </form>
  );
}
