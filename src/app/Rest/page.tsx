"use client";
import { useFunc } from "../hooks/useFunc";

export default function MPage() {
  const { flexName } = useFunc();
  return (
    <div className="mx-20 mt-20 inline-flex">
      <div className={`${flexName}`}>Page</div>
    </div>
  );
}
