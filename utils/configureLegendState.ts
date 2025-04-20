import { observable, Observable } from "@legendapp/state";
import { configureSynced, synced } from "@legendapp/state/sync";
import { observer, use$, useObservable } from "@legendapp/state/react";
import { $React } from "@legendapp/state/react-web";
import { $TextInput } from "@legendapp/state/react-native";
import { observablePersistAsyncStorage } from "@legendapp/state/persist-plugins/async-storage";
import AsyncStorage from "@react-native-async-storage/async-storage";
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
const ConfigureLegendState = configureSynced(synced, {
  persist: {
    plugin: observablePersistAsyncStorage({
      AsyncStorage,
    }),
  },
});

const store$ = observable<Store>({
  allocations: ConfigureLegendState({
    initial: [],
    persist: {
      name: "user-allocations",
    },
  }),
  // Computeds
  total: (): number => {
    return store$.allocations.length;
  },
  addAllocation: ({ id = "", CAP = "", TAP = "", name = "" }: Allocation) => {
    const allocation: Allocation = {
      id: id,
      name: name,
      CAP: CAP,
      TAP: TAP,
    };
    const itemIndex = store$.allocations
      .get()
      .findIndex((item) => item.name == name);
    if (itemIndex !== -1) {
      store$.allocations[itemIndex].set(() => allocation);
    } else {
      store$.allocations.set((prev) => [...prev, allocation]);
    }
  },
});
export default store$;
