import { X, Send, CheckCircle2 } from "lucide-react";
import { useState, useEffect } from "react";

export default function ContactModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle, submitting, success

  // Handle Escape key to close
  useEffect(() => {
    const handleEsc = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("submitting");
    // Simulate API Call
    setTimeout(() => {
      setStatus("success");
      setTimeout(() => {
        setStatus("idle");
        setFormData({ name: "", email: "", message: "" });
        onClose();
      }, 2500);
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-slate-950/60 backdrop-blur-md transition-opacity animate-in fade-in duration-300"
        onClick={onClose}
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-lg bg-slate-900 border border-white/10 rounded-2xl shadow-2xl p-6 md:p-8 overflow-hidden animate-in zoom-in-95 duration-200">
        
        {/* Glow Effect inside Modal */}
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-indigo-500/10 blur-[60px] rounded-full pointer-events-none" />

        <button 
          onClick={onClose}
          className="absolute top-5 right-5 text-slate-500 hover:text-white transition-colors"
        >
          <X size={20} />
        </button>

        {status === "success" ? (
          <div className="py-10 flex flex-col items-center text-center space-y-4">
            <div className="w-16 h-16 bg-emerald-500/10 border border-emerald-500/20 rounded-full flex items-center justify-center text-emerald-500 shadow-lg shadow-emerald-500/10">
              <CheckCircle2 size={32} />
            </div>
            <h4 className="text-xl font-bold text-white tracking-tight">Sent Successfully!</h4>
            <p className="text-sm text-slate-400 max-w-[280px]">Our specialists will review your message and reach out within 24 hours.</p>
          </div>
        ) : (
          <>
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-white mb-2">Let's get started</h3>
              <p className="text-sm text-slate-400 font-medium">Transform your workflow with NexusAI.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-2">
                <label className="text-[11px] font-bold text-slate-400 uppercase tracking-[0.1em]">Full Name</label>
                <input
                  required
                  type="text"
                  placeholder="e.g. Usama Masood"
                  className="w-full h-12 px-4 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all outline-none placeholder:text-slate-600"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>

              <div className="space-y-2">
                <label className="text-[11px] font-bold text-slate-400 uppercase tracking-[0.1em]">Email</label>
                <input
                  required
                  type="email"
                  placeholder="name@company.com"
                  className="w-full h-12 px-4 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all outline-none placeholder:text-slate-600"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>

              <div className="space-y-2">
                <label className="text-[11px] font-bold text-slate-400 uppercase tracking-[0.1em]">Message</label>
                <textarea
                  required
                  rows={3}
                  placeholder="How can we help you?"
                  className="w-full p-4 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all outline-none resize-none placeholder:text-slate-600"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                />
              </div>

              <button
                type="submit"
                disabled={status === "submitting"}
                className="w-full h-12 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-sm transition-all flex items-center justify-center gap-2 shadow-lg shadow-indigo-600/20 active:scale-[0.98] disabled:opacity-70"
              >
                {status === "submitting" ? (
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <>Send Message <Send size={16} /></>
                )}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}