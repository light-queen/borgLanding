import React, { useState, useEffect } from "react";
import { Book, Settings } from "react-feather";
import * as Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Workspace from "../../../models/workspace";
import ManageWorkspace, {
  useManageWorkspaceModal,
} from "../../Modals/MangeWorkspace";
import paths from "../../../utils/paths";
import { useParams } from "react-router-dom";
import { isDev } from '../../../utils/featureflag.js';
import WorkspaceItem from './WorkspaceItem';

export default function ActiveWorkspaces() {
  const { slug } = useParams();
  const [loading, setLoading] = useState(true);
  const [workspaces, setWorkspaces] = useState([]);
  const [selectedWs, setSelectedWs] = useState(null);
  const { showing, showModal, hideModal } = useManageWorkspaceModal();

  useEffect(() => {
    async function getWorkspaces() {
      const workspaces = await Workspace.all();
      setLoading(false);
      setWorkspaces(workspaces);
    }
    getWorkspaces();
  }, []);

  if (loading) {
    return (
      <>
        <Skeleton.default
          height={36}
          width="100%"
          count={3}
          baseColor="#292524"
          highlightColor="#4c4948"
          enableAnimation={true}
        />
      </>
    );
  }

  return (
    <>
	  {workspaces.map((workspace) => {
		  const isActive = workspace.slug === slug;
		  return (
			<WorkspaceItem
			  key={workspace.id}
			  workspace={workspace}
			  isActive={isActive}
			  isDev={isDev}
			  setSelectedWs={setSelectedWs}
			  showModal={showModal}
			/>
		  );
	  })}
      {showing && !!selectedWs && (
        <ManageWorkspace hideModal={hideModal} providedSlug={selectedWs.slug} />
      )}
    </>
  );
}
