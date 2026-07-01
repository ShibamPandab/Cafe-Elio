import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Reveal } from "../components/ui/Reveal";
import { Button } from "../components/ui/Button";

interface FormState {
  name: string;
  phone: string;
  email: string;
  date: string;
  time: string;
  partySize: number;
  occasion: string;
  notes: string;
}

const initialState: FormState = {
  name: "",
  phone: "",
  email: "",
  date: "",
  time: "",
  partySize: 2,
  occasion: "",
  notes: "",
};

export function Reservation() {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [confirmed, setConfirmed] = useState(false);

  const today = new Date().toISOString().split("T")[0];

  function validate(): boolean {
    const next: Partial<Record<keyof FormState, string>> = {};
    if (!form.name.trim()) next.name = "Please tell us who's booking.";
    if (!/^[0-9+\-\s]{7,15}$/.test(form.phone.trim())) next.phone = "Enter a valid phone number.";
    if (!form.date) next.date = "Pick a date.";
    if (form.date && form.date < today) next.date = "Date can't be in the past.";
    if (!form.time) next.time = "Pick a time.";
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (validate()) setConfirmed(true);
  }

  if (form.partySize >= 12) {
    return (
      <section className="container-page flex min-h-[70vh] flex-col items-center justify-center px-6 pt-32 text-center md:px-10">
        <p className="eyebrow mb-5">Large Group</p>
        <h1 className="max-w-lg text-4xl md:text-5xl text-balance">
          For parties of 12 or more, let's talk directly.
        </h1>
        <p className="mt-6 max-w-sm font-light text-dark/60">
          Group logistics are easier over a real conversation. Give us a call and we'll set
          everything up.
        </p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Button href="tel:+910000000000">Call Us</Button>
          <Button variant="outline" onClick={() => setForm((f) => ({ ...f, partySize: 2 }))}>
            Back to Form
          </Button>
        </div>
      </section>
    );
  }

  return (
    <>
      <section className="plate-dark grain-overlay pt-40 pb-20 md:pt-52 md:pb-24">
        <div className="container-page px-6 md:px-10">
          <Reveal>
            <p className="eyebrow-light mb-5">Reservation</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="text-5xl md:text-7xl text-bg">Save Your Table.</h1>
          </Reveal>
        </div>
      </section>

      <section className="container-page px-6 py-20 md:px-10 md:py-28">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-[1fr_320px]">
          <div>
            {confirmed ? (
              <ConfirmationState form={form} onReset={() => { setConfirmed(false); setForm(initialState); }} />
            ) : (
              <form noValidate onSubmit={onSubmit} className="max-w-xl space-y-7">
                <Field label="Full Name" htmlFor="name" error={errors.name}>
                  <input
                    id="name"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="focus-ring w-full border hairline bg-transparent px-5 py-4"
                  />
                </Field>

                <Field label="Phone Number" htmlFor="phone" error={errors.phone}>
                  <input
                    id="phone"
                    type="tel"
                    required
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="focus-ring w-full border hairline bg-transparent px-5 py-4"
                  />
                </Field>

                <Field label="Email (optional)" htmlFor="email">
                  <input
                    id="email"
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="focus-ring w-full border hairline bg-transparent px-5 py-4"
                  />
                </Field>

                <div className="grid grid-cols-1 gap-7 sm:grid-cols-2">
                  <Field label="Date" htmlFor="date" error={errors.date}>
                    <input
                      id="date"
                      type="date"
                      required
                      min={today}
                      value={form.date}
                      onChange={(e) => setForm({ ...form, date: e.target.value })}
                      className="focus-ring w-full border hairline bg-transparent px-5 py-4"
                    />
                  </Field>
                  <Field label="Time" htmlFor="time" error={errors.time}>
                    <input
                      id="time"
                      type="time"
                      required
                      value={form.time}
                      onChange={(e) => setForm({ ...form, time: e.target.value })}
                      className="focus-ring w-full border hairline bg-transparent px-5 py-4"
                    />
                  </Field>
                </div>

                <Field label="Party Size" htmlFor="party-size">
                  <div className="flex items-center gap-5">
                    <button
                      type="button"
                      aria-label="Decrease party size"
                      onClick={() => setForm((f) => ({ ...f, partySize: Math.max(1, f.partySize - 1) }))}
                      className="focus-ring h-11 w-11 border hairline text-lg"
                    >
                      −
                    </button>
                    <span id="party-size" className="w-10 text-center text-xl">
                      {form.partySize}
                    </span>
                    <button
                      type="button"
                      aria-label="Increase party size"
                      onClick={() => setForm((f) => ({ ...f, partySize: Math.min(12, f.partySize + 1) }))}
                      className="focus-ring h-11 w-11 border hairline text-lg"
                    >
                      +
                    </button>
                    <span className="text-sm font-light text-dark/50">12+ routes to a call</span>
                  </div>
                </Field>

                <Field label="Occasion (optional)" htmlFor="occasion">
                  <select
                    id="occasion"
                    value={form.occasion}
                    onChange={(e) => setForm({ ...form, occasion: e.target.value })}
                    className="focus-ring w-full border hairline bg-transparent px-5 py-4"
                  >
                    <option value="">Select one</option>
                    <option>Birthday</option>
                    <option>Date</option>
                    <option>Friends</option>
                    <option>Work</option>
                    <option>Other</option>
                  </select>
                </Field>

                <Field label="Special Requests (optional)" htmlFor="notes">
                  <textarea
                    id="notes"
                    rows={3}
                    value={form.notes}
                    onChange={(e) => setForm({ ...form, notes: e.target.value })}
                    placeholder="Near the pool table, quiet corner, etc."
                    className="focus-ring w-full border hairline bg-transparent px-5 py-4"
                  />
                </Field>

                <div className="flex flex-col gap-4 pt-2 sm:flex-row">
                  <Button type="submit">Confirm Reservation</Button>
                  <Button href="tel:+910000000000" variant="outline">
                    Call Instead
                  </Button>
                </div>
              </form>
            )}
          </div>

          <aside className="space-y-8">
            <div>
              <p className="eyebrow mb-4">What to Expect</p>
              <p className="font-light text-dark/60 leading-relaxed">
                We'll text or call to confirm within a couple of hours. Reservations are
                recommended for evenings and groups of 6 or more.
              </p>
            </div>
            <div>
              <p className="eyebrow mb-4">Prefer to Talk?</p>
              <p className="font-light text-dark/60 leading-relaxed">
                Call or WhatsApp us directly for same-day changes or large groups.
              </p>
              <div className="mt-4 flex flex-col gap-3">
                <Button href="tel:+910000000000" variant="ghost">
                  +91 00000 00000
                </Button>
                <Button href="https://wa.me/910000000000" variant="ghost">
                  WhatsApp Us
                </Button>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}

function Field({
  label,
  htmlFor,
  error,
  children,
}: {
  label: string;
  htmlFor: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={htmlFor} className="mb-2 block text-sm tracking-[0.03em] text-dark/70">
        {label}
      </label>
      {children}
      {error && (
        <p aria-live="polite" className="mt-2 text-sm text-primary">
          {error}
        </p>
      )}
    </div>
  );
}

function ConfirmationState({ form, onReset }: { form: FormState; onReset: () => void }) {
  return (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="max-w-xl">
      <motion.span
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 14 }}
        className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-2xl text-bg"
        aria-hidden="true"
      >
        ✓
      </motion.span>
      <h2 className="text-4xl">You're All Set, {form.name.split(" ")[0] || "there"}.</h2>
      <p className="mt-5 font-light text-dark/70 leading-relaxed">
        {form.date} at {form.time}, for {form.partySize} {form.partySize === 1 ? "guest" : "guests"}.
        We'll text or call to confirm within a couple of hours.
      </p>
      <div className="mt-9 flex flex-wrap gap-4">
        <Button href="https://maps.google.com" variant="outline">
          Get Directions
        </Button>
        <Button to="/menu" variant="outline">
          Explore the Menu
        </Button>
        <Button variant="ghost" onClick={onReset}>
          Make Another Reservation
        </Button>
      </div>
    </motion.div>
  );
}
