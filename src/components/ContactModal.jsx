import { X, Send, CheckCircle2, User, Mail, MessageSquare, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ContactModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({ name: "", email: "", message: "", interest: "SaaS Scaling" });
  const [status, setStatus] = useState("idle");

  useEffect(() => {
    const handleEsc = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("submitting");
    setTimeout(() => {
      setStatus("success");
      setTimeout(() => {
        setStatus("idle");
        setFormData({ name: "", email: "", message: "", interest: "SaaS Scaling" });
        onClose();
      }, 3000);
    }, 1800);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
      <motion.div
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="absolute inset-0 bg-slate-900/30 backdrop-blur-sm"
        onClick={onClose}
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        className="relative w-full max-w-xl overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_30px_80px_-40px_rgba(15,23,42,0.4)]"
      >
        <div className="h-1.5 w-full bg-gradient-to-r from-[#5B5FFF] via-[#7C4DFF] to-[#3B82F6]" />

        <button
          onClick={onClose}
          className="absolute right-6 top-6 rounded-full border border-slate-200 bg-white p-2 text-slate-500 transition-all hover:text-slate-900"
        >
          <X size={16} />
        </button>

        <div className="p-8 md:p-12">
          <AnimatePresence mode="wait">
            {status === "success" ? (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="py-12 flex flex-col items-center text-center space-y-6"
              >
                <div className="flex h-20 w-20 items-center justify-center rounded-3xl border border-emerald-200 bg-emerald-50 text-emerald-600">
                  <CheckCircle2 size={40} strokeWidth={1.5} />
                </div>
                <div className="space-y-2">
                  <h4 className="text-2xl font-semibold tracking-tight text-slate-900">Signal received</h4>
                  <p className="max-w-[300px] text-sm text-slate-600">Our team has logged your request and will contact you shortly.</p>
                </div>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="space-y-10"
              >
                <div className="space-y-2">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-slate-500">Get Started</span>
                  <h3 className="text-4xl font-semibold tracking-tight text-slate-900">Let's connect</h3>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <label className="ml-1 text-[10px] font-medium uppercase tracking-[0.16em] text-slate-500">Identity</label>
                      <div className="relative group">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 transition-colors group-focus-within:text-indigo-600" size={16} />
                        <input
                          required
                          type="text"
                          placeholder="Full Name"
                          className="h-14 w-full rounded-xl border border-slate-200 bg-slate-50 pl-12 pr-4 text-sm text-slate-900 outline-none transition-all focus:border-indigo-300 focus:bg-white"
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                        />
                      </div>
                    </div>

                    <div className="space-y-3">
                      <label className="ml-1 text-[10px] font-medium uppercase tracking-[0.16em] text-slate-500">Secure Email</label>
                      <div className="relative group">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 transition-colors group-focus-within:text-indigo-600" size={16} />
                        <input
                          required
                          type="email"
                          placeholder="eng@company.com"
                          className="h-14 w-full rounded-xl border border-slate-200 bg-slate-50 pl-12 pr-4 text-sm text-slate-900 outline-none transition-all focus:border-indigo-300 focus:bg-white"
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label className="ml-1 text-[10px] font-medium uppercase tracking-[0.16em] text-slate-500">Mission Details</label>
                    <div className="relative group">
                      <MessageSquare className="absolute left-4 top-5 text-slate-400 transition-colors group-focus-within:text-indigo-600" size={16} />
                      <textarea
                        required
                        rows={4}
                        placeholder="Tell us about your project infrastructure..."
                        className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50 py-4 pl-12 pr-4 text-sm text-slate-900 outline-none transition-all focus:border-indigo-300 focus:bg-white"
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="flex h-14 w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-[#5B5FFF] via-[#7C4DFF] to-[#3B82F6] text-xs font-semibold uppercase tracking-[0.2em] text-white transition-all hover:brightness-105 disabled:opacity-50"
                  >
                    {status === "submitting" ? (
                      <div className="h-5 w-5 animate-spin rounded-full border-2 border-white/25 border-t-white" />
                    ) : (
                      <>Initiate Contact <ArrowRight size={14} /></>
                    )}
                  </button>
                </form>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
}