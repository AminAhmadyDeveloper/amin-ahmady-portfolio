import Header from "../components/Header";
import Info from "./../components/Info";

export default function App() {
  return (
    <div>
      <Header />
      <Info
        name="Amin Ahmady"
        describe="I'm Soheil Qorbani. I'm a curious person who wants to know
            everything so they call me Full-stack developer 😀. I'm working with
            newest front-end frameworks like React, Next and flutter. and for
            the back-end I work with nodeJs, expressJs and firebase. I'm also a
            mobile app developer I use kotlin and java for native android
            development and flutter for both android and IOS. Thank you for your
            interest 💛."
        cvAdress="https://bing.com"
      />
    </div>
  );
}
