import { useState } from "react";
import { motion } from "framer-motion";
import "./App.css";

const users = {
  baraka555: "kotrix555",
  amina555: "lovely555",
};

const questions = [
  "Ni kitu gani unachopenda zaidi kwangu?",
  "Ungependa tufanye nini siku moja tukiwa peke yetu?",
  "Ni kitu gani kilikufanya unipende zaidi?",
  "Ni ahadi gani ungependa kutimiza kwa ajili yangu?",
  "Ni sehemu gani ungependa twende tukiwa wawili?",
  "Ulinijua vipi kwa mara ya kwanza, na ulikuwa na hisia gani?",
  "Kama ningekupatia zawadi ya kipekee, ungempenda?",
  "Unapohisi huzuni, unataka nifanye nini kukufariji?",
  "Unapofikiria juu yangu, nini kinakuja akilini mwako?",
  "Ungependa niwe na wewe kwa maisha yako yote?"
];

function App() {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [answers, setAnswers] = useState([]);
  const [promises, setPromises] = useState([]);

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [currentAnswer, setCurrentAnswer] = useState("");
  const [newPromise, setNewPromise] = useState("");

  const handleLogin = () => {
    if (users[user] === pass) {
      setLoggedIn(true);
    } else {
      alert("Username au password sio sahihi!");
    }
  };

  const submitAnswer = () => {
    const updated = [...answers];
    updated[currentQuestion] = currentAnswer;
    setAnswers(updated);
    setCurrentAnswer("");
    setCurrentQuestion(currentQuestion + 1);
  };

  const submitPromise = () => {
    setPromises([...promises, newPromise]);
    setNewPromise("");
  };

  if (!loggedIn) {
    return (
      <div className="container">
        <h1 className="title">Ingia kwenye Dunia ya Wapendanao 💖</h1>
        <input
          type="text"
          placeholder="Username"
          value={user}
          onChange={(e) => setUser(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
        />
        <button onClick={handleLogin}>Ingia</button>
      </div>
    );
  }

  return (
    <div className="container">
      <motion.h1 className="title" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        Karibu {user} 💑
      </motion.h1>

      {currentQuestion < questions.length && (
        <motion.div className="card" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <p><strong>Swali:</strong> {questions[currentQuestion]}</p>
          <textarea
            placeholder="Andika jibu lako hapa..."
            value={currentAnswer}
            onChange={(e) => setCurrentAnswer(e.target.value)}
          />
          <button onClick={submitAnswer}>Tuma Jibu</button>
        </motion.div>
      )}

      <div className="card">
        <h2>Ahadi Mpya 💌</h2>
        <textarea
          placeholder="Andika ahadi yako ya upendo hapa..."
          value={newPromise}
          onChange={(e) => setNewPromise(e.target.value)}
        />
        <button onClick={submitPromise}>Hifadhi Ahadi</button>
      </div>

      {answers.length > 0 && (
        <div className="card">
          <h2>Majibu Yako</h2>
          {answers.map((ans, idx) => (
            <p key={idx}><strong>{questions[idx]}</strong><br />{ans}</p>
          ))}
        </div>
      )}

      {promises.length > 0 && (
        <div className="card">
          <h2>Ahadi Zilizohifadhiwa</h2>
          {promises.map((p, i) => (
            <p key={i}>💖 {p}</p>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
