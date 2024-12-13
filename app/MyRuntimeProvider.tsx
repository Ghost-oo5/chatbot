"use client";

import React, { ReactNode } from "react";
import { useEdgeRuntime } from "@assistant-ui/react";
import {
  CompositeAttachmentAdapter,
  SimpleImageAttachmentAdapter,
  SimpleTextAttachmentAdapter,
} from "@assistant-ui/react";

interface MyRuntimeProviderProps {
  children: (runtime: ReturnType<typeof useEdgeRuntime>) => ReactNode;
}

const MyRuntimeProvider: React.FC<MyRuntimeProviderProps> = ({ children }) => {
  const runtime = useEdgeRuntime({
    api: "/api/chat",
    adapters: {
      attachments: new CompositeAttachmentAdapter([
        new SimpleImageAttachmentAdapter(),
        new SimpleTextAttachmentAdapter(),
      ]),
    },
  });

  return <div className="h-full">{children(runtime)}</div>;
};

export default MyRuntimeProvider;
