import React from "react";
import { Redirect } from "@docusaurus/router";
import useBaseUrl from "@docusaurus/useBaseUrl";

/** 兼容旧链接 /.../RDK，重定向到文档首页（由 model_zoo_intro 的 slug: / 提供） */
export default function RDKRedirect() {
  return <Redirect to={useBaseUrl("/")} />;
}
