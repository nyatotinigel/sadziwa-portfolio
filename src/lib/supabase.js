import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://ioommxavltgannbykveu.supabase.co';
const supabaseAnonKey = 'sb_publishable_loR4E7HTyuEIFhgEoFOpJw_abEoGabe';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
