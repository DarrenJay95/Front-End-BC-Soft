import { LoadingOverlay } from "@mantine/core";
import { useSyncExternalStore } from "react";
import { LoaderObserver } from "../../../Services/Observer/LoaderObserver";

function Loader() {
  const { isVisible } = useSyncExternalStore(
    LoaderObserver.onSubscribe('isVisible'),
    LoaderObserver.getState
  );
  return (
    <LoadingOverlay
      visible={isVisible}
      zIndex={1000}
      overlayProps={{ radius: "sm", blur: 2 }}
    />
  );
}

export default Loader;
