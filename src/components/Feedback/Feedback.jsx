import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import foto from "../../assets/images/pic40.webp";
import styles from "./Feedback.module.css";

const Feedback = () => {
  const { t } = useTranslation("feedback");

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // Значения: "idle", "loading", "success", "error"

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("https://your-crm-api.com/feedback", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Ошибка отправки данных");
      }

      setStatus("success");
      setFormData({ firstName: "", lastName: "", email: "", message: "" });
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  return (
    <section className={styles.container}>
      <div className={styles.formWrapper}>
        <h2 className={styles.title}>
          {t("title1")}{" "}
          <span style={{ fontFamily: "Inter", fontStyle: "italic" }}>
            {t("title2")}
          </span>
        </h2>
        {status === "success" && <p className={styles.success}>{t("send")}</p>}
        {status === "error" && <p className={styles.error}>{t("error")}</p>}

        <form onSubmit={handleSubmit}>
          <div className={styles.row}>
            <div className={styles.formGroup}>
              <input
                type="text"
                id="firstName"
                name="firstName"
                placeholder={t("firstName")}
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </div>
            <div className={styles.formGroup}>
              <input
                type="text"
                id="lastName"
                name="lastName"
                placeholder={t("lastName")}
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className={styles.formGroup}>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="E-MAIL"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <textarea
              id="message"
              name="message"
              placeholder={t("sms")}
              value={formData.message}
              onChange={handleChange}
              rows={5}
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className={styles.submitButton}
            disabled={status === "loading"}
          >
            {status === "loading" ? t("sending") : t("button")}
          </button>
        </form>
      </div>
      <div className={styles.imageWrapper}>
        <img src={foto} alt="beauty" className={styles.image} />
      </div>
    </section>
  );
};

export default Feedback;
