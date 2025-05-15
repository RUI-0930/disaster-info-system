export default function GoogleMap() {
    const key = process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY;
    const src="https://maps.google.com/maps?q=24.9846,121.3391&z=14&output=embed"
    return (
      <div className="w-full h-[450px]">
        <iframe
          src={src}
          allowFullScreen
          loading="lazy"
          className="w-full h-full border-0"
        ></iframe>
      </div>
    );
  }
// import { GoogleMap, LoadScript } from '@react-google-maps/api';

// const containerStyle = {
//   width: '100%',
//   height: '400px',
// };

// const center = {
//   lat: 25.0330,
//   lng: 121.5654,
// };

// export default function MyMap() {
//   return (
//     <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}>
//       <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={14}>
//         {/* 你可以在這加入 Marker、Polyline 等 */}
//       </GoogleMap>
//     </LoadScript>
//   );
// }
