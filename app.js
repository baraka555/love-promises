import { useState } from "react";
import { motion } from "framer-motion";

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
  "Ungependa niwe na wewe kwa maisha yako yote?",
  "Ni wimbo upi unahisi unaelezea penzi letu?",
  "Kumbukumbu gani unayoipenda sana kati yetu?",
  "Ni kitu gani kidogo ninachofanya kinachokufanya ujisikie kupendwa?",
  "Tunaweza kuota ndoto gani ya siku zijazo pamoja?",
  "Ungependa tuandike barua ya upendo kwa siku ya kumbukumbu?"
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

  const styles = {
    container: {
      maxWidth: "600px",
      margin: "0 auto",
      padding: "20px",
      fontFamily: "sans-serif",
      textAlign: "center",
    },
    title: {
      fontSize: "24px",
      marginBottom: "20px",
    },
    card: {
      background: "#fff0f5",
      padding: "15px",
      borderRadius: "10px",
      margin: "20px 0",
      boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    },
    input: {
      padding: "10px",
      margin: "10px 0",
      width: "90%",
      borderRadius: "8px",
      border: "1px solid #ccc",
    },
    button: {
      padding: "10px 20px",
      borderRadius: "8px",
      border: "none",
      backgroundColor: "#ec407a",
      color: "white",
      cursor: "pointer",
      marginTop: "10px",
    },
    textarea: {
      padding: "10px",
      width: "90%",
      height: "80px",
      borderRadius: "8px",
      border: "1px solid #ccc",
      margin: "10px 0",
    },
  };

  if (!loggedIn) {
    return (
      <div style={styles.container}>
        <h1 style={styles.title}>Ingia kwenye Dunia ya Wapendanao 💖</h1>
        <input
          style={styles.input}
          type="text"
          placeholder="Username"
          value={user}
          onChange={(e) => setUser(e.target.value)}
        />
        <input
          style={styles.input}
          type="password"
          placeholder="Password"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
        />
        <button style={styles.button} onClick={handleLogin}>Ingia</button>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <motion.h1 style={styles.title} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        Karibu {user} 💑
      </motion.h1>

      {currentQuestion < questions.length && (
        <motion.div style={styles.card} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <p><strong>Swali:</strong> {questions[currentQuestion]}</p>
          <textarea
            style={styles.textarea}
            placeholder="Andika jibu lako hapa..."
            value={currentAnswer}
            onChange={(e) => setCurrentAnswer(e.target.value)}
          />
          <button style={styles.button} onClick={submitAnswer}>Tuma Jibu</button>
        </motion.div>
      )}

      <div style={styles.card}>
        <h2>Ahadi Mpya 💌</h2>
        <textarea
          style={styles.textarea}
          placeholder="Andika ahadi yako ya upendo hapa..."
          value={newPromise}
          onChange={(e) => setNewPromise(e.target.value)}
        />
        <button style={styles.button} onClick={submitPromise}>Hifadhi Ahadi</button>
      </div>

      {answers.length > 0 && (
        <div style={styles.card}>
          <h2>Majibu Yako</h2>
          {answers.map((ans, idx) => (
            <p key={idx}><strong>{questions[idx]}</strong><br />{ans}</p>
          ))}
        </div>
      )}

      {promises.length > 0 && (
        <div style={styles.card}>
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
