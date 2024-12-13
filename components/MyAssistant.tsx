"use client";

import React from "react";
import MyRuntimeProvider from "../app/MyRuntimeProvider";
import { Thread } from "@assistant-ui/react";
import { useEdgeRuntime } from "@assistant-ui/react";

const MyAssistant = () => (
  <MyRuntimeProvider>
    {(runtime: ReturnType<typeof useEdgeRuntime>) => <Thread runtime={runtime} />}
  </MyRuntimeProvider>
);

export default MyAssistant;
