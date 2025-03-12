import "./App.css";
import Card from "./components/Card";

function App() {
  return (
    <>
      <h1 className="flex justify-center items-center font-bold text-red-500 bg-white p-4 rounded-xl">
        Hello Antu!
      </h1>

      <Card
        postTitle="A bird with beautiful flower."
        authorName="A. Paul"
        rating="9.5"
        publishedYear="2024"
        imageSource="../src/assets/bird.jpg"
      />
      <Card
        postTitle="A bird with beautiful flower."
        authorName="A. Paul"
        rating="9"
        publishedYear="2014"
        imageSource="../src/assets/meeting.jpg"
      />
      <Card
        postTitle="A bird with beautiful flower."
        authorName="A. Paul"
        rating="10"
        publishedYear="2025"
        imageSource="../src/assets/business-meeting.jpg"
      />
    </>
  );
}

export default App;
