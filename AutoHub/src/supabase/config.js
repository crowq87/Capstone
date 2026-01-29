
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://qjmtunpwooswditqkvki.supabase.co'
const supabaseKey = 'sb_publishable_oQGg3KG7vftFPHT7clH0WQ_xxAX9qSb'
export const supabase = createClient(supabaseUrl, supabaseKey)
