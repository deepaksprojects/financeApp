import 'react-native-get-random-values';
import { Database } from "@/database.types";
import { createClient } from "@supabase/supabase-js";
import { v4 as uuidv4 } from "uuid";

const supabase = createClient<Database>(
  process.env.EXPO_PUBLIC_SUPABASE_URL as string,
  process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY as string
);

const generateId = () => uuidv4();


export { generateId, supabase };
