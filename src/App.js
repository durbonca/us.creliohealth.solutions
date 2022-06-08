import {
  Routes,
  Route,
} from "react-router-dom";
import Component from './Component';
import Document from './Document';

function App() {
  return (
    <div>
    <Routes>
      <Route path="/qr_for_userwise_reports/v2/MTk4MTI0/4bc40e6b-ea1d-11eb-9a89-02c5f122bffd/Mjk5NDM0NTA=/" element={<Document usuario="manuel" />} />
      <Route path="/qr_for_userwise_reports/v2/NiIsInR5cCI6/aWNfa2V-JjNDB-WViL-9a89-02c5f122bffd/ZCI6NTUzMTc=/" element={<Document usuario="iracema" />} />
      <Route path="/" element={<Component />} />
    </Routes>
    </div>
  );
}
export default App;
