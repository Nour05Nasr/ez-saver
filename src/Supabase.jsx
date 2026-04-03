import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://nqumhebwvxinlyzoiwah.supabase.co';
const supabaseAnonKey = 'sb_publishable_pl089wCfUqc985pI_R_KEA_S_EoSJLs';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
