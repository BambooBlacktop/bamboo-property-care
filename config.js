// ============================================================
// Supabase configuration for Bamboo Property Care
// ============================================================
// These are the live project credentials.
// SUPABASE_URL       -> Project URL
// SUPABASE_ANON_KEY  -> anon / public key (safe for a public website)
// ============================================================

const SUPABASE_URL = "https://lgmwhoryndpytnbmlpnm.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_3gO0yPueHtO-K4wFDTqzjw_tyDAN8Pf";

// ============================================================
// EmailJS configuration
// ============================================================
// Used to send an instant email notification whenever a new
// quote request is submitted, so it doesn't require manually
// checking Supabase.
// ============================================================

const EMAILJS_PUBLIC_KEY = "7smDmCwl0zoGdKabM";
const EMAILJS_SERVICE_ID = "service_f21xr8q";
const EMAILJS_TEMPLATE_ID = "template_kyxmbes";

// Second EmailJS template — sends an acknowledgment TO the customer
// (separate from EMAILJS_TEMPLATE_ID, which notifies the business owner)
const EMAILJS_CUSTOMER_TEMPLATE_ID = "template_e3je9nz";
