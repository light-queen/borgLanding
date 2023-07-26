import React from 'react';
import { Book, FileText } from 'react-feather';

function WorkspaceDocumentsList({ documents }) {
  return (
    <ul className="list-none ml-9">
      {documents && Array.isArray(documents) &&
        documents
          .filter((v, i, a) => {
            const metaV = v.metadata && JSON.parse(v.metadata);
            return a.findIndex(t => {
              const metaT = t.metadata && JSON.parse(t.metadata);
              return (metaT.url) === (metaV.url);
            }) === i
          })
          .map((doc) => {
            let docUrl;
            const docMeta = doc.metadata && JSON.parse(doc.metadata);
            if (docMeta) {
              docUrl = docMeta.url;
            }
            if (docUrl && docUrl.includes("file:///app/collector/hotdir/processed/")) {
              docUrl = docUrl.replace("file:///app/collector/hotdir/processed/", "");
            }
            return (
              <li key={doc.docpath} className="text-sm text-slate-600 flex items-center">
                <FileText size={16} className="mr-1" />
                <div className="truncate">{docUrl}</div>
              </li>
            )
          })
      }
    </ul>
  );
}

export default WorkspaceDocumentsList;
