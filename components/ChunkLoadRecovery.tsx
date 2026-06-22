"use client";

import { useEffect } from "react";

const RELOAD_KEY = "next-chunk-reload";

function isChunkLoadError(message: string) {
  return (
    message.includes("ChunkLoadError") ||
    message.includes("Loading chunk") ||
    message.includes("Failed to fetch dynamically imported module")
  );
}

export function ChunkLoadRecovery() {
  useEffect(() => {
    const reloadOnce = () => {
      if (sessionStorage.getItem(RELOAD_KEY)) return;
      sessionStorage.setItem(RELOAD_KEY, "1");
      window.location.reload();
    };

    const onError = (event: ErrorEvent) => {
      if (isChunkLoadError(event.message)) reloadOnce();
    };

    const onRejection = (event: PromiseRejectionEvent) => {
      const message = event.reason instanceof Error ? event.reason.message : String(event.reason ?? "");
      if (isChunkLoadError(message)) reloadOnce();
    };

    window.addEventListener("error", onError);
    window.addEventListener("unhandledrejection", onRejection);
    return () => {
      window.removeEventListener("error", onError);
      window.removeEventListener("unhandledrejection", onRejection);
    };
  }, []);

  return null;
}
