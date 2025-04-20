import { observable, Observable } from "@legendapp/state";
import { configureSynced, synced } from "@legendapp/state/sync";
import { observer, use$, useObservable } from "@legendapp/state/react";
import { $React } from "@legendapp/state/react-web";
import { $TextInput } from "@legendapp/state/react-native";
import { observablePersistAsyncStorage } from "@legendapp/state/persist-plugins/async-storage";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { syncedSupabase } from "@legendapp/state/sync-plugins/supabase";
import { generateId, supabase } from "./supaLegend";

interface Allocation {
  id: string | number;
  name: string;
  CAP: string;
  TAP: string;
}

interface Store {
  allocations: Allocation[];
  total: number;
  addAllocation: (arg: Allocation) => void;
  updateAllocation?: (arg: Allocation) => void;
}

interface AllocationItemProps {
  item$: Observable<Allocation>;
}

// Setup a configured persist options
const ConfigureLegendState = configureSynced(syncedSupabase, {
  persist: {
    plugin: observablePersistAsyncStorage({
      AsyncStorage,
    }),
  },
  generateId,
  supabase,
  changesSince: "last-sync",
  fieldCreatedAt: "created_at",
  fieldUpdatedAt: "updated_at",
  // Optionally enable soft deletes
  fieldDeleted: "deleted",
});

export const allocations$ = observable(
  ConfigureLegendState({
    supabase,
    collection: "allocations",
    select: (from) =>
      from.select("id,counter,name,cap,tap,created_at,updated_at,deleted"),
    actions: ["read", "create", "update", "delete"],
    realtime: true,
    persist: {
      name: "allocations",
      retrySync: true, // Persist pending changes and retry
    },
    retry: {
      infinite: true, // Retry changes with exponential backoff
    },
  })
);



export function addAllocation(name:string,cap:string,tap:string) {
  const id = generateId()
 // Add keyed by id to the todos$ observable to trigger a create in Supabase
  allocations$[id].assign({
    id,
    name,
    cap,
    tap
  })
}
