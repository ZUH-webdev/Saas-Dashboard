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
        className="absolute inset-0 bg-[#020617]/80 backdrop-blur-xl"
        onClick={onClose}
      />

      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        className="relative w-full max-w-xl bg-[#0a0f1d] border border-white/5 rounded-[2.5rem] shadow-[0_0_80px_-20px_rgba(79,70,229,0.3)] overflow-hidden"
      >
        {/* Top Gradient Bar */}
        <div className="h-1.5 w-full bg-gradient-to-r from-indigo-500 to-purple-500" />
        
        <button 
          onClick={onClose}
          className="absolute top-8 right-8 text-slate-500 hover:text-white transition-all bg-white/5 p-2 rounded-full border border-white/10"
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
                <div className="w-20 h-20 bg-emerald-500/10 border border-emerald-500/20 rounded-3xl flex items-center justify-center text-emerald-500 animate-bounce">
                  <CheckCircle2 size={40} strokeWidth={1.5} />
                </div>
                <div className="space-y-2">
                  <h4 className="text-2xl font-black text-white tracking-tighter">SIGNAL RECEIVED</h4>
                  <p className="text-slate-400 text-sm max-w-[300px]">Our systems have logged your request. An engineer will be in touch shortly.</p>
                </div>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="space-y-10"
              >
                <div className="space-y-2">
                  <span className="text-[10px] font-black text-indigo-400 uppercase tracking-[0.3em]">Access Interface</span>
                  <h3 className="text-4xl font-black text-white tracking-tighter">LET'S CONNECT</h3>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Grid layout for inputs */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest ml-1">Identity</label>
                      <div className="relative group">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-600 group-focus-within:text-indigo-500 transition-colors" size={16} />
                        <input
                          required
                          type="text"
                          placeholder="Full Name"
                          className="w-full h-14 pl-12 pr-4 rounded-2xl bg-white/[0.02] border border-white/5 text-white text-sm focus:border-indigo-500/50 focus:bg-white/[0.04] transition-all outline-none"
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                        />
                      </div>
                    </div>

                    <div className="space-y-3">
                      <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest ml-1">Secure Email</label>
                      <div className="relative group">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-600 group-focus-within:text-indigo-500 transition-colors" size={16} />
                        <input
                          required
                          type="email"
                          placeholder="eng@company.com"
                          className="w-full h-14 pl-12 pr-4 rounded-2xl bg-white/[0.02] border border-white/5 text-white text-sm focus:border-indigo-500/50 focus:bg-white/[0.04] transition-all outline-none"
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest ml-1">Mission Details</label>
                    <div className="relative group">
                      <MessageSquare className="absolute left-4 top-5 text-slate-600 group-focus-within:text-indigo-500 transition-colors" size={16} />
                      <textarea
                        required
                        rows={4}
                        placeholder="Tell us about your project infrastructure..."
                        className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white/[0.02] border border-white/5 text-white text-sm focus:border-indigo-500/50 focus:bg-white/[0.04] transition-all outline-none resize-none"
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="w-full h-14 rounded-full bg-white text-black font-black text-xs uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-3 hover:bg-indigo-50 active:scale-[0.98] disabled:opacity-50"
                  >
                    {status === "submitting" ? (
                      <div className="w-5 h-5 border-2 border-black/10 border-t-black rounded-full animate-spin" />
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