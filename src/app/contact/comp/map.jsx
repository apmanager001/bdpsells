"use client";
import React, { useState, useEffect } from "react";
import {
  Map,
  NavigationControl,
  Marker,
  GeolocateControl,
} from "@vis.gl/react-maplibre";
import { FaCompass } from "react-icons/fa6";
import { BiSolidNavigation } from "react-icons/bi";

const ContactMap = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Simulate map loading
    const timer = setTimeout(() => setIsLoaded(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const handleMapLoad = (event) => {
    setIsLoaded(true);
  };

  return (
    <section className="relative " id="map">
      {/* Background decoration */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      ></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Find Our Office
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto"></p>
        </div>

        {/* Map Container */}
        <div className="relative">
          {/* Map */}
          <div className="relative h-[500px] md:h-[600px] rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
            {!isLoaded && (
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-green-100 flex items-center justify-center z-10">
                <div className="text-center">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
                  <p className="text-gray-600 font-medium">
                    Loading Office Location...
                  </p>
                </div>
              </div>
            )}

            <Map
              initialViewState={{
                longitude: -83.20726565792032,
                latitude: 42.258708934630704,
                zoom: 15,
                pitch: 0,
                bearing: 0,
              }}
              mapStyle="https://tiles.openfreemap.org/styles/positron"
              attributionControl={false}
              style={{ width: "100%", height: "100%" }}
              onLoad={handleMapLoad}
            >
              {/* Navigation Controls */}
              <NavigationControl
                position="top-right"
                showCompass={true}
                showZoom={true}
                visualizePitch={true}
              />

              {/* Geolocate Control */}
              <GeolocateControl
                position="top-right"
                trackUserLocation={false}
                showUserHeading={true}
                showUserLocation={true}
              />
              <Marker
                longitude={-83.20726565792032}
                latitude={42.258708934630704}
                anchor="bottom"
              >
                <div className="relative">
                  {/* Pulsing rings */}
                  <div className="absolute inset-0 animate-ping">
                    <div className="w-8 h-8 bg-red-500 rounded-full opacity-75"></div>
                  </div>
                  <div
                    className="absolute inset-0 animate-ping"
                    style={{ animationDelay: "0.5s" }}
                  >
                    <div className="w-8 h-8 bg-red-500 rounded-full opacity-50"></div>
                  </div>
                  <div
                    className="absolute inset-0 animate-ping"
                    style={{ animationDelay: "1s" }}
                  >
                    <div className="w-8 h-8 bg-red-500 rounded-full opacity-25"></div>
                  </div>

                  {/* Main marker */}
                  <div className="relative z-10 w-10 h-10 bg-red-500 rounded-full border-2 border-white shadow-lg flex items-center justify-center">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                </div>
              </Marker>
            </Map>
          </div>

          {/* Map Info Panel */}
          <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-lg border border-gray-200 max-w-xs">
            <div className="flex items-center gap-2 mb-2">
              <FaCompass size={14} className="text-blue-600" />
              <h3 className="font-semibold text-gray-900 text-sm">
                BDP Sells Office
              </h3>
            </div>
            <div className="text-xs text-gray-600 space-y-1">
              <div>• Located in Taylor, MI</div>
              <div>• Serving South East Michigan</div>
              <div>• Professional real estate services</div>
            </div>
          </div>

          {/* Map Controls Info */}
          <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg border border-gray-200">
            <div className="flex items-center gap-2 text-xs text-gray-600">
              <BiSolidNavigation size={14} className="text-blue-600" />
              <span>Use controls to navigate</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMap;
