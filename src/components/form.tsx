"use client";

import { useState, type FormEvent, type ChangeEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { toast } from "sonner";
import confetti from "canvas-confetti";

interface FormProps {
  onSuccessChange?: (success: boolean) => void;
}

export default function WaitlistForm({ onSuccessChange }: FormProps) {
  const [step, setStep] = useState<number>(1);
  const [formData, setFormData] = useState({
    email: "",
    name: "",
  });
  const [loading, setLoading] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const isValidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (step === 1) {
      if (!formData.email || !isValidEmail(formData.email)) {
        toast.error("Merci d’entrer une adresse email valide");
        return;
      }

      setStep(2);
      return;
    }

    try {
      setLoading(true);

      const promise = new Promise((resolve, reject) => {
        const { name, email } = formData;

        // Sauvegarde directement dans Notion (email de bienvenue désactivé)
        fetch("/api/notion", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name, email }),
        })
          .then((notionResponse) => {
            if (!notionResponse.ok) {
              reject("Save failed");
            } else {
              resolve({ name });
            }
          })
          .catch((error) => {
            reject(error);
          });
      });

      toast.promise(promise, {
        loading: "Inscription en cours... 🚀",
        success: (data) => {
          setFormData({ email: "", name: "" });
          setSuccess(true);
          onSuccessChange?.(true);
          setTimeout(() => {
            confetti({
              particleCount: 100,
              spread: 70,
              origin: { y: 0.6 },
              colors: [
                "#ff0000",
                "#00ff00",
                "#0000ff",
                "#ffff00",
                "#ff00ff",
                "#00ffff",
              ],
            });
          }, 100);
          return "Merci de rejoindre la liste d’attente 🎉";
        },
        error: (error) => {
          if (error === "Save failed") {
            return "Échec d'enregistrement de vos infos. Réessayez 😢.";
          }
          return "Une erreur est survenue. Réessayez 😢.";
        },
      });

      promise.finally(() => {
        setLoading(false);
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      setLoading(false);
      alert("Un problème est survenu. Veuillez réessayer.");
    }
  };

  const resetForm = () => {
    setStep(1);
    setFormData({ email: "", name: "" });
    setSuccess(false);
    onSuccessChange?.(false);
  };

  return (
    <div className="w-full relative">
      {success ? (
        <motion.div
          className="p-6 flex justify-center items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <button
            onClick={resetForm}
            className="bg-[#1E3A8A] text-white px-6 py-2 rounded-lg font-semibold hover:bg-opacity-90 transition-all"
            type="button"
          >
            Rejoindre avec un autre email
          </button>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="relative">
          <AnimatePresence mode="wait">
            {step === 1 ? (
              <motion.div
                key="email-step"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="flex relative"
              >
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  className="flex-grow bg-background border-2 border-border text-foreground px-5 py-3 pr-28 md:pr-24 rounded-lg focus:outline-2 transition-all duration-300 focus:outline-offset-4 focus:outline-[#1E3A8A]"
                  disabled={loading}
                  required
                />
                <button
                  type="submit"
                  className="absolute right-0 font-semibold top-0 bottom-0 bg-[#1E3A8A] flex justify-center items-center cursor-pointer text-white px-4 md:px-6 py-2 m-2 rounded-lg hover:bg-opacity-90 transition-all disabled:opacity-50 text-sm md:text-base"
                  disabled={loading}
                >
                  Continuer
                </button>
              </motion.div>
            ) : (
              <motion.div
                key="name-step"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="flex flex-col space-y-3"
              >
                <div className="flex flex-col md:flex-row md:items-center md:relative gap-3 md:gap-0">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Prénom (ou pseudo)"
                    className="flex-grow bg-background border-2 border-border text-foreground px-5 py-3 md:pr-44 rounded-lg focus:outline-2 transition-all duration-300 focus:outline-offset-4 focus:outline-[#1E3A8A]"
                    disabled={loading}
                    required
                  />
                  <button
                    type="submit"
                    className="w-full md:w-auto md:absolute md:right-0 md:top-0 md:bottom-0 font-semibold bg-[#1E3A8A] flex justify-center items-center cursor-pointer text-white px-4 md:px-6 py-3 md:py-2 md:m-2 rounded-lg hover:bg-opacity-90 transition-all disabled:opacity-50 text-sm md:text-base"
                    disabled={loading}
                  >
                    {loading ? (
                      <span className="flex items-center">
                        <svg
                          className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <title>Loading spinner</title>
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          />
                        </svg>
                        Inscription...
                      </span>
                    ) : (
                      <span>Rejoindre la liste d'attente</span>
                    )}
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </form>
      )}
    </div>
  );
}
