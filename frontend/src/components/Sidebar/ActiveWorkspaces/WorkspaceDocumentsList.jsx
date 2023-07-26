import React from 'react';
import { FileText } from 'react-feather';

function WorkspaceDocumentsList({ documents }) {
  return (
    <ul className="list-none ml-9 mt-2">
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
			  // really ugly, but too hard to go change the database file name
			  // TODO: how to rename docs?
            if (docUrl && docUrl.includes("greenguides")) {
              docUrl = docUrl.replace("greenguides", "FTC Green Guides");
            }
            return (
              <li key={doc.docpath} className="text-sm text-slate-600 flex items-start">
                <FileText size={16} className="mr-2 flex-shrink-0" />
                <div className="">{docUrl}</div>
              </li>
            )
          })
      }
    </ul>
  );
}

export default WorkspaceDocumentsList;

