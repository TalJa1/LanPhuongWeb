"use client";
import { AppIcon } from "@components/app-icon";
import { AuthPage as AuthPageBase, ThemedTitleV2 } from "@refinedev/antd";
import type { AuthPageProps } from "@refinedev/core";
import { Button, Form, Input } from "antd";
import { useState } from "react";

export const AuthPage = (props: AuthPageProps) => {
  return (
    <AuthPageBase
      {...props}
      formProps={{
        initialValues: { email: "", password: "" },
      }}
      title={
        <ThemedTitleV2 collapsed={false} text="Lan Phuong" icon={<AppIcon />} />
      }
    />
  );
};
