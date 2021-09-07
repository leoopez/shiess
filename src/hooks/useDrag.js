/** @format */

import { useEffect } from "react";

export default function useDragPiece(draggableID, ondropID) {
  const handleStartDrag = e => {
    if (!e.target.closest(".piece")) return;
    e.dataTransfer.setData("text/plain", e.target.classList);
    e.dataTransfer.effectAllowed = "move";
  };

  const handleDrop = e => {
    e.preventDefault();
    e.target.classList = e.dataTransfer.getData("text");
  };

  const handleDragOver = e => {
    e.preventDefault();

    e.dataTransfer.dropEffect = "move";
  };

  useEffect(() => {
    document.addEventListener("dragover", handleDragOver, { capture: true });
    document.addEventListener("dragstart", handleStartDrag, { capture: true });
    document.addEventListener("drop", handleDrop, { capture: true });

    return () => {
      document.removeEventListener("dragover", handleDragOver, {
        capture: true,
      });
      document.removeEventListener("dragstart", handleStartDrag, {
        capture: true,
      });
      document.removeEventListener("drop", handleDrop, { capture: true });
    };
  });
}