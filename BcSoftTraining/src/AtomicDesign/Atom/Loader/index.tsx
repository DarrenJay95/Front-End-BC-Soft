import { LoadingOverlay } from "@mantine/core";
import { useSyncExternalStore } from "react";
import { LoaderObserver } from "../../../Services/Observer/LoaderObserver";

function Loader() {
  const visible  = useSyncExternalStore(
    LoaderObserver.partialSubscribe('isVisible'),
    LoaderObserver.getSelectedState('isVisible')
  );
  return (
    <LoadingOverlay
      visible={visible}
      zIndex={1000}
      overlayProps={{ radius: "sm", blur: 2 }}
    />
  );
}

export default Loader;
