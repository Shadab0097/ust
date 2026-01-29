// vite.config.js
import { defineConfig } from "file:///B:/ust%20enterprises/node_modules/vite/dist/node/index.js";
import react from "file:///B:/ust%20enterprises/node_modules/@vitejs/plugin-react/dist/index.js";
import { htmlPrerender } from "file:///B:/ust%20enterprises/node_modules/vite-plugin-html-prerender/dist/index.js";
import path from "path";
var __vite_injected_original_dirname = "B:\\ust enterprises";
var productSlugs = [
  "paint-shop-line",
  "hydro-turbine",
  "dust-collector-system",
  "ribbon-blender-machine",
  "screw-conveyor",
  "scissor-lift",
  "water-curtain-paint-booth",
  "atta-chakki-machine",
  "sheet-rolling-machine",
  "telescopic-belt-conveyor",
  "vibro-de-stoner",
  "hammer-mill",
  "blower-fan",
  "tensile-shed",
  "seed-cleaning-machine"
];
var routesToPrerender = [
  "/",
  "/about",
  "/products",
  "/contact",
  "/quote",
  ...productSlugs.map((slug) => `/products/${slug}`)
];
var vite_config_default = defineConfig({
  plugins: [
    react(),
    htmlPrerender({
      staticDir: path.join(__vite_injected_original_dirname, "dist"),
      routes: routesToPrerender,
      rendererOptions: {
        // Wait 1.5s for React to load before saving HTML
        renderAfterTime: 1500,
        headless: true
      },
      minify: {
        collapseBooleanAttributes: true,
        collapseWhitespace: true,
        decodeEntities: true,
        keepClosingSlash: true,
        sortAttributes: true
      }
    })
  ]
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJCOlxcXFx1c3QgZW50ZXJwcmlzZXNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkI6XFxcXHVzdCBlbnRlcnByaXNlc1xcXFx2aXRlLmNvbmZpZy5qc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQjovdXN0JTIwZW50ZXJwcmlzZXMvdml0ZS5jb25maWcuanNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJ1xuaW1wb3J0IHJlYWN0IGZyb20gJ0B2aXRlanMvcGx1Z2luLXJlYWN0J1xuaW1wb3J0IHsgaHRtbFByZXJlbmRlciB9IGZyb20gJ3ZpdGUtcGx1Z2luLWh0bWwtcHJlcmVuZGVyJyAvLyA8LS0tIEZJWEVEIEhFUkVcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnXG5cbi8vIDEuIFlvdXIgUHJvZHVjdCBTbHVnc1xuY29uc3QgcHJvZHVjdFNsdWdzID0gW1xuICAncGFpbnQtc2hvcC1saW5lJyxcbiAgJ2h5ZHJvLXR1cmJpbmUnLFxuICAnZHVzdC1jb2xsZWN0b3Itc3lzdGVtJyxcbiAgJ3JpYmJvbi1ibGVuZGVyLW1hY2hpbmUnLFxuICAnc2NyZXctY29udmV5b3InLFxuICAnc2Npc3Nvci1saWZ0JyxcbiAgJ3dhdGVyLWN1cnRhaW4tcGFpbnQtYm9vdGgnLFxuICAnYXR0YS1jaGFra2ktbWFjaGluZScsXG4gICdzaGVldC1yb2xsaW5nLW1hY2hpbmUnLFxuICAndGVsZXNjb3BpYy1iZWx0LWNvbnZleW9yJyxcbiAgJ3ZpYnJvLWRlLXN0b25lcicsXG4gICdoYW1tZXItbWlsbCcsXG4gICdibG93ZXItZmFuJyxcbiAgJ3RlbnNpbGUtc2hlZCcsXG4gICdzZWVkLWNsZWFuaW5nLW1hY2hpbmUnXG5dO1xuXG4vLyAyLiBEZWZpbmUgcm91dGVzXG5jb25zdCByb3V0ZXNUb1ByZXJlbmRlciA9IFtcbiAgJy8nLFxuICAnL2Fib3V0JyxcbiAgJy9wcm9kdWN0cycsXG4gICcvY29udGFjdCcsXG4gICcvcXVvdGUnLFxuICAuLi5wcm9kdWN0U2x1Z3MubWFwKHNsdWcgPT4gYC9wcm9kdWN0cy8ke3NsdWd9YClcbl07XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIHBsdWdpbnM6IFtcbiAgICByZWFjdCgpLFxuICAgIGh0bWxQcmVyZW5kZXIoe1xuICAgICAgc3RhdGljRGlyOiBwYXRoLmpvaW4oX19kaXJuYW1lLCAnZGlzdCcpLFxuICAgICAgcm91dGVzOiByb3V0ZXNUb1ByZXJlbmRlcixcbiAgICAgIHJlbmRlcmVyT3B0aW9uczoge1xuICAgICAgICAvLyBXYWl0IDEuNXMgZm9yIFJlYWN0IHRvIGxvYWQgYmVmb3JlIHNhdmluZyBIVE1MXG4gICAgICAgIHJlbmRlckFmdGVyVGltZTogMTUwMCxcbiAgICAgICAgaGVhZGxlc3M6IHRydWVcbiAgICAgIH0sXG4gICAgICBtaW5pZnk6IHtcbiAgICAgICAgY29sbGFwc2VCb29sZWFuQXR0cmlidXRlczogdHJ1ZSxcbiAgICAgICAgY29sbGFwc2VXaGl0ZXNwYWNlOiB0cnVlLFxuICAgICAgICBkZWNvZGVFbnRpdGllczogdHJ1ZSxcbiAgICAgICAga2VlcENsb3NpbmdTbGFzaDogdHJ1ZSxcbiAgICAgICAgc29ydEF0dHJpYnV0ZXM6IHRydWUsXG4gICAgICB9LFxuICAgIH0pLFxuICBdLFxufSkiXSwKICAibWFwcGluZ3MiOiAiO0FBQThPLFNBQVMsb0JBQW9CO0FBQzNRLE9BQU8sV0FBVztBQUNsQixTQUFTLHFCQUFxQjtBQUM5QixPQUFPLFVBQVU7QUFIakIsSUFBTSxtQ0FBbUM7QUFNekMsSUFBTSxlQUFlO0FBQUEsRUFDbkI7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUNGO0FBR0EsSUFBTSxvQkFBb0I7QUFBQSxFQUN4QjtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBLEdBQUcsYUFBYSxJQUFJLFVBQVEsYUFBYSxJQUFJLEVBQUU7QUFDakQ7QUFFQSxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTO0FBQUEsSUFDUCxNQUFNO0FBQUEsSUFDTixjQUFjO0FBQUEsTUFDWixXQUFXLEtBQUssS0FBSyxrQ0FBVyxNQUFNO0FBQUEsTUFDdEMsUUFBUTtBQUFBLE1BQ1IsaUJBQWlCO0FBQUE7QUFBQSxRQUVmLGlCQUFpQjtBQUFBLFFBQ2pCLFVBQVU7QUFBQSxNQUNaO0FBQUEsTUFDQSxRQUFRO0FBQUEsUUFDTiwyQkFBMkI7QUFBQSxRQUMzQixvQkFBb0I7QUFBQSxRQUNwQixnQkFBZ0I7QUFBQSxRQUNoQixrQkFBa0I7QUFBQSxRQUNsQixnQkFBZ0I7QUFBQSxNQUNsQjtBQUFBLElBQ0YsQ0FBQztBQUFBLEVBQ0g7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
