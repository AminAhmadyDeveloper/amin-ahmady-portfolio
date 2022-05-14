import Header from "../components/Header";
import Info from "./../components/Info";
import Slider from "./../components/Slider";

export default function App() {
  return (
    <div>
      <Header />
      <div className="h-5/6">
        <Info
          name="Amin Ahmady"
          describe="In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual
        form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before
        final copy is available."
          cvAdress="https://bing.com"
        />
      </div>

      <div className="w-full bg-gray-900 px-4 pt-2 bg-fixed">
        <div className="flex flex-col ">
          <h1 className="text-center font-bold ">Skills</h1>
        </div>
        <Slider/>
      </div>
    </div>
  );
}
