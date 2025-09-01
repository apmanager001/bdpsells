"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import AddHome from "./comp/addHome";
import HomeDashboard from "./comp/homeDashboard";

export default function DashboardPage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("dashboard");

  return (
    <div className="min-h-screen bg-gray-50 mt-10">
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          {/* Navigation Tabs */}
          <div role='tablist' className="tabs tabs-lift mb-6">
            <button
              role='tab'
              className={`tab ${activeTab === "dashboard" ? "tab-active" : ""}`}
              onClick={() => setActiveTab("dashboard")}
            >
              Dashboard
            </button>
            <button
              role='tab'
              className={`tab ${
                activeTab === "addProperty" ? "tab-active" : ""
              }`}
              onClick={() => setActiveTab("addProperty")}
            >
              Add Property
            </button>
          </div>

          {/* Dashboard Content */}
          {activeTab === "dashboard" && <HomeDashboard />}

          {/* Add Property Content */}
          {activeTab === "addProperty" && <AddHome />}
        </div>
      </div>
    </div>
  );
}
