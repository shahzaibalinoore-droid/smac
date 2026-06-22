import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";

const getVisitorId = () => {
  let id = localStorage.getItem("visitor_id");
  if (!id) {
    if (typeof crypto !== "undefined" && typeof crypto.randomUUID === "function") {
      id = crypto.randomUUID();
    } else {
      // Fallback UUID generator for insecure contexts (HTTP on local network IP)
      id = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
        const r = (Math.random() * 16) | 0;
        const v = c === "x" ? r : (r & 0x3) | 0x8;
        return v.toString(16);
      });
    }
    localStorage.setItem("visitor_id", id);
  }
  return id;
};

export const useVisitorTracking = () => {
  const location = useLocation();
  const lastPath = useRef("");

  // Track page views
  useEffect(() => {
    if (location.pathname === lastPath.current) return;
    lastPath.current = location.pathname;

    supabase.from("page_views").insert({
      page_path: location.pathname,
      visitor_id: getVisitorId(),
      user_agent: navigator.userAgent,
      referrer: document.referrer || null,
    }).then(() => {});
  }, [location.pathname]);

  // Track clicks on interactive elements
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const el = target.closest("a, button, [data-track]");
      if (!el) return;

      supabase.from("click_events").insert({
        element_id: el.id || el.getAttribute("data-track") || null,
        element_text: (el.textContent || "").slice(0, 100),
        page_path: location.pathname,
        visitor_id: getVisitorId(),
      }).then(() => {});
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [location.pathname]);
};
