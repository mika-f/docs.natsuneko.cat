import type { Article } from "contentlayer2/generated";
import { Sidebar } from "../features/Sidebar";
import { HeaderSidebar } from "../features/Sidebar/header";
import { Markdown } from "../markdown";
import { Heading1 } from "../markdown/Headings";
import { Lead } from "../markdown/Lead";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "../ui/breadcrumb";
import { breadcrumb } from "@/services/docs";
import React from "react";

type Props = {
  document: Article;
  lang: string;
  rest: string[];
};

export const ArticleLayout = ({ document, lang, rest }: Props) => {
  const breadcrumbs = breadcrumb(document.path, lang);

  return (
    <>
      <HeaderSidebar document={document} lang={lang} rest={rest} />
      <div className="flex gap-x-8 h-full">
        <Sidebar document={document} lang={lang} rest={rest} />
        <div className="pt-10 pb-20 mx-4 lg:mx-0 w-full overflow-hidden">
          <div className="mb-4">
            <Breadcrumb>
              <BreadcrumbList>
                {breadcrumbs.map((doc, index) => {
                  return (
                    <React.Fragment key={doc._id}>
                      <BreadcrumbItem>
                        <BreadcrumbLink href={`/${lang}/${doc.path}`}>
                          {doc.title}
                        </BreadcrumbLink>
                      </BreadcrumbItem>
                      {index < breadcrumbs.length - 1 && (
                        <BreadcrumbSeparator />
                      )}
                    </React.Fragment>
                  );
                })}
              </BreadcrumbList>
            </Breadcrumb>
          </div>

          <div className="mt-2">
            <Heading1>{document.title}</Heading1>
          </div>
          {document.description && (
            <Lead className="pt-2 pb-4">{document.description}</Lead>
          )}
          <div>
            <Markdown markdown={document.body.code} />
          </div>
        </div>
      </div>
    </>
  );
};
