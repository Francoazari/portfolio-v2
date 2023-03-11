import { useState } from "react";
import styles from "./ContactForm.module.scss";
import emailjs from "emailjs-com";
import HCaptcha from "@hcaptcha/react-hcaptcha";
import { useForm } from "react-hook-form";
import clsx from "clsx";

function ContactForm() {
    const [captchaToken, setCaptchaToken] = useState(false);
    const [captchaError, setCaptchaError] = useState(false);
    const siteKey = process.env.REACT_APP_HCAPTCHA_SITEKEY;
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    function sendEmail(data) {
        if (captchaToken) {
            captchaError && setCaptchaError(false);

            const templateParams = {
                name: data.name,
                email: data.email,
                phone: data.phone,
                message: data.message
            };

            emailjs
                .send(process.env.REACT_APP_EMAILJS_SERVICEID, process.env.REACT_APP_EMAILJS_TEMPLATEID, templateParams, process.env.REACT_APP_EMAILJS_USERID)
                .then(
                    (result) => {
                        console.log(result.text);
                    },
                    (error) => {
                        console.log(error.text);
                    }
                );
        } else {
            setCaptchaError(true);
            console.error("Captcha no validado");
        }
    }

    return (
        <form id="contact-form" onSubmit={handleSubmit(sendEmail)}>
            <input
                name="name"
                type="text"
                className={clsx({ [styles.error]: errors.name })}
                placeholder="Name"
                {...register("name", { required: { value: true, message: "This field is required" }, maxLength: { value: 50, message: "Name too long" } })}
            />
            {errors?.name && <span className={styles.error}>{errors?.name?.message}</span>}

            <input
                name="email"
                type="email"
                placeholder="Email"
                className={clsx({ [styles.error]: errors.email })}
                {...register("email", { required: { value: true, message: "This field is required" }, maxLength: { value: 100, message: "Email too long" } })}
            />
            {errors?.email && <span className={styles.error}>{errors?.email?.message}</span>}

            <input name="phone" placeholder="Phone number" {...register("phone")} />

            <textarea
                name="message"
                placeholder="Message"
                className={clsx({ [styles.error]: errors.message })}
                {...register("message", {
                    required: { value: true, message: "This field is required" },
                    maxLength: { value: 500, message: "Description too long" }
                })}
            ></textarea>
            {errors?.message && <span className={styles.error}>{errors?.message?.message}</span>}

            {siteKey && (
                <>
                    <HCaptcha sitekey={siteKey} onVerify={(token) => setCaptchaToken(token)} />
                    {captchaError && <span>{styles.error.message}</span>}
                </>
            )}

            <button type="submit" value="Send message">
                Send message
            </button>
        </form>
    );
}

export default ContactForm;
