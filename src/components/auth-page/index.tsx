"use client";
import { AppIcon } from "@components/app-icon";
import { AuthPage as AuthPageBase, ThemedTitleV2 } from "@refinedev/antd";
import type { AuthPageProps } from "@refinedev/core";

export const AuthPage = (props: AuthPageProps) => {
  const adminUser = {
    email: "phuong@gmail.com",
    pass: "123",
  };

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
